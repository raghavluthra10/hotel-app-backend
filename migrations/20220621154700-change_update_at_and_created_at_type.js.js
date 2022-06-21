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
      await queryInterface.changeColumn("carts", "updated_at", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      await queryInterface.changeColumn("hotels", "updated_at", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      await queryInterface.changeColumn("users", "updated_at", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      await queryInterface.changeColumn("carts", "created_at", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      await queryInterface.changeColumn("hotels", "created_at", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      await queryInterface.changeColumn("users", "created_at", {
        allowNull: true,
        type: Sequelize.DATE,
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
  },
};
