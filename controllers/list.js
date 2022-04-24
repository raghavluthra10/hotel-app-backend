const db = require("../models/index.js");
// const list = require("../models/list");

// ACCESS => anybody
const getAllHotels = async (req, res) => {
  try {
    // look for all lists in db
    const hotelList = await db.hotel.findAll({
      attributes: ["hotel_name", "description", "bhk", "price_per_night"],
      include: [
        {
          model: db.owner,
          attributes: ["name"],
        },
      ],
    });

    const hotelListCount = hotelList.length;

    res.status(200).json({
      success: true,
      data: hotelList,
      count: hotelListCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Interal server error",
      success: false,
    });
  }
};

module.exports = {
  getAllHotels,
};
