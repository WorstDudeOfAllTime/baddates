import mongoDB from './../../lib/mongodb';
import LocationModel from '../../Models/LocationModel';
export default async function handler(req, res) {;
  const locationSend = new LocationModel(req.body);
  try {
    locationSend.save();
    res.json({data: locationSend});
  }catch(err){
    console.log(err);
  }

}