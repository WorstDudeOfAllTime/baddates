import {MongoClient} from 'mongodb';

const uri = "mongodb+srv://wdoat:3WORSTdudeOFall3@cluster0.jjma8g3.mongodb.net/?retryWrites=true&w=majority"
const options ={
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;
