import mongoDB from './../../lib/mongodb';
import BadDateModel from '../../Models/BadDateModel';
import LocationModel from '../../Models/LocationModel';
export default async function handler(req, res) {
  try {
    BadDateModel.remove({}, () => {
      console.log('this has been removed');
    });
    LocationModel.remove({}, () => {
      console.log('this jawn has been removed');
    });
  } catch (err) {
    console.log(err);
  }
}
