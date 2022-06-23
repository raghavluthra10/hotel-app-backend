const express = require("express");
const router = express.Router();

const {
  getMyHotels,
  createNewHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelOwnerController");

router.get("/getHotels", getMyHotels);
router.post("/createNewHotel", createNewHotel);
router.put("/updateHotel", updateHotel);
router.delete("/deleteHotel", deleteHotel);

module.exports = router;
