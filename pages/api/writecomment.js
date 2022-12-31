import CommentModel from './../../Models/CommentModel';
export default async function handler(req, res) {
  try {
    const comment = new CommentModel(req.body);
    comment.save();
    res.json({data: comment});
  } catch(err) {
    console.log(err)
  }
}
