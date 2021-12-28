const con = require('./sql.config.js');


module.exports = class {
  constructor() {
    this.result = null;
  }
  methon(search){
    con.connect(function (err) {
      if (err) throw err;

      con.query(`SELECT * FROM ${search}`, function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        this.result = result

      });


      con.end((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('close');
        }
      })


    });

  }
}
