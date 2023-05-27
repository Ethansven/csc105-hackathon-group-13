import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mysql from "mysql2";
import login from "./endpoints/login.js";
import regis from "./endpoints/regis.js";
import logout from "./endpoints/logout.js";
import answer from "./endpoints/answer.js";
import authMiddleware from "./endpoints/authMiddleware.js";
import submit from "./endpoints/submit.js";
import getFish from "./endpoints/getFish.js";
import getUser from "./endpoints/getUser.js";
import getFishs from "./endpoints/getFishs.js";
const app = express();
const port = 5000;
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
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
app.post("/login", login);
app.post("/regis", regis);
app.get("/logout", logout);
app.get("/fish", getFishs);
app.get("/fish/:id",authMiddleware ,getFish);
app.get("/getUser", authMiddleware,getUser);
app.post("/answer/:id",authMiddleware, answer);
app.get("/submit",authMiddleware,submit);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
