const path = require('path');
const app = require('./sever.config.js');
const sql = require('../sql/DEVIN.sql.js');
module.exports = () => {
    app.get('/dev', (req, res) => {
        let url = req.query.url;
        let word = req.query.word;
        let de = req.query.de;
        console.log(url);
        console.log(word);
        console.log(de);
        if (word.length <= 150) {
            res.sendFile(path.resolve('./json/200.json'))
            sql(url, word, de)
        } else {
            res.sendFile(path.resolve('./json/401.json'))
        }    
    });    
}