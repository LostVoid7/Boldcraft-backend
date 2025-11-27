// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password_hash: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const User = mongoose.model('User', userSchema);

