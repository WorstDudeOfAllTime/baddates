import mongoDB from './../../lib/mongodb';
import LocationModel from '../../Models/LocationModel';

export async function getLocations() {
  const response = await LocationModel.find({})
  return response;
}

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const myLocations = await getLocations();
        console.log('YOU MADE IT THIS FAR')
        console.log(myLocations)
        res.status(200).send(myLocations);
    }
  } catch (err) {
    console.log(err);
  }
}
