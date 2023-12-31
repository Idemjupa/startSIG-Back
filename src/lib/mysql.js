const mysql2= require('mysql2')
const {config} = require("../config")
class MysqlLib{
    constructor(){
        this.dbSetting = {
            host : config.mysql_host,
            user : config.mysql_user,
            password : config.mysql_pwd,
            database : config.mysql_db,
        }
        }
        async getConnection(){
            try{
                const pool= await mysql2.createPool(this.dbSetting)
                console.log("conectado a Base de Datos")
                return pool
            }
            catch(err){
                console.log(err)
            }
        }
    
    async querySql(sql){
        const pool = await this.getConnection()
        return new Promise(function(res, rej){
            pool.query(sql, function(err, result, fields){
                if (!err) res(result)
                else rej(err)
            })
        })
    }
}
module.exports = MysqlLib


// db = new MysqlLib()
// db.querySql("select * from tbl_product").then((result)=>console.log(result))
