import mongoDB from './../../lib/mongodb';
import BadDateModel from '../../Models/BadDateModel';
import LocationModel from '../../Models/LocationModel';
import CommentModel from '../../Models/CommentModel';
export default async function handler(req, res) {
  try {
    BadDateModel.remove({}, () => {
      console.log('Dates Removed');
    });
    LocationModel.remove({}, () => {
      console.log('Locations Removed');
    });
    CommentModel.remove({}, ()=> {
      console.log('Comments Removed')
    })

  } catch (err) {
    console.log(err);
  }
}
