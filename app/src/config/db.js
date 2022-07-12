//app/src/config/db.js
//mysql DB 관련 파일
'use strict';

const mysql =require('mysql');
const db=mysql.createConnection({
    host: "hbdata.coxtgchmeir6.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "choi9122",
    database: "login_db"
});

db.connect();

module.exports=db;