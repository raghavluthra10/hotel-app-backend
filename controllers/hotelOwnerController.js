const {
  serverErrorResponse,
  unauthorized,
  errorResponse,
  successResponse,
} = require("../helper/responses");
const db = require("../models/db");

const getMyHotels = async (req, res) => {
  try {
    const role = req.role;
    const id = req.user;

    if (role !== "hotel_owner") {
      return unauthorized(res);
    }

    const getHotelOwnersHotels = await db.hotel.findAll({
      where: {
        user_id: id,
      },
    });

    if (!getHotelOwnersHotels) {
      return errorResponse(res, 404, "No hotels found!!!");
    }

    return successResponse(res, 200, getHotelOwnersHotels);
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

const createNewHotel = async (req, res) => {
  try {
    const role = req.role;
    const id = req.user;

    const { hotel_name, description, bhk, price_per_night } = req.body;

    console.log("createNewHotel= ==== = = ", req.role, req.user, req.body);

    if (role !== "hotel_owner") {
      return unauthorized(res);
    }

    if (!hotel_name || !description || !bhk || !price_per_night) {
      return errorResponse(res, 422, "Please send all parameters");
    }

    await db.hotel.create({
      hotel_name,
      description,
      bhk,
      price_per_night,
      user_id: id,
    });

    return res.json({
      message: "this is api for creating a new hotel | POST req",
    });
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

module.exports = {
  getMyHotels,
  createNewHotel,
};
