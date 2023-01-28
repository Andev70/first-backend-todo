require("./db/connect");
const connectDB = require("./db/connect");
const express = require("express");
require("dotenv").config();
const tasks = require("./routes/tasks.js");
const app = express();
// middleware
app.use(express.json());
app.use(express.static("./public"));

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server is listening to port 3000...");
    });
  } catch (e) {
    console.log(e);
  }
};

start();

app.use("/api/v1/tasks", tasks);
