const { Model, DataTypes, Sequelize } = require("sequelize");
const { CRITERIO_TABLE } = require("./criterio.models");
const { PROCESO_TABLE } = require("./proceso.models");
const { USUARIO_TABLE } = require("./user.models");
const { ORIGEN_TABLE } = require("./origen.models");
const { NIVELHALLAZGO_TABLE } = require("./nivelhallazgo.models");

const TABLE_NAME = "tbl_hallazgos";

//esquema

const HallazgoSchema = {
  id: {
    field: "id",
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  fechahallazgo: {
    field: "fechahallazgo",
    allowNull: false,
    type: DataTypes.DATE,
  },
  requisito: {
    field: "requisito",
    allowNull: false,
    type: DataTypes.STRING,
  },
  descripcion: {
    field: "descripcion",
    allowNull: false,
    type: DataTypes.STRING,
  },
  criterioId: {
    field: "id_criterio",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CRITERIO_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  procesoId: {
    field: "id_proceso",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROCESO_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },

  origenId: {
    field: "id_origen",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORIGEN_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  nivelhallazgoId: {
    field: "id_nivelhallazgo",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: NIVELHALLAZGO_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  usuarioId: {
    field: "id_auditor",
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
class Hallazgo extends Model {
  static associate(models) {
    this.belongsTo(models.Criterio, { as: "criterio" });
    this.belongsTo(models.Proceso, { as: "proceso" });
    this.belongsTo(models.Usuario, { as: "usuario" });
    this.belongsTo(models.Origen, { as: "origen" });
    this.belongsTo(models.Nivelhallazgo, { as: "nivelhallazgo" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: "Hallazgo",
      timestamps: false,
    };
  }
}
module.exports = { TABLE_NAME, HallazgoSchema, Hallazgo };

