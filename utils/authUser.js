const jwt = require("jsonwebtoken");
const env = require("dotenv");
const axios = require("axios");
const { errorResponse } = require("../helper/responses");

const authUser = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return errorResponse(res, 400, "Token missing!!!");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }
    req.user = decoded.id;
    req.role = decoded.role;
    next();
  });
};

module.exports = {
  authUser,
};
