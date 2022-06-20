const db = require("../models/db.js");
const bcrypt = require("bcrypt");
const {
  successResponse,
  errorResponse,
  serverErrorResponse,
} = require("../helper/responses");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

async function signUp(req, res) {
  try {
    const { first_name, last_name, email, password, role, dob, address } =
      req.body;
    console.log("req body =====>", req.body);

    if (!first_name || !last_name || !email || !password || !role) {
      console.log("some credentials are missing");
      return res.status(400).json({
        success: false,
        message: "Please send all required credentials",
      });
    }

    const checkIfUserAlreadyExists = await db.user.findAll({
      where: {
        email: email,
        role: role,
      },
      attributes: ["email", "role"],
    });

    console.log("checkIfUserAlreadyExists ====> ", checkIfUserAlreadyExists);

    if (checkIfUserAlreadyExists.length > 0) {
      const roleExistsAs = checkIfUserAlreadyExists[0].role;
      const message = `User already Exists as a ${roleExistsAs}!`;
      return errorResponse(res, 404, message);
    }

    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        console.log("hashed password =====", hash);
        db.user.create({
          name: `${first_name} ${last_name}`,
          email,
          password: hash,
          role,
          dob,
          address,
        });
      });
    });

    return successResponse(res, 200, "SuccessFully signed up!");
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // const user = email

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User does not exists!",
    });
  }
}

module.exports = {
  signUp,
  login,
  timepass,
};
