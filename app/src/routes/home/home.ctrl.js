//app/src/routes/home/home.ctrl.js
//MVC 모델중 C에 해당됨
//로그인 컨트롤 기능 구현 파일
'use strict';

const { User } = require('../../models/User');
const UserStorage=require('../../models/UserStorage');

const output={
     home:(req,res)=>{
        res.render('home/index');
    },
     login:(req,res)=>{
        res.render('home/login');
    },
    register: (req,res)=>{
        res.render('home/register')
    }
};

const process={
    login:(req,res)=>{
        const user=new User(req.body);
        const response=user.login();
        return res.json(response);
    },
    register:(req,res)=>{
        const user=new User(req.body);
        const response=user.register();
        return res.json(response);
    }
};

module.exports={
    output,process
}