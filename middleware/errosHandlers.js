const handleError = (error, res) => {
  res.status(500).json({
    message: error.message,
  });
};

module.exports = { handleError };
