const res = require("express/lib/response");

// success response
function successResponse(res, statusCode, data) {
  return res.status(statusCode).json({
    success: true,
    result: data,
  });
}

function errorResponse(res, statusCode, message) {
  if (!message) {
    message = null;
  }
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
}

// internal server error
function serverErrorResponse(res, statusCode, error) {
  return res.status(statusCode).json({
    success: false,
    message: "Internal Server Error!",
    err: error ? error.message : error,
  });
}

// unauthorized
function unauthorized(res) {
  return res.status(403).json({
    success: false,
    message: "Unauthorzied!!!",
  });
}

// unauthenticated
function unauthenticated(res) {
  return res.status(401).json({
    success: false,
    message: "Unauthenticated!!!",
  });
}

module.exports = {
  successResponse,
  errorResponse,
  serverErrorResponse,
  unauthorized,
  unauthenticated,
};
