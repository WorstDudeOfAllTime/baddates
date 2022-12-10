import mongoDB from './../../lib/mongodb';
import BadDateModel from '../../Models/BadDateModel'
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        let myDates = await BadDateModel.find({});
        res.status(200).json({data: myDates});
    }
  } catch (err) {
    console.log(err);
  }
}
