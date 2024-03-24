'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ventes', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      numProduit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      design: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prix: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      quantite: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ventes');
  }
};
