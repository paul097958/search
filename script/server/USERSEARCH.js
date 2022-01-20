const app = require('./sever.config.js');
const sql = require('../sql/USERSEARCH.sql.js');
module.exports = () => { 
    app.get('/search', (req, res) => {
        let search = req.query.search;
        sql(search).then(
                (json) => {
                  res.json(json)             
                }
            )
    })
}
