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
const bodyparser=require('body-parser'); // body 파싱을 위해 body-parser 사용

//라우팅
const home=require('./src/routes/home');

//미들웨어
app.use(bodyparser.json()); // body-parser 가 JSON 형식의 데이터를 파싱을 하도록 설정
app.use(bodyparser.urlencoded({extended:true})); // URL을 통해 전달되는 데이터에 한글,공백 등 문자 표함될 경우 인식이 안되는 문제 해결

//앱 셋팅
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(`${__dirname}/src/public`)); // __dirname=현재위치(app.js위치: /) => /src/public 을 정적경로로 설정

app.use('/',home); // use 는 미들웨어를 등록해주는 메소드

module.exports=app;

