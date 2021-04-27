import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/config";
import MessageModel from "./models/message";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(config.mongoUrl, {
  user: config.mongoUsername, 
  pass: config.mongoPassword, 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.get("/ready", (_, res) => {
  if (mongoose.connection.readyState == 1) {
    res.send("OK");
  }
});

app.post("/message", async (req, res) => {
  try {
    const message = {
      name: req.body.name != "" ? req.body.name : "Anonymous",
      text: req.body.text
    };
    await MessageModel.create(message);
    res.send(JSON.stringify(message));
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
});

app.get("/messages", async (_, res) => {
  const messages = await MessageModel.find({}).limit(50).sort({date: -1});
  res.send(messages);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});