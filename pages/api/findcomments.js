import mongoDB from './../../lib/mongodb';
import CommentModel from './../../Models/CommentModel';
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        let myComments = await CommentModel.find({ location_Id: req.body.location_Id});
        res.send(myComments);
    }
  } catch (err) {
    console.log('THERE WAS AN ERROR');
    console.log(err);
  }
}
