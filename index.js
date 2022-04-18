const express = require("express");
const app = express();
const routes = require("./routes/index");

const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`running server on port ${port}`);
});
