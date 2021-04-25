// import * as dotenv from "dotenv"
// import mongoose from "mongoose"

// dotenv.config()

export async function dbConnect(){
    if(mongoose.connection.readyState >= 1){
        return;
    }
return mongoose.connect(process.env.MONGO_URI)
}