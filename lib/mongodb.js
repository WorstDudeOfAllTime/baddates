import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
const mongoDB = mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  strictQuery: true,
  useUnifiedTopology: true,
});
export default mongoDB;
