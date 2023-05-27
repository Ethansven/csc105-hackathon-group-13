import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  global.connection.query(
    "SELECT * FROM user WHERE username  =?",
    [username],
    async (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      const numRows = rows.length;
      if (numRows == 0) {
        res.json({
          success: false,
          message: "Username not found",
        });
      } else {
        const valid = await bcrypt.compare(password, rows[0].hashed_password);
        if (valid) {
          const token = jwt.sign(
            {
              data: rows[0].id,
            },
            "stupidsecret",
            { expiresIn: "1h" }
          );
          console.log("login token");
          console.log(token);
          res.cookie("jwt_token", token);
          res.json({
            success: true,
            message: "Login success",
            user: rows[0],
          });
        } else {
          res.json({
            success: false,
            message: "Wrong password",
          });
        }
      }
    }
  );
};
