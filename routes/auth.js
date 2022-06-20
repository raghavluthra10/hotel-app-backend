const express = require("express");
const router = express.Router();
const { getAllHotels, getOne } = require("../controllers/list");
const { signUp, login, timepass } = require("../controllers/auth");
const {
  authHotelOwner,
  authCustomer,
} = require("../middleware/auth-middleware");

// ROUTES
router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
