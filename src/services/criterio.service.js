const {models} = require('../lib/sequelize')
class CriterioService {
  constructor() {    
  }

  async getAll() {    
    const result = await models.Criterio.findAll()
    return result;
  }

  async create({ data }) {    
    const result = await models.Criterio.create(data);
    return result;
  }
  
  async getByID(id) {
    const result = await models.Criterio.findByPk(id);
    return result;
  }

  async update({ id, data }) {    
    const criterioUpdate = await this.getByID(id);
    const result = await criterioUpdate.update(data);    
    return result;
  }

  async delete(id) {
    const criterioDelete = await this.getByID(id);
    await criterioDelete.destroy();
    return true;
  }
}
module.exports = CriterioService;
