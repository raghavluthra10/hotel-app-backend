"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("owners", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM("hotel_owner", "customer"),
        defaultValue: "hotel_owner",
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

    await queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM("hotel_owner", "customer"),
        defaultValue: "customer",
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
    return Promise.all([
      await queryInterface.dropTable("owner"),
      await queryInterface.dropTable("customer"),
    ]);
  },
};
