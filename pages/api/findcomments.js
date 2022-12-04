import clientPromise from './../../lib/mongodb';
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        console.log(req.body);
        const client = await clientPromise;
        const db = client.db('bad-dates-db');
        let myComments = await db
          .collection('comments')
          .find({storyID: req.body.commentID})
          .toArray();
          console.log(myComments);
        res.json({ data: myComments });
    }
  } catch (err) {
    console.log('THERE WAS AN ERROR');
    console.log(err);
  }
}
