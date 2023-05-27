import util from "util";
export default async (req, res) => {
  const id = req.params.id;
  const answer = req.body.answer;
  const query = util.promisify(connection.query).bind(connection);
  try {
    const rows = await query("SELECT * FROM fish  WHERE id=?", [id]);
    if (rows.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Fish not found",
      });
    }
    const fish = rows[0];
    const answers = await query(
      "SELECT * FROM user_answer  WHERE user_id=? AND fish_id=?",
      [req.user.id, id]
    );
    if (answers.length == 0) {
      await query(
        "INSERT INTO user_answer (user_id,fish_id,answer) VALUE (?,?,?)",
        [req.user.id, id, answer]
      );
    } else {
      await query(
        "UPDATE  user_answer SET answer=? WHERE user_id=? AND fish_id=? ",
        [answer, req.user.id, id]
      );
    }
    
    res.json({
      success: true,
      message: "save answer successful",
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
