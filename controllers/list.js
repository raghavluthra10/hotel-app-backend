const getAllHotels = async (req, res) => {
  try {
    // look for all lists in db
    const data = "all lists";
    // send back as response
    res.status(200).json({
      success: true,
      data: data,
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
