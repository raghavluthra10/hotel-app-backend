"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("hotels", "hotel_owner_id", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "users",
        },
        key: "id",
      },
    });
    // return Promise.all([
    //   await queryInterface.removeColumn("carts", "customer_id", {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: {
    //         tableName: "customers",
    //       },
    //       key: "id",
    //     },
    //   }),
    //   await queryInterface.addColumn("hotels", "hotel_owner_id", {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: {
    //         tableName: "users",
    //       },
    //       key: "id",
    //     },
    //   }),
    //   // .catch((err) => {
    //   //   // digest error
    //   // }),

    //   await queryInterface.addColumn("carts", "customer_id", {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: {
    //         tableName: "users",
    //       },
    //       key: "id",
    //     },
    //   }),
    // ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //   return Promise.all([
    //     await queryInterface.addColumn("carts", "customer_id", {
    //       type: Sequelize.INTEGER,
    //       allowNull: false,
    //       references: {
    //         model: {
    //           tableName: "customers",
    //         },
    //         key: "id",
    //       },
    //     }),
    //     await queryInterface.removeColumn("hotels", "hotel_owner_id", {
    //       type: Sequelize.INTEGER,
    //       references: {
    //         model: {
    //           tableName: "users",
    //         },
    //         key: "id",
    //       },
    //     }),
    //     await queryInterface.removeColumn("carts", "customer_id", {
    //       type: Sequelize.INTEGER,
    //       allowNull: false,
    //       references: {
    //         model: {
    //           tableName: "users",
    //         },
    //         key: "id",
    //       },
    //     }),
    //   ]);
  },
};
