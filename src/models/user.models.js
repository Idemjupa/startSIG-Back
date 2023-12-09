const { Model, DataTypes, Sequelize } = require("sequelize");

const TABLE_NAME = "tbl_usuarios";

//esquema

const UsuarioSchema = {
  id: {
    field: "id",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  login: {
    field: "login",
    allowNull: false,
    type: DataTypes.STRING,
  },
  apenom: {
    field: "apenom",
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    field: "password",
    allowNull: true,
    type: DataTypes.STRING,
  },
};

// Modelo
class Usuario extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Usuario",
      timestamps: false,
    };
  }
}
module.exports = { TABLE_NAME, UsuarioSchema, Usuario };
