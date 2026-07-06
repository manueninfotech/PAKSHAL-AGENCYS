import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // 'col1', 'col2', etc.
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, default: '' }
});

collectionSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model('Collection', collectionSchema);
