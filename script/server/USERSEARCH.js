const app = require('./sever.config.js');
const sql = require('../sql/USERSEARCH.sql.js');
module.exports = () => {
    
    app.get('/search', (req, res) => {
        let search = req.query.search;
        let newsql = new sql(search)
        newsql.select.then(
            (json) => {
                setTimeout(()=>{res.json(json)}, 1000)
                
            }
        )



    })


}