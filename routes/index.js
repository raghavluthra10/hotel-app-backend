const express = require("express");
const { authUser } = require("../utils/authUser");
const router = express.Router();

const authRoute = require("./auth");
const hotelOwnerRoutes = require("./hotelOwnerRoutes");
const customerRoutes = require("./customerRoutes");

// AUTH
router.use("/auth", authRoute);

// HOTEL OWNER ROUTES
router.use("/hotel-owner", authUser, hotelOwnerRoutes);

// CUSTOMER ROUTES
router.use("/customers", authUser, customerRoutes);

module.exports = router;
