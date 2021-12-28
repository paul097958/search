const app = require('./sever.config.js');
const sql = require('../sql/USERSEARCH.sql.js');
module.exports = ()=>{
    app.get('/search', (req, res)=>{
        let search = req.query.search;
        let an = new sql();
        an.methon(search)
        console.log("re", an.result);
        


    })


}