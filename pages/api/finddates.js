import clientPromise from './../../lib/mongodb';
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const client = await clientPromise;
        const db = client.db('bad-dates-db');
        let myDates = await db.collection('dates').find({}).toArray();
        res.json({data: myDates});
    }
  } catch (err) {
    console.log('THERE WAS AN ERROR');
    console.log(err);
  }
}
