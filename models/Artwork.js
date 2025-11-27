import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: ['drawing', 'graphic-design']
  },
  image_url: {
    type: String,
    required: true
  }
}, {
  timestamps: true  
})

export const Artwork = mongoose.model('Artwork', artworkSchema);
