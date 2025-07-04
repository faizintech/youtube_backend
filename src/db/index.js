
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
  try {
    const conncectioninstance = await mongoose.connect(`${process.env.mongoDB_URI}/${process.env.DB_NAME}`)
    console.log(`✅ mongo db is connnected succesfully DB HOST:${conncectioninstance.connection.host}`)

  } catch (error) {
    console.log("❌ FAILED to Connect DataBase  :", error)
    process.exit(1)
  }
}