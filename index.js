const http = require("http");
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Home hotel-booking-app-backend");
});

app.listen(port, () => {
  console.log(`running server on port ${port}`);
});
