const express = require("express");
const router = express.Router();

const { getMyHotels } = require("../controllers/hotelOwnerController");

router.get("/getHotels", getMyHotels);

module.exports = router;
