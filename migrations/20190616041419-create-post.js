'use strict';

module.exports = {

    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('posts', {

            id: {

                type: Sequelize.INTEGER,

                autoIncrement: true,

                primaryKey: true,

                allowNull: false

            },

            App_name: {

                type: Sequelize.STRING,

                allowNull: false

            },

    

            Time: {

                type: Sequelize.STRING,

                allowNull: false

            },


        });

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.dropTable('posts');

    }

};