const {models} = require('../lib/sequelize')
class OrigenService {
  constructor() {    
  }

  async getAll() {    
    const result = await models.Origen.findAll()
    return result;
  }

  async create({ data }) {    
    const result = await models.Origen.create(data);
    return result;
  }
  
  async getByID(id) {
    const result = await models.Origen.findByPk(id);
    return result;
  }

  async update({ id, data }) {    
    const origenUpdate = await this.getByID(id);
    const result = await origenUpdate.update(data);    
    return result;
  }

  async delete(id) {
    const origenDelete = await this.getByID(id);
    await origenDelete.destroy();
    return true;
  }
}
module.exports = OrigenService;
