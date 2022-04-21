'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hotelLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotel_name: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      bhk: {
        type: Sequelize.INTEGER
      },
      price_per_night: {
        type: Sequelize.INTEGER
      },
      vacancy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('hotelLists');
  }
};