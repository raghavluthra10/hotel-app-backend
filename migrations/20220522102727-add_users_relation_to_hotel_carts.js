"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("hotels", "hotel_owner_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {},
};
