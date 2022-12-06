import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
const mongoDB = mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(mongoDB);
export default mongoDB;
