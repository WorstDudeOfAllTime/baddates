import {MongoClient} from 'mongodb';

const uri = 
const options ={
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;
