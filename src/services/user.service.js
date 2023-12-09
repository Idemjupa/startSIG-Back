const MysqlLib = require("../lib/mysql");
const bcrypt = require("bcryptjs");

class UsuarioService {
  constructor() {
    this.db = new MysqlLib();
  }

  async getAll() {
    const query = "select id, login, apenom  from tbl_usuarios order by apenom";
    const result = await this.db.querySql(query);
    return result;
  }
  async getLast() {
    const query = "select id, login from tbl_usuarios order by id desc limit 1";
    const result = await this.db.querySql(query);
    return result[0];
  }

  async create({ data }) {
    // console.log(data)
    const passwordHash = await bcrypt.hash(data.password, 10);
    const query = `insert into tbl_usuarios(login, apenom, password) values('${data.login}','${data.apenom}', '${passwordHash}')`;
    await this.db.querySql(query);
    const result = await this.getLast();
    return result;
  }

  async getById(id) {
    const query = `select id, login, apenom from tbl_usuarios where id='${id}'`;
    const result = await this.db.querySql(query);
    return result;
  }

  async update({ data, id }) {    
    const passwordHash = await bcrypt.hash(data.password, 10);
    const query = `update tbl_usuarios set login='${data.login}',   apenom='${data.apenom}', login='${data.login}', password='${passwordHash}' where id='${id}'`;
    if (data.password !== "" && data.password !== passwordHash);
    {
      const query = `update tbl_usuarios set login='${data.login}',   apenom='${data.apenom}', login='${data.login}' where id='${id}'`;
    }
    console.log(query)
    await this.db.querySql(query);
    const queryupdated = `select id,login, apenom from tbl_usuarios where id='${id}'`;
    const result = await this.db.querySql(queryupdated);
    return result;
  }

  async delete(id) {
    const query = `delete from tbl_usuarios where id='${id}'`;
    await this.db.querySql(query);
    return true;
  }

  async authenticate({ data }) {
    const userNotFound = {
      id: 0,
      login: null,
    };

    try {
      const query = `select id,login, password from tbl_usuarios where login='${data.login}'`;
      const result = await this.db.querySql(query);
      if (await bcrypt.compare(data.password, result[0].password)) {
        const userFound = {
          id: result[0].id,
          login: data.login,
        };
        return userFound;
      } else {
        return userNotFound;
      }
    } catch (err) {
      return userNotFound;
    }
  }
}

module.exports = UsuarioService;
