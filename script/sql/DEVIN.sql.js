const mysql = require('mysql');
const config = {host: process.env.HOST,user: process.env.USER,password: process.env.PASSWORD,database: process.env.DATABASE};

module.exports =  (url, word, de) =>{

    const Sql = mysql.createConnection(config);
    
    Sql.connect(function (err) {

        if (err) throw err;

        console.log("Connected!");

        const sql = `INSERT INTO test (url, word, de) VALUES ('${url}', '${word}', '${de}')`;

        Sql.query(sql, function (err, result) {

            if (err) throw err;

            console.log("data");

        });

        Sql.end((err)=>{

            if(err){

                console.error(err);

            }else{

                console.log('close');

            }
        })
    });
};
