import dbConnect from '../../../middleware/db';
import User from '../../../models/User';

dbConnect();

export default async (req, res) =>{

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const Users = await User.find({})
        res.status(200).json({success: true, data: Users})
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    case "POST":
      try {
        const Users = await User.create(req.body);
        res.status(201).json({success: true, data: Users})

      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    default:
      break;
  }
}