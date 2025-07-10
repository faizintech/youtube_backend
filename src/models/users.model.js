import mongoose, { Schema, mongo } from "mongoose";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt"
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  }, fullName: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  avatar: {
    type: String, //cloudnary
    required: true,
  },
  coverImage: {
    type: String,
  }, watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "videos"
    }
  ],
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  refreshToken: {
    type: String
  }
}, { timestamps: true })

export const User = mongoose.model("User", usersSchema)



// function for the password hashing by bcrypt

usersSchema.pre("save", async function (next) {
  if (!this.ismodified("password")) return next()
  this.password = bcrypt.hash(this.password)
  next()
})


// now we can also create some method to check or validate or compare the password

usersSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare("password", this.password)
}



// now we can also generate tokens by JWT inn and insert it in the userSchema

usersSchema.methods.generateAccessToken = async function () {
  return jwt.sign({
    _id: this._id,
    emial: this.email,
    username: this.username,
    fullName: this.fullName
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  })
}


// now we can also generate refresh token in this way

usersSchema.methods.generateRefreshToken = async function () {
  return jwt.sign({
    _id: this._id
  }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIN: process.env.REFRESH_TOKEN_EXPIRY
  })
}
