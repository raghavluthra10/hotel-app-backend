const {
  serverErrorResponse,
  unauthorized,
  errorResponse,
  successResponse,
} = require("../helper/responses");
const db = require("../models/db");

const getMyCart = async (req, res) => {
  try {
    const role = req.role;
    const id = req.user;

    if (role !== "customer") {
      return unauthorized(res);
    }

    const checkIfCartHasHotels = await db.cart.findAndCountAll({
      where: {
        user_id: id,
      },
    });

    if (!checkIfCartHasHotels) {
      return errorResponse(res, 404, "Cart is empty!!!");
    }

    return successResponse(res, 200, checkIfCartHasHotels);
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

const addToCart = async (req, res) => {
  try {
    const role = req.role;
    const id = req.user;

    console.log("add to cart =======", role, id);

    if (role !== "customer") {
      return unauthorized(res);
    }

    // see if required credentials are recived
    const hotel_id = req.query.hotel_id;

    // see if that hotel already exists in cart
    const checkIfHotelAlreadyExistsInCart = await db.cart.findOne({
      where: {
        user_id: id,
        hotel_id: hotel_id,
      },
    });

    if (checkIfHotelAlreadyExistsInCart) {
      return errorResponse(res, 401, "Hotel already added in cart!!!");
    }

    // add hotel to cart
    await db.cart.create({
      hotel_id: hotel_id,
      user_id: id,
    });

    return successResponse(res, 200, "Hotel added to cart!!!");
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

const removeHotelFromCart = async (req, res) => {
  try {
    const role = req.role;
    const id = req.user;

    if (role !== "customer") {
      return unauthorized(res);
    }

    const hotel_id = req.query.hotel_id;

    const checkIfHotelExistsInCart = await db.cart.findOne({
      where: {
        user_id: id,
        hotel_id: hotel_id,
      },
    });

    if (!checkIfHotelExistsInCart) {
      return errorResponse(res, 404, "Hotel doesn't exists in cart!!!");
    }

    await db.cart.destroy({
      where: {
        user_id: id,
        hotel_id: hotel_id,
      },
    });

    return successResponse(res, 200);
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

module.exports = {
  getMyCart,
  addToCart,
  removeHotelFromCart,
};
