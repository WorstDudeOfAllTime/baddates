const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    date_Id: { type: String, required: true },
    location_Id: {type: String, required: true},
    date: { type: Date, required: true },
    comment: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports =
  mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
