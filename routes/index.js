const express = require("express");
const router = express.Router();

const authRoute = require("./auth");

// AUTH
router.use("/auth", authRoute);

module.exports = router;
