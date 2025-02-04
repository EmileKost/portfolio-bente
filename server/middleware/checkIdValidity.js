const checkIdValidity = (req, res, next) => {
  const { id } = req.params;

  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    return next();
  }

  res.json({
    status: 400,
    message: "Not a valid ID",
  });
};

module.exports = checkIdValidity;
