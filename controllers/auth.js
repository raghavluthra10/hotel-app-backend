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

    // check if the user with the same email id exists with the given role
  
    let checkIfUserAlreadyExists = await db.user.findOne({
      where: {email: email},
      attributes: ['id', 'role']
    })

    const { role: userNotAvailable } = checkIfUserAlreadyExists

    if(checkIfUserAlreadyExists) {
      res.status(409).json({
        success: false,
        message: `User already exists as a ${userNotAvailable}`
      })
    }

    // hash and salt the password
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        
        const newUser = db.user.build({
          name: `${first_name} ${last_name}`,
          email: email,
          password: hash,
          role: role
        })

        await newUser.save()
      })
    })

    return res.status(200).json({
      success: true,
      message: "Successfully signed up"
    })

    

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

function logout(req, res) {}

module.exports = {
  signUp,
  login,
  logout,
};
