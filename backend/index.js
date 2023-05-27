import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mysql from "mysql2";
import login from "./endpoints/login.js";
import regis from "./endpoints/regis.js";
import editAnswer from "./endpoints/editAnswer.js";
const app = express();
const port = 5000;
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());
const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: "3306",
  user: "group13",
  password: "202213243",
  database: "group13",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is connected");
  }
});
app.use(express.json());
global.connection = connection;
app.post("/login",login);
app.post("/regis", regis);
app.patch("/editAnswer",editAnswer);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});