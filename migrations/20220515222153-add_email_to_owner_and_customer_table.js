"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      await queryInterface.addColumn("owners", "email", {
        type: Sequelize.STRING,
      }),
      await queryInterface.addColumn("customers", "email", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      await queryInterface.removeColumn("owners", "email", {
        type: Sequelize.STRING,
      }),
      await queryInterface.removeColumn("customers", "email", {
        type: Sequelize.STRING,
      }),
    ]);
  },
};
