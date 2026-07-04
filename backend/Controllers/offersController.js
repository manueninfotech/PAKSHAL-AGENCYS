import { readDB, writeDB } from '../Utils/dbHelper.js';


// GET /api/offers
export const getOffers = (req, res) => {
  const db = readDB();
  res.json(db.offers || []);
};

// POST /api/offers
export const createOffer = (req, res) => {
  try {
    const { title, description, category, badge, validUntil, terms, image, enabled } = req.body;
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
      image: image || '',
      enabled: enabled !== undefined ? !!enabled : true
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
    const { title, description, category, badge, validUntil, terms, image, enabled } = req.body;
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
      image: image !== undefined ? image : db.offers[index].image,
      enabled: enabled !== undefined ? !!enabled : (db.offers[index].enabled !== false)
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

// GET /api/offers/status
export const getOffersStatus = (req, res) => {
  try {
    const db = readDB();
    res.json(db.settings || { offersEnabled: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/offers/status
export const updateOffersStatus = (req, res) => {
  try {
    const { offersEnabled } = req.body;
    if (offersEnabled === undefined) {
      return res.status(400).json({ error: 'offersEnabled parameter is required' });
    }
    const db = readDB();
    db.settings = {
      ...db.settings,
      offersEnabled: !!offersEnabled
    };
    writeDB(db);
    res.json(db.settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
