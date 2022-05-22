"use strict";

const Sequelize = require("sequelize");
const config = require("../config/config.json").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

db.hotel = require("./hotel")(sequelize, Sequelize);
db.owner = require("./owner")(sequelize, Sequelize);
db.customer = require("./customer")(sequelize, Sequelize);
db.cart = require("./cart")(sequelize, Sequelize);

// relations
db.hotel.belongsTo(db.owner, {
  foreignKey: "owner_id",
});

db.owner.hasOne(db.hotel, {
  foreignKey: "owner_id",
});

db.cart.belongsTo(db.hotel, {
  foreignKey: "hotel_id",
});

db.cart.belongsTo(db.hotel, {
  foreignKey: "customer_id",
});

// cart belongs to many

module.exports = db;
