"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      role: {
        type: DataTypes.ENUM("hotel_owner", "customer"),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      hash: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "users",
    },
    {
      tableName: "users",
    }
  );
  return users;
};
