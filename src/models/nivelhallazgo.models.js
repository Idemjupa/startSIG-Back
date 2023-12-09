const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "tbl_nivelhallazgo";

//esquema

const NivelhallazgoSchema = {
  id: {
    field: "id",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  desnivelhallazgo: {
    field: "desnivelhallazgo",
    allowNull: false,
    type: DataTypes.STRING,
  },
};

// Modelo
class Nivelhallazgo extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Nivelhallazgo",
      timestamps: false,
    };
  }
}
module.exports = { TABLE_NAME, NivelhallazgoSchema, Nivelhallazgo };
