const db = require("../models/index.js");
// const list = require("../models/list");

const getAllHotels = async (req, res) => {
  try {
    // look for all lists in db
    const hotelList = await db.hotelList.findAll({});

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
