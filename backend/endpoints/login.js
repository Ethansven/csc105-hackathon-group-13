import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import util from "util";

export default async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = util.promisify(connection.query).bind(connection);
  try {
    const rows = await query("SELECT * FROM user WHERE username  =?", [
      username,
    ]);
   
    const numRows = rows.length;
    if (numRows == 0) {
      return res.status(400).json({
        success: false,
        message: "Username not found",
      });
    }
    const valid = await bcrypt.compare(password, rows[0].hashed_password);
    if (!valid) {
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }
    const token = jwt.sign(
      {
        data: rows[0].id,
      },
      "stupidsecret",
      { expiresIn: "1h" }
    );
    // console.log("login token");
    // console.log(token);
    res.cookie("jwt_token", token);
    res.json({
      success: true,
      message: "Login success",
      user: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
