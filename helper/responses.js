const res = require("express/lib/response");

// success response
function successResponse(statusCode, data) {
  return res.status(statusCode).json({
    success: true,
    result: data,
  });
}

// internal server error
function serverErrorResponse(statusCode) {
  return res.status(statusCode).json({
    success: false,
    message: "Internal Server Error!",
  });
}

// unauthorized
function unauthorized() {
  return res.status(403).json({
    success: false,
    message: "Unauthorzied!!!",
  });
}

// unauthenticated
function unauthenticated() {
  return res.status(401).json({
    success: false,
    message: "Unauthenticated!!!",
  });
}

module.exports = {
  successResponse,
  serverErrorResponse,
  unauthorized,
  unauthenticated,
};
