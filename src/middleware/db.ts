// import * as dotenv from "dotenv"
import mongoose from "mongoose";

// dotenv.config()
const connection ={};


async function dbConnect(){
  // if(mongoose.connection.readyState >= 1){
  //   return;
// }
  if(connection.isConnected){
    return;
  }
  
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connection[0].readyState;
  console.log(connection.isConnected)
}

export default dbConnect;