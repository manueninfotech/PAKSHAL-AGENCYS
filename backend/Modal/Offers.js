import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, default: 'General' },
  badge: { type: String, default: 'Limited Time' },
  validUntil: { type: String, default: 'N/A' },
  terms: { type: String, default: '' },
  image: { type: String, default: '' },
  enabled: { type: Boolean, default: true }
}, { timestamps: true });

// Transform _id to virtual id for frontend compatibility
offerSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model('Offer', offerSchema);
