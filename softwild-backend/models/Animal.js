// models/Animal.js
import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  id: String,
  species: String,
  location: {
    lat: Number,
    lng: Number,
  },
  temperature: Number,
  humidity: Number,
  timestamp: Date
});

export default mongoose.model('Animal', animalSchema);
