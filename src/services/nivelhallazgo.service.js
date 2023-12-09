const {models} = require('../lib/sequelize')
class NivelhallazgoService {
  constructor() {    
  }

  async getAll() {    
    const result = await models.Nivelhallazgo.findAll()
    return result;
  }

  async create({ data }) {    
    const result = await models.Nivelhallazgo.create(data);
    return result;
  }
  
  async getByID(id) {
    const result = await models.Nivelhallazgo.findByPk(id);
    return result;
  }

  async update({ id, data }) {    
    const NivelhallazgoUpdate = await this.getByID(id);
    const result = await NivelhallazgoUpdate.update(data);    
    return result;
  }

  async delete(id) {
    const NivelhallazgoDelete = await this.getByID(id);
    await NivelhallazgoDelete.destroy();
    return true;
  }
}
module.exports = NivelhallazgoService;
    