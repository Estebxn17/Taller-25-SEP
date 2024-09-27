'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoptante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adoptante.hasMany(models.Adopcion, { foreignKey: 'adoptante_id' });
    }
  }
  Adoptante.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adoptante',
  });
  return Adoptante;
};