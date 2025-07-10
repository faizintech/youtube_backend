import mongoose, { Schema, mongo } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";


const videoSchema = new mongoose.Schema({
  videoFile: {
    type: String,  //cloudanry URL
    required: true
  }, thumbnail: {
    type: String,
    required: true

  }, title: {
    type: String,
    required: true

  }, description: {
    type: String,
    required: true

  }, duration: {
    type: Number,
    required: true
  }, views: {
    type: Number,
    default: 0
  }, isPublished: {
    type: Boolean,
    default: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true })


mongoose.plugin(mongooseAggregatePaginate)

const Video = mongoose.model("Video", videoSchema)