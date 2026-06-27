import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// database path matches the original path to preserve existing data
const dbPath = path.resolve(__dirname, '../Server/data/db.json');

const readDB = () => {
  try {
    if (!fs.existsSync(dbPath)) {
      return { offers: [] };
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading DB:', error);
    return { offers: [] };
  }
};

const writeDB = (data) => {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing DB:', error);
  }
};

// GET /api/offers
export const getOffers = (req, res) => {
  const db = readDB();
  res.json(db.offers || []);
};

// POST /api/offers
export const createOffer = (req, res) => {
  try {
    const { title, description, category, badge, validUntil, terms, image } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    const db = readDB();
    const newOffer = {
      id: Date.now().toString(),
      title,
      description,
      category: category || 'General',
      badge: badge || 'Promo',
      validUntil: validUntil || 'N/A',
      terms: terms || '',
      image: image || ''
    };
    db.offers = db.offers || [];
    db.offers.push(newOffer);
    writeDB(db);
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/offers/:id
export const updateOffer = (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, category, badge, validUntil, terms, image } = req.body;
    const db = readDB();
    db.offers = db.offers || [];
    const index = db.offers.findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    const updatedOffer = {
      ...db.offers[index],
      title: title !== undefined ? title : db.offers[index].title,
      description: description !== undefined ? description : db.offers[index].description,
      category: category !== undefined ? category : db.offers[index].category,
      badge: badge !== undefined ? badge : db.offers[index].badge,
      validUntil: validUntil !== undefined ? validUntil : db.offers[index].validUntil,
      terms: terms !== undefined ? terms : db.offers[index].terms,
      image: image !== undefined ? image : db.offers[index].image
    };
    db.offers[index] = updatedOffer;
    writeDB(db);
    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/offers/:id
export const deleteOffer = (req, res) => {
  try {
    const id = req.params.id;
    const db = readDB();
    db.offers = db.offers || [];
    const filteredOffers = db.offers.filter(item => item.id !== id);
    if (filteredOffers.length === db.offers.length) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    db.offers = filteredOffers;
    writeDB(db);
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
