const db = require("../models/db.js");
// const list = require("../models/list");

// ACCESS => anybody
const getAllHotels = async (req, res) => {
  try {
    // look for all lists in db
    const hotelList = await db.hotel.findAll({
      attributes: ["hotel_name", "description", "bhk", "price_per_night", "id"],
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

const getOne = async (req, res) => {
  try {
    const id = req.query.id;

    const result = await db.owner.findOne({
      where: {
        id: id,
      },
      attributes: ["id", "name", "address"],
      include: [
        {
          model: db.hotel,
          attributes: ["hotel_name", "description", "bhk", "price_per_night"],
        },
      ],
    });

    const resultCount = result.length;

    res.status(200).json({
      message: "success",
      data: result,
      count: resultCount,
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
  getOne,
};
