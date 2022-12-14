const mongoose = require('mongoose');

const BadDateSchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    location_Id: { type: String, required: true },
    date_Id: {type: String, required: true},
    address: { type: String, required: true },
    date: { type: Date, default: Date.now },
    story: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports =
  mongoose.models.BadDate || mongoose.model('BadDate', BadDateSchema);
