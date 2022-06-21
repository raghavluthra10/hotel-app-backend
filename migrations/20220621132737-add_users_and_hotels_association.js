"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn("hotels", "user_id", {
        type: Sequelize.INTEGER,
        refernce: {
          tableName: "users",
        },
        key: "id",
      }),
      await queryInterface.addColumn("carts", "user_id", {
        type: Sequelize.INTEGER,
        refernce: {
          tableName: "users",
        },
        key: "id",
      }),
      await queryInterface.removeColumn("hotels", "hotel_owner_id", {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      }),
      await queryInterface.removeColumn("hotels", "owner_id", {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      }),

      await queryInterface.removeColumn("carts", "customer_id", {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
