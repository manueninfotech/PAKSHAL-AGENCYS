import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { readDB, writeDB } from '../Utils/dbHelper.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from backend/.env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Manually parse CLOUDINARY_URL for robust configuration
const parseCloudinaryUrl = (url) => {
  if (!url) return null;
  const match = url.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  if (match) {
    return {
      api_key: match[1],
      api_secret: match[2],
      cloud_name: match[3],
    };
  }
  return null;
};

const cloudinaryConfig = parseCloudinaryUrl(process.env.CLOUDINARY_URL);
if (cloudinaryConfig) {
  cloudinary.config({
    cloud_name: cloudinaryConfig.cloud_name,
    api_key: cloudinaryConfig.api_key,
    api_secret: cloudinaryConfig.api_secret,
    secure: true
  });
}

// Maintain identical uploads path relative to the root backend/Server directory
const uploadsDir = path.resolve(__dirname, '../Server/uploads');

// Ensure uploads folder exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, 'file-' + uniqueSuffix + ext);
  }
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|webp|svg/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only images are allowed (jpg, jpeg, png, gif, webp, svg)'));
  }
});



// POST /api/upload
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }
    
    // Upload local temporary file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'pakshal_agencies'
    });
    
    // Delete local temporary file
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    // Save to db.json
    const db = readDB();
    db.images = db.images || [];
    const newImage = {
      name: req.file.filename,
      url: result.secure_url,
      uploadedAt: Date.now()
    };
    db.images.push(newImage);
    writeDB(db);
    
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    // Make sure we clean up the local file if it exists
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message });
  }
};

// GET /api/images
export const getImages = (req, res) => {
  try {
    const db = readDB();
    const images = (db.images || []).sort((a, b) => b.uploadedAt - a.uploadedAt);
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/images/:filename
export const deleteImage = (req, res) => {
  try {
    const filename = req.params.filename;
    const db = readDB();
    db.images = db.images || [];
    
    const index = db.images.findIndex(img => img.name === filename);
    if (index !== -1) {
      db.images.splice(index, 1);
      writeDB(db);
      res.json({ message: 'Image deleted successfully from database' });
    } else {
      res.status(404).json({ error: 'Image not found in database' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
