'use strict';

module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define('Post', {

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true,

            allowNull: false

        },

        App_name: {

            type: DataTypes.STRING,

            allowNull: false

        },

        slug: {

            type: DataTypes.STRING,

            allowNull: false,

            unique: true

        },

        Time: {

            type: DataTypes.STRING,

            allowNull: false

        },
    });

    Post.associate = function(models) {

        // A post belongs to a user

        Post.belongsTo(models.User);

        // A post can belong to many tags

        Post.belongsToMany(models.Tag, { through: 'post_tag' });

    };

    return Post;

};