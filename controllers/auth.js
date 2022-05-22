const db = require("../models/db.js");
const bcrypt = require("bcrypt");

async function signUp(req, res) {
  try {
    // extract credentials from req.body
    const { first_name, last_name, email, password, role } = req.body;

    // validate if all entries are send
    if (!(first_name & last_name & email & password & role)) {
      return res.status(400).json({
        success: false,
        message: "Please send all required credentials",
      });
    }

    // check if the user with the same email id exists
    if (role === "customer") {
      const checkIfCustomerAlreadyExists = await db.customer.findOne({
        where: { email: email },
        attributes: ["id"],
      });

      if (checkIfCustomerAlreadyExists) {
        return res.status(400).json({
          success: false,
          message: "Customer already exists",
        });
      }

      // encrypt password
      //   const encryptedPassword = await
    }

    if (role === "hotel_owner") {
      const checkIfOwnerAlreadyExists = await db.owner.findOne({
        where: { email: email },
        attributes: ["id"],
      });

      if (checkIfOwnerAlreadyExists) {
        return res.status(400).json({
          success: false,
          message: "Hotel owner already exists",
        });
      }

      // encrypt password
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't sign up",
    });
  }
}

function login(req, res) {
  try {
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
};
