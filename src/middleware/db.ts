// import * as dotenv from "dotenv"
import mongoose from "mongoose";

// dotenv.config()
const connection:any = {};

async function dbConnect(){
  if(mongoose.connection.readyState >= 1){
    return;
  }

  console.log('hgoe')
  if(connection.isConnected){
    console.log("isConnected")
    return;
  }
  
  const db = await mongoose.connect("mongodb://mongo:27017/mino", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;