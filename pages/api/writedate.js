import mongoDB from './../../lib/mongodb';
import BadDateModel from '../../Models/BadDateModel';
export default async function handler(req, res) {
  console.log(req.body)
  const baddate = new BadDateModel(req.body);
  try {
    baddate.save();
    res.json({data: baddate});
  }catch(err){
    console.log(err);
  }

}
