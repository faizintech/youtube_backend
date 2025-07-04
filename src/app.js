import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

// configuration for cross origin resource sharing(CORS)
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// Configuration for file taking or Middleware
app.use(express.json({
  limit: "16KB",
}))
// configuration for the url information for parsing data
app.use(express.urlencoded({
  limit: "16kb",
  extended: true
}))
// configuration for the file that come in backend
app.use(express.static("public"))




// configuration for saving the cookie

app.use(cookieParser()) //you can also pass some configration setting at cookie-parser npm 






export { app }