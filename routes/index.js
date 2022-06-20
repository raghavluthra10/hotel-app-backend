const express = require("express");
const { authUser } = require("../utils/authUser");
const router = express.Router();

const authRoute = require("./auth");
const hotelOwnerRoutes = require("./hotelOwnerRoutes");

// AUTH
router.use("/auth", authRoute);

// HOTEL OWNER ROUTES
router.use("/hotel-owner", authUser, hotelOwnerRoutes);

module.exports = router;
