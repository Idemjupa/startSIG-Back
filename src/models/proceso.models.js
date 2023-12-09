const { Model, DataTypes, Sequelize } = require("sequelize");
const { USUARIO_TABLE } = require("./user.models");

const TABLE_NAME = "tbl_procesos";

//esquema

const ProcesoSchema = {
  id: {
    field: "id",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  codigo: {
    field: "codigo",
    allowNull: false,
    type: DataTypes.STRING,
  },
  proceso: {
    field: "proceso",
    allowNull: false,
    type: DataTypes.STRING,
  },
  usuarioId: {
    field: "id_responsable",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USUARIO_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

// Modelo
class Proceso extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, { as: "usuario" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Proceso",
      timestamps: false,
    };
  }
}
module.exports = { TABLE_NAME, ProcesoSchema, Proceso };
