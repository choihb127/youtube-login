"use strict";

/*
const http=require('http');
const app=http.createServer((req,res)=>{
    // console.log(req.url); // req.url = 요청받은 경로
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    if(req.url=='/'){
        res.end('here is http root');
    }
    else if (req.url=='/login'){
        res.end('here is http login');
    }
});

app.listen(3001,()=>{
    console.log('http server on. port=3001');
});
*/ //위에는 http로 서버열기 맛보기

//모듈
const express=require('express');
const app=express();

//라우팅
const home=require('./routes/home')

//앱 셋팅
app.set('views','./views');
app.set('view engine','ejs');

app.use('/',home); // use 는 미들웨어를 등록해주는 메소드

module.exports=app;

