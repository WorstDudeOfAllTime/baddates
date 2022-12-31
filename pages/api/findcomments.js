import mongoDB from './../../lib/mongodb';
import CommentModel from './../../Models/CommentModel';
export default async function handler(req, res) {
  console.log(req.body)
  try {
    switch (req.method) {
      case 'POST':
        let myComments = await CommentModel.find({ date_Id: req.body.date_Id });
        res.send(myComments);
    }
  } catch (err) {
    console.log('THERE WAS AN ERROR');
    console.log(err);
  }
}
