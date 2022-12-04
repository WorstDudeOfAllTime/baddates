import clientPromise from './../../lib/mongodb'
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('bad-dates-db');
  let bodyObject = req.body
  let myComments = await db.collection('comments').insertOne(bodyObject);
}
