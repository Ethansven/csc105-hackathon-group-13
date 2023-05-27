export default (req, res) => {
  res.clearCookie("jwt_token");
  res.send({ success: true });
};
