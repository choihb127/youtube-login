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
        const {id,psword}=await UserStorage.getUserInfo(request.id); // UserStorage에서 User의 id, psword 부분 받아오기
        //console.log(a);
        if(id){ // 아이디 데이터가 존재하는 경우
            if (id===request.id && psword===request.psword) { // id와 psword 일치할경우
                return {success:true}; // 로그인 성공
            }
            return {success:false,msg:"비밀번호 오류"}; //
        }
        return {success:false,msg:'존재하지 않는 아이디'}; 
    }

   async register(){
        const profile=this.body;
        try {
            const response=await UserStorage.save(profile);
            return response;
        } catch (err) {
            return{success:false,msg:err};
        }
    }
}

module.exports={
    User
}