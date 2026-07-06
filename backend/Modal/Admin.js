import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, default: 'admin@pakshal.com' },
  password: { type: String, required: true, default: 'admin@pakshal' },
  passcode: { type: String, required: true, default: 'admin123' },
  offersEnabled: { type: Boolean, default: true }
});

export default mongoose.model('Admin', adminSchema);
