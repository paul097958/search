const con = require('./sql.config.js');


module.exports = function (search) {
 

  let ii = (resolve, reject)=>{
    con.SqlCon.connect(function (err) {
      if (err) throw err
    
      con.SqlCon.query(`SELECT * FROM ${search}`, function select(err, result, fields) {
        if(err){
          throw err
        }else{
          resolve(result)
        }
      });
      con.SqlCon.end()
      
    })
    
  }

  

  let methon = new Promise(function (resolve, reject) {
    ii(resolve, reject);
  });


  this.select = methon







}
