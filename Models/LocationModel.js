const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    location_Id: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  { versionKey: false }
);

module.exports =
  mongoose.models.Location || mongoose.model('Location', LocationSchema);
