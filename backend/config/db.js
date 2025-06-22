import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


export const connectDB = async () => {
 try {
  const conn= await mongoose.connect(process.env.MONGO_URI)
     console.log("connected to mongoose")
 } catch (error) {
    console.log("connection failed");
        console.log(error);
 }
    
};
