const express = require("express");
const router = express.Router();
const { getAllHotels, getOne } = require("../controllers/list");
const { signUp, login } = require("../controllers/auth");

// ROUTES
router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
