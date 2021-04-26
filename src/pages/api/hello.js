import dbConnect from "../../../src/middleware/db";

dbConnect();

export default async (req, res) => {

  res.json({test:'hello'});
}