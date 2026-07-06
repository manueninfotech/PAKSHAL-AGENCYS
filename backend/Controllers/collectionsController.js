import Collection from '../Modal/Collection.js';

// GET /api/collections
export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/collections/:id
export const updateCollection = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, subtitle, image } = req.body;
    
    const updatedCollection = await Collection.findOneAndUpdate(
      { id: id },
      {
        $set: {
          ...(title !== undefined && { title }),
          ...(subtitle !== undefined && { subtitle }),
          ...(image !== undefined && { image })
        }
      },
      { new: true }
    );
    
    if (!updatedCollection) {
      return res.status(404).json({ error: 'Collection item not found' });
    }
    
    res.json(updatedCollection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
