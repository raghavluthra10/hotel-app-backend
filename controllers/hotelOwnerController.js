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

    const getHotelOwnersHotels = await db.hotel.findAndCountAll({
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

const getMySingleHotel = async () => {
  try {
    // take in ID and return that hotel
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

    return successResponse(res, 200, "New hotel created!!!");
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

// edit
const updateHotel = async (req, res) => {
  try {
    const role = req.role;

    const hotel_id = req.query.hotel_id;

    const { hotel_name, description, bhk, price_per_night } = req.body;

    console.log(
      "updateHotel= ==== = = ",
      req.role,
      req.user,
      req.body,
      hotel_id
    );

    if (role !== "hotel_owner") {
      return unauthorized(res);
    }

    if (!hotel_name || !description || !bhk || !price_per_night) {
      return errorResponse(res, 422, "Please send all parameters");
    }

    const checkIfHotelExists = await db.hotel.findOne({
      where: { id: hotel_id },
    });

    if (!checkIfHotelExists) {
      return errorResponse(
        res,
        404,
        "hotel you want to update does not exists!!!"
      );
    }

    const updateHotel = await db.hotel.update(
      {
        hotel_name,
        description,
        bhk,
        price_per_night,
      },
      {
        where: { id: hotel_id },
      }
    );

    return successResponse(res, 200, updateHotel);
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

// delete

const deleteHotel = async (req, res) => {
  try {
    const role = req.role;

    const hotel_id = req.query.hotel_id;

    console.log("deleteHotel= ==== = = ", role, hotel_id);

    if (role !== "hotel_owner") {
      return unauthorized(res);
    }

    const checkIfHotelExists = await db.hotel.findOne({
      where: { id: hotel_id },
    });

    if (!checkIfHotelExists) {
      return errorResponse(
        res,
        404,
        "hotel you want to delete does not exists!!!"
      );
    }

    await db.hotel.destroy({
      where: { id: hotel_id },
    });

    return successResponse(res, 200, "Hotel was deleted!!!");
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

module.exports = {
  getMyHotels,
  createNewHotel,
  updateHotel,
  deleteHotel,
};
