const getAll = function (req, res) {
  res.status(200).json({ post: "title" });
};

module.exports = {
  getAll,
};
