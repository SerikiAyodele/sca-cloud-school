import mongoose from "mongoose";
import MessageSchema from "../schemas/message";

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;