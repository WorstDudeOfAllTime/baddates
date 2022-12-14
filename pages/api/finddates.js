import mongoDB from './../../lib/mongodb';
import BadDateModel from '../../Models/BadDateModel'
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'POST':
        let myDates = await BadDateModel.find({location_Id: req.body.location_Id})
        res.send(myDates);
    }
  } catch (err) {
    console.log(err);
  }
}
