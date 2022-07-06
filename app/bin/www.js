//app/bin/www.js
//서버 실행 파일
"use strict";

const app=require('../../app');
const PORT=3000;

app.listen(PORT,()=>{
    console.log('server on! port='+PORT);
});