const { serverErrorResponse, unauthorized } = require("../helper/responses");

const getMyHotels = async (req, res) => {
  try {
    console.log("getMyHotels ======", req.user, req.role);
    const role = req.role;

    if (role !== "hotel_owner") {
      return unauthorized(res);
    }

    return res.json({
      message: "get my hotels api is working fine",
    });
  } catch (error) {
    return serverErrorResponse(res, 500, error);
  }
};

module.exports = {
  getMyHotels,
};
