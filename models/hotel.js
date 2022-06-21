"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      hotel_name: DataTypes.STRING,
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: "users",
          },
          key: "email",
        },
      },
      description: DataTypes.STRING,
      bhk: DataTypes.INTEGER,
      price_per_night: DataTypes.INTEGER,
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "hotel",
    },
    {
      tableName: "hotels",
    }
  );
  return hotel;
};
