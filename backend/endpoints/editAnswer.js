export default async (req, res) => {
    const id = req.query.id;
    const answer = req.body.answer;
    global.connection.query(
      "UPDATE fish SET answer=? WHERE id=?",
      [answer, id],
      async (err, rows) => {
        if (err) {
          console.log("hello");
          return res.json({
            success: false,
            data: null,
            error: err.message,
          });
        }
        res.json({
          success: true,
          message: "update successful",
          error: null,
        });
      }
    );
}