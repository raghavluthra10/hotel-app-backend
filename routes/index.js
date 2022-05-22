const express = require("express");
const router = express.Router();
const { getAllHotels, getOne } = require("../controllers/list");
const { signUp, login } = require("../controllers/auth");
const {
  authHotelOwner,
  authCustomer,
} = require("../middleware/auth-middleware");

// no auth needed
router.get("/all-hotel-list", getAllHotels);

// get all hotels of the ownwer
router.get("/all-one-hotel", getOne);

// sign up
router.post("/signup", signUp);

// login
router.post("/login", login);

module.exports = router;
