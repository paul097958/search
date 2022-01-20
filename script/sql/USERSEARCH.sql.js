const mysql = require('mysql');
const config = {host: process.env.HOST,user: process.env.USER,password: process.env.PASSWORD,database: process.env.DATABASE};

module.exports = function (search) {
  let select = new Promise(function (resolve, reject) {

    const Sql = mysql.createConnection(config);

    Sql.connect(function (err) {
      if (err) throw err

      Sql.query(`SELECT * FROM ${search}`, function select(err, result) {

        if (err) {
          throw err
        } else {
          resolve(result)
        }

      });

      Sql.end()

    })

  });

return select

}
