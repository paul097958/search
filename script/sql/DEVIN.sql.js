const con = require('./sql.config.js');


module.exports =  (url, word, de) =>{
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        const sql = `INSERT INTO test (url, word, de) VALUES ('${url}', '${word}', '${de}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("data");
        });
        con.end((err)=>{
            if(err){
                console.error(err);
            }else{
                console.log('close');
            }
        })
    });
};
