const mysql = require('mysql');

module.exports = function (search) {
  this.select = new Promise(function (resolve, reject) {

    const Sql = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
  });
  
    Sql.connect(function (err) {
      if (err) throw err
 

      Sql.query(`SELECT * FROM ${search}`, function select(err, result, fields) {
        if (err) {
          throw err
        } else {
          resolve(result)
        }
      });
      Sql.end()
    })
  });

}
