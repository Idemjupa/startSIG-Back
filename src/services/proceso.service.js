const { models } = require("../lib/sequelize");
class ProcesoService {
  constructor() {}
  async getAll() {
    const result = await models.Proceso.findAll({include:'usuario'});
    return result;
  }
  async create(data) {
    const result = await models.Proceso.create(data);
    return result;
  }
  async findOne(id) {
    const result = await models.Proceso.findByPk(id);
    return result;
  }
  async update(id, data) {
    const procesoUpdate = await this.findOne(id);
    const result = await procesoUpdate.update(data);
    return result;
  }
  async delete(id) {
    const procesoDelete = await this.findOne(id);
    await procesoDelete.destroy();
    return true;
  }
}
module.exports = ProcesoService;
