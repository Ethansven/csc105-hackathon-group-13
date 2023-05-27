import util from "util";

export default async (req, res) => {
  try {
    const id = req.params.id;
    const query = util.promisify(connection.query).bind(connection);

    const rows = await query("SELECT * FROM fish  WHERE id=?", [id]);
    const answers = await query(
      "SELECT * FROM user_answer WHERE user_id=? AND fish_id=? ",
      [req.user.id, id]
    );
    const fish = rows[0];
    const answer = answers.length > 0 ? answers[0] : { answer: "" };
    res.json({
      detail: fish.detail,
      img_url: fish.img_url,
      user_answer: answer.answer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
