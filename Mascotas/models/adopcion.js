'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adopcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adopcion.belongsTo(models.Perro, { foreignKey: 'perro_id' });
      Adopcion.belongsTo(models.Adoptante, { foreignKey: 'adoptante_id' });    }
  }
  Adopcion.init({
    perro_id: DataTypes.INTEGER,
    adoptante_id: DataTypes.INTEGER,
    fecha_adopcion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Adopcion',
  });
  return Adopcion;
};