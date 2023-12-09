const { models } = require("../lib/sequelize");
class HallazgoService {
  constructor() {}
  async getAll() {
    const result = await models.Hallazgo.findAll({include:['criterio','origen', 'proceso','nivelhallazgo','usuario']} );
    return result;
  }
  async create(data) {
    const result = await models.Hallazgo.create(data);
    return result;
  }
  async findOne(id) {
    const result = await models.Hallazgo.findByPk(id);
    return result;
  }
  async update(id, data) {
    const hallazgoUpdate = await this.findOne(id);
    const result = await hallazgoUpdate.update(data);
    return result;
  }
  async delete(id) {
    const hallazgoDelete = await this.findOne(id);
    await hallazgoDelete.destroy();
    return true;
  }
}
module.exports = HallazgoService;
