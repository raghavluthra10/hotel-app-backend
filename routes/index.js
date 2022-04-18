const express = require("express");
const router = express.Router();
const { getAllHotels } = require("../controllers/list");

router.get("/all-hotel-list", getAllHotels);

module.exports = router;
