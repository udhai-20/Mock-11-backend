const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const userRouter = require("./router/user.router");
const port = process.env.PORT || 8012;
const app = express();

app.use(express.json());

// app.get("", (req, res) => {
//   res.send("welcome");
// });

app.use("", userRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log(`server connect to db http://localhost:${port}/`);
  } catch (err) {
    console.log("connection is failed");
    console.log(err);
  }
});
