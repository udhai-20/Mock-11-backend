const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_PRTOECT, {
    expiresIn: "15d",
  });
};

module.exports = { generateToken };
