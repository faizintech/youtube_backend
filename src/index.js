import mongoose, { mongo } from "mongoose";
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { DB_NAME } from "./constant.js";
import { connectDB } from "./db/index.js";

const app = express()
const Port = process.env.PORT || 8000
connectDB().then(() => {
  app.listen(Port, () => {
    console.log(`🌐 server running at PORT: ${Port}`)
  })
}).catch((error) => {
  console.log(`👎 MongoDB is not Connected !! ${error}`)
})


























// first approach
/*
import express from "express";
const app = express()
  (async function connectDB() {
    try {
      await mongoose.connect(`${process.env.mongoDB_URI}/${DB_NAME}`)

      // error while connecting the data base
      app.on("error", (error) => {
        console.log("Error :", error)
        throw error
      })

      // if the connection has been happend then the connection is on the line
      app.listen(process.env.PORT, () => {
        console.log(`your app is listening on the port ${process.env.PORT}`)
      })

    } catch (error) {
      console.log("ERROR : ", error)
      throw error
    }
  })()
  */ 