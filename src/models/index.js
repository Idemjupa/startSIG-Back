const { Criterio, CriterioSchema } = require("./criterio.models");
const {
  Nivelhallazgo,
  NivelhallazgoSchema,
} = require("./nivelhallazgo.models");
const { Origen, OrigenSchema } = require("./origen.models");
const { Usuario, UsuarioSchema } = require("./user.models");
const { Proceso, ProcesoSchema } = require("./proceso.models");
const { Hallazgo, HallazgoSchema } = require("./hallazgo.models");

function setupModels(sequelize) {
  Criterio.init(CriterioSchema, Criterio.config(sequelize));
  Nivelhallazgo.init(NivelhallazgoSchema, Nivelhallazgo.config(sequelize));
  Origen.init(OrigenSchema, Origen.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Proceso.init(ProcesoSchema, Proceso.config(sequelize));
  Proceso.associate(sequelize.models)
  Hallazgo.init(HallazgoSchema, Hallazgo.config(sequelize));
  Hallazgo.associate(sequelize.models)
}

module.exports = setupModels;

