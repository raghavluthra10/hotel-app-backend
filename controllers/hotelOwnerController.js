const { serverErrorResponse } = require("../helper/responses");

const getMyHotels = async (req, res) => {
  try {
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
