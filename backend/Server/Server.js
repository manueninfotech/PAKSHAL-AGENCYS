import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from backend/.env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import Admin from '../Modal/Admin.js';
import Collection from '../Modal/Collection.js';
import offersRoutes from '../Routes/offersRoutes.js';
import uploadRoutes from '../Routes/uploadRoutes.js';
import collectionsRoutes from '../Routes/collectionsRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists relative to this file
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve uploads statically
app.use('/uploads', express.static(uploadsDir));

// Connect to MongoDB
const DEFAULT_COLLECTIONS = [
  { id: "col1", title: "MARINE PLYWOOD", subtitle: "Strong. Durable. Reliable.", image: "" },
  { id: "col2", title: "VENEERS", subtitle: "Natural Beauty. Perfect Finish", image: "" },
  { id: "col3", title: "LAMINATES", subtitle: "Style That Stands Out", image: "" },
  { id: "col4", title: "HARDWARE FITTINGS", subtitle: "Precision in Every Detail", image: "" },
  { id: "col5", title: "DOORS & ACCESSORIES", subtitle: "Complete Your Interior", image: "" }
];

const seedDefaults = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      await Admin.create({
        email: 'admin@pakshal.com',
        password: 'admin@pakshal',
        passcode: 'admin123',
        offersEnabled: true
      });
      console.log('Default administrator created successfully.');
    }

    const collectionCount = await Collection.countDocuments();
    if (collectionCount === 0) {
      await Collection.insertMany(DEFAULT_COLLECTIONS);
      console.log('Default collections seeded successfully.');
    }
  } catch (err) {
    console.error('Error seeding database defaults:', err);
  }
};

mongoose.connect(process.env.MONGO_URI, { dbName: 'Pakshal_Agencys' })
  .then(() => {
    console.log('Connected to MongoDB successfully to database: Pakshal_Agencys');
    seedDefaults();
  })
  .catch((err) => {
    console.error('CRITICAL: Failed to connect to MongoDB.');
    console.error('Please verify your MONGO_URI in backend/.env is correct and contains valid credentials.');
    console.error(err);
  });

// Admin Authentication endpoints
app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, error: 'Invalid email or password.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/admin/verify-passcode', async (req, res) => {
  try {
    const { passcode } = req.body;
    const admin = await Admin.findOne({ passcode });
    if (admin) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, error: 'Invalid passcode.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Mount modular routes
app.use('/api/offers', offersRoutes);
app.use('/api/collections', collectionsRoutes);
app.use('/api', uploadRoutes);

// Root route handler for server status
app.get('/', (req, res) => {
  res.json({ status: "success", message: "Pakshal Agencies Backend Server is running" });
});

// Determine host: if PORT env var is present (e.g. on Render) or '--host' is passed, bind to '0.0.0.0'
const host = process.env.PORT || process.argv.includes('--host') ? '0.0.0.0' : 'localhost';

app.listen(PORT, host, () => {
  console.log(`\nServer is running:`);
  console.log(`  - Local:   http://localhost:${PORT}`);

  if (host === '0.0.0.0') {
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        // Skip over non-IPv4 and internal addresses
        if ((net.family === 'IPv4' || net.family === 4) && !net.internal) {
          console.log(`  - Network: http://${net.address}:${PORT}`);
        }
      }
    }
  }
  console.log('');
});



