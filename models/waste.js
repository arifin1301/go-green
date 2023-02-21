'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class waste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  waste.init({
    id_user: DataTypes.INTEGER,
    latitude: DataTypes.STRING,
    longitude: DataTypes.INTEGER,
    status: DataTypes.STRING,
    type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'waste',
  });
  return waste;
};