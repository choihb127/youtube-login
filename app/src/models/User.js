//app/src/models/User.js
//
'use strict';

const UserStorage=require('./UserStorage');

class User{
    constructor(body){
        this.body=body;
    }

    async login(){
        const request=this.body;
        const {good_id,good_psword}=await UserStorage.getUserInfo(request.id); // UserStorage에서 User의 id, psword 부분 받아오기
        //console.log(a);
        if(good_id){ // 아이디 데이터가 존재하는 경우
            if (good_id===request.id && good_psword===request.psword) { // id와 psword 일치할경우
                return {success:true}; // 로그인 성공
            }
            return {success:false,msg:"비밀번호 오류"}; //
        }
        return {success:false,msg:'존재하지 않는 아이디'}; 
    }

    register(){
        const profile=this.body;
        const response=UserStorage.save(profile);
        return response;
    }
}

module.exports={
    User
}