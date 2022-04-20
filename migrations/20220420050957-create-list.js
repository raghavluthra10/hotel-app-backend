"use strict";
module.exports = {
  async up(queryInterface, Sequelize, DataTypes) {
    await queryInterface.createTable("list", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hotel_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vacancy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bhk: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("list");
  },
};
