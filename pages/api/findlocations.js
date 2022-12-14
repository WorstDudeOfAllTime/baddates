import mongoDB from './../../lib/mongodb';
import LocationModel from '../../Models/LocationModel';
export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        let myLocations = await LocationModel.find({});
        res.status(200).json({data: myLocations});
    }
  } catch (err) {
    console.log(err);
  }
}
