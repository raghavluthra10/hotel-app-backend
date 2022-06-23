const express = require("express");
const router = express.Router();

const {
  getMyHotels,
  createNewHotel,
  updateHotel,
} = require("../controllers/hotelOwnerController");

router.get("/getHotels", getMyHotels);
router.post("/createNewHotel", createNewHotel);
router.put("/updateHotel", updateHotel);

module.exports = router;
