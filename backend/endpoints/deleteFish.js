export default async (req, res) => {
  const id = req.body.id;
  global.connection.query(
    "DELETE answer FROM fish WHERE id=?",
    [id],
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
        message: "delete successful",
        error: null,
      });
    }
  );
};
