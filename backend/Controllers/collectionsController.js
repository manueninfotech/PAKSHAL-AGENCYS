import { readDB, writeDB, DEFAULT_COLLECTIONS } from '../Utils/dbHelper.js';

// GET /api/collections
export const getCollections = (req, res) => {
  const db = readDB();
  res.json(db.collections || DEFAULT_COLLECTIONS);
};

// PUT /api/collections/:id
export const updateCollection = (req, res) => {
  try {
    const id = req.params.id;
    const { title, subtitle, image } = req.body;
    const db = readDB();
    
    db.collections = db.collections || DEFAULT_COLLECTIONS;
    const index = db.collections.findIndex(item => item.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Collection item not found' });
    }
    
    db.collections[index] = {
      ...db.collections[index],
      title: title !== undefined ? title : db.collections[index].title,
      subtitle: subtitle !== undefined ? subtitle : db.collections[index].subtitle,
      image: image !== undefined ? image : db.collections[index].image
    };
    
    writeDB(db);
    res.json(db.collections[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
