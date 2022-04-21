'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotelList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotelList.init({
    hotel_name: DataTypes.STRING,
    owner: DataTypes.STRING,
    description: DataTypes.STRING,
    bhk: DataTypes.INTEGER,
    price_per_night: DataTypes.INTEGER,
    vacancy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotelList',
  });
  return hotelList;
};