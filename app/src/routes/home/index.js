//app/src/routes/home/index.js
//MVC 모델중 C에 해당됨
"use strict";

const express=require('express');
const router=express.Router();

const ctrl=require('./home.ctrl');

router.get('/',ctrl.output.home);
router.get('/login',ctrl.output.login);
router.get('/register',ctrl.output.register);

router.post('/login',ctrl.process.login); // 프론트엔드가 전달한 login
router.post('/register',ctrl.process.register);

module.exports=router;