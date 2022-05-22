"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("users", "email", {
        type: Sequelize.STRING,
      }),
      await queryInterface.addColumn("users", "password", {
        type: Sequelize.STRING,
      }),
      await queryInterface.addColumn("users", "hash", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn("users", "email", {
        type: Sequelize.STRING,
      }),
      await queryInterface.removeColumn("users", "password", {
        type: Sequelize.STRING,
      }),
      await queryInterface.removeColumn("users", "hash", {
        type: Sequelize.STRING,
      }),
    ]);
  },
};
