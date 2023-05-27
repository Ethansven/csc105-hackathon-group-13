import util from "util";
export default async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  try {
    const user_answers = await query(
      "SELECT * FROM user_answer WHERE user_id=? ",
      [req.user.id]
    );
    let score = 0;
    for (let index = 0; index < user_answers.length; index++) {
      const element = user_answers[index];
      const fishs = await query("SELECT * FROM fish WHERE id=? ", [
        element.fish_id,
      ]);
      const fish = fishs[0];
      if (element.answer == fish.fish_name) {
        score++;
      }
    }
    await query("UPDATE user SET score=? WHERE id=?", [score, req.user.id]);
    await query("DELETE FROM user_answer WHERE user_id=?", [req.user.id]);
    res.json({
        score
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
