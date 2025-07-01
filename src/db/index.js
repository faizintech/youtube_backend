
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
  try {
    const conncectioninstance = await mongoose.connect(`${process.env.mongoDB_URI}/${process.env.DB_NAME}`)
    console.log(`mongoDB is connected!! DB HOST:${conncectioninstance.connection.host}`)
  } catch (error) {
    console.log("Error :", error)
    throw error
    process.exit(1)
  }
}