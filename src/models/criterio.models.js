const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "tbl_criterios";

//esquema

const CriterioSchema = {
  id: {
    field: "id",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  descriterio: {
    field: "descriterio",
    allowNull: false,
    type: DataTypes.STRING,
  },
};

// Modelo
class Criterio extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Criterio",
      timestamps: false,
    };
  }
}
module.exports = { TABLE_NAME, CriterioSchema, Criterio };
