const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

module.exports =  (url, word) =>{
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        const sql = `INSERT INTO test (url, word) VALUES ('${url}', '${word}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 data in the database");
        });
    });
};
