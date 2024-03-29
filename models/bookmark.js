'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookmark.belongsTo(models.post, {
        foreignKey: 'id_post'
      })

      bookmark.belongsTo(models.user, {
        foreignKey: 'id_user'
      })
    }
  }
  bookmark.init({
    id_user: DataTypes.INTEGER,
    id_post: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookmark',
  });
  return bookmark;
};