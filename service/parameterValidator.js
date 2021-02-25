const validateParameter = (parameter) => {
  try {
    if (Number.isInteger(parameter)) {
      return Math.sign(parameter) === 1;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = { validateParameter };
