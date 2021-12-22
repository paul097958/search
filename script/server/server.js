const express = require('express');
const path = require('path');
const app = express();
const insert_dev = require('../sql/insert_dev.js');

module.exports = () => {
    try {
        app.get('/', (req, res) => {
            let url = req.query.url;
            let word = req.query.word;
            console.log(req.query.url);
            console.log(req.query.word);
            if (word.length <= 150) {
                res.sendFile(path.resolve('./json/200.json'))
            } else {
                res.sendFile(path.resolve('./json/401.json'))
            }

            insert_dev(url, word)
        });
        app.listen(3000);
    } catch (e) {
        console.error(e);
    }

}