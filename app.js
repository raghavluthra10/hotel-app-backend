const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");

require("dotenv").config();

const port = 5000;

app.use(express.json());

// cors is for enabling cross-domain requests
app.use(cors());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`running server on port ${port}`);
});
