import util from "util";

export default async (req, res) => {
  try {
    const query = util.promisify(connection.query).bind(connection);
    const rows = await query("SELECT username,score FROM user ORDER BY score DESC LIMIT 10");
    res.json({
      rows
      
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
