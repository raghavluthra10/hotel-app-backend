const db = require("../models/db.js");
const bcrypt = require("bcrypt");
const {
  successResponse,
  errorResponse,
  serverErrorResponse,
} = require("../helper/responses");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const axios = require("axios");

async function signUp(req, res) {
  try {
    const { first_name, last_name, email, password, role, dob, address } =
      req.body;
    console.log("req body =====>", req.body);

    if (!first_name || !last_name || !email || !password || !role) {
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
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please send all required credentials",
      });
    }

    const getTheUser = await db.user.findOne({
      where: {
        email: email,
        role: role,
      },
      attributes: ["password", "email", "role"],
    });

    if (!getTheUser) {
      const message = "User does not exists!";
      return errorResponse(res, 404, message);
    }

    console.log("getTheUser ======", getTheUser);

    const hashedPassword = getTheUser.password;
    console.log("hashedPasswrod =====", hashedPassword);

    bcrypt.compare(password, hashedPassword, function (err, result) {
      if (!result) {
        return errorResponse(res, 403, `Wrong password`);
      }
    });

    //  create token
    const token = jwt.sign(
      { id: getTheUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: 86400 }
    );

    return successResponse(res, 200, {
      token,
    });
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
}

module.exports = {
  signUp,
  login,
};
