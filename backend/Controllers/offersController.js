import Offer from '../Modal/Offers.js';
import Admin from '../Modal/Admin.js';

// GET /api/offers
export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/offers
export const createOffer = async (req, res) => {
  try {
    const { title, description, category, badge, validUntil, terms, image, enabled } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    const newOffer = new Offer({
      title,
      description,
      category,
      badge,
      validUntil,
      terms,
      image,
      enabled: enabled !== undefined ? !!enabled : true
    });
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/offers/:id
export const updateOffer = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, category, badge, validUntil, terms, image, enabled } = req.body;
    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(title !== undefined && { title }),
          ...(description !== undefined && { description }),
          ...(category !== undefined && { category }),
          ...(badge !== undefined && { badge }),
          ...(validUntil !== undefined && { validUntil }),
          ...(terms !== undefined && { terms }),
          ...(image !== undefined && { image }),
          ...(enabled !== undefined && { enabled: !!enabled })
        }
      },
      { new: true }
    );
    if (!updatedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/offers/:id
export const deleteOffer = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Offer.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Offer not found' });
    }
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/offers/status
export const getOffersStatus = async (req, res) => {
  try {
    let admin = await Admin.findOne();
    if (!admin) {
      admin = await Admin.create({
        email: 'admin@pakshal.com',
        password: 'admin@pakshal',
        passcode: 'admin123',
        offersEnabled: true
      });
    }
    res.json({ offersEnabled: admin.offersEnabled });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/offers/status
export const updateOffersStatus = async (req, res) => {
  try {
    const { offersEnabled } = req.body;
    if (offersEnabled === undefined) {
      return res.status(400).json({ error: 'offersEnabled parameter is required' });
    }
    let admin = await Admin.findOne();
    if (!admin) {
      admin = new Admin();
    }
    admin.offersEnabled = !!offersEnabled;
    await admin.save();
    res.json({ offersEnabled: admin.offersEnabled });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
