const mongoose = require('mongoose');

const BadDateSchema = new mongoose.Schema({
  location: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  story: { type: String, required: true },
  versionKey: false
});

module.exports = mongoose.models.BadDate || mongoose.model('BadDate', BadDateSchema);
