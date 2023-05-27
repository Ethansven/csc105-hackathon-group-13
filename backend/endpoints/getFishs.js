import util from "util";

export default async (req, res) => {
  const query = util.promisify(connection.query).bind(connection);
  try {
    const rows = await query("SELECT * FROM fish ");
    const fish = rows.map((f) => ({
      id: f.id,
      img_url: f.img_url,
    }));
    res.json(fish);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
