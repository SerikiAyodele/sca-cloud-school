import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous"
  },
  text: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default MessageSchema;