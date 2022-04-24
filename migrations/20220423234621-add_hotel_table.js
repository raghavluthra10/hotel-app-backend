"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hotels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hotel_name: {
        type: Sequelize.STRING,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "owners",
          },
          key: "id",
        },
      },
      description: {
        type: Sequelize.STRING,
      },
      bhk: {
        type: Sequelize.INTEGER,
      },
      price_per_night: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("hotels");
  },
};
