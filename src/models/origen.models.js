const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "tbl_origenes";

//esquema

const OrigenSchema = {
  id: {
    field: "id",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  desorigen: {
    field: "desorigen",
    allowNull: false,
    type: DataTypes.STRING,
  },
};

// Modelo
class Origen extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Origen",
      timestamps: false,
    };
  }
}
module.exports = { TABLE_NAME, OrigenSchema, Origen };
