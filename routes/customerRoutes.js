const express = require("express");
const router = express.Router();

const {
  addToCart,
  getMyCart,
  removeHotelFromCart,
} = require("../controllers/customerControllers");

// make your profile

// edit your profile

// delete your profile

// get your hotel cart
router.get("/getMyCart", getMyCart);

// add hotel to cart
router.post("/addToCart", addToCart);

// delete hotel from cart
router.delete("/removeHotelFromCart", removeHotelFromCart);

// booked hotel

// cancel hotel booking

module.exports = router;
