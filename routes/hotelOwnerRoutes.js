const express = require("express");
const router = express.Router();

const {
  getMyHotels,
  createNewHotel,
} = require("../controllers/hotelOwnerController");

router.get("/getHotels", getMyHotels);
router.post("/createNewHotel", createNewHotel);

module.exports = router;
