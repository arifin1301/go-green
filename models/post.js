'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user, {
        foreignKey: 'id_user'
      })

      post.hasMany(models.bookmark, {
        foreignKey: 'id_post'
      })

    }
  }
  post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumb: DataTypes.STRING,
    id_tag: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};