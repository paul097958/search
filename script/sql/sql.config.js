const mysql = require('mysql');

const SqlCon = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const color = '\x1B[36m%s\x1B[0m'

module.exports = {SqlCon, color};