import express from "express";
import path from "path";

const app = express();
const port = 8000;

app.use('/', express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});