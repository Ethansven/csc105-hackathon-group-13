import bcrypt from "bcrypt";

export default async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt1 = await bcrypt.genSalt(10);
  const hash1 = await bcrypt.hash(password, salt1);
  function possiblePassword(password) {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password)
    );
  }
  if (!possiblePassword(password)) {
    return res.json({
      success: false,
      data: null,
      message: "Password must contain at least 8 characters with 1 Uppercase, 1 Lowercase and 1 number",
    });
  }

  var sql = global.connection.format(
    "INSERT INTO user (username, hashed_password,score) VALUES (?, ?,?)",
    [username, hash1,0]
  );
  global.connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "User has been created",
    });
  });
};
