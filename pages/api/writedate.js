import mongoDB from './../../lib/mongodb';
import BadDateModel from '../../Models/BadDateModel';
export default async function handler(req, res) {
  try {
    const baddate = new BadDateModel(req.body);
    baddate.save();
    res.json({data: baddate});
  }catch(err){
    console.log(err);
  }

}
