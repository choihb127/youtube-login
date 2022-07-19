//app/src/models/UserStorage.js
//MVC 모델중 M에 해당됨
'use strict';

//const fs=require('fs').promises; // 파일 시스템 형식의 DB 사용 중지
const db=require('../config/db'); // DB 관련 불러오기

class UserStorange{
 // 임시로 생성된 ID와 PW 리스트 => 등록된 계정
// 클래스 변수에 #추가로 private 선언
// static 선언으로 인스턴스(require) 없이 사용가능

/*
    static #getUserInfo(data,id){
        const users=JSON.parse(data);
        const idx=users.good_id.indexOf(id); // 매개변수로 받은 id 와 일치하는 인덱스
        const userKeys=Object.keys(users); // users의 key값만 가져와 배열 생성 => {id,psword,name} 형태
        const userinfo=userKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userinfo;
    }

    static #getUsers(data,isAll,fields){
        const userinfo=JSON.parse(data);
        if(isAll){return userinfo}; // isAll이 true이면 모든값을 불러오기
        // 이하 reduce 이해필요. 반복문?
        // 그외의 경우 필요한 필드만 불러오기
        const getinfo=fields.reduce((preval, currentval)=>{ // preval는 초기값, 이후엔 currentval값 들어감
            if (userinfo.hasOwnProperty(currentval)) {
                preval[currentval]=userinfo[currentval];
            }
            return preval;
        },{});
        // {}부분이 초기값 설정부분
        return getinfo;
    }

    static getUsers(isAll,...fields){ // ... 형태 의미?
        return fs.readFile('./src/database/users.json')
        .then((data)=>{
             return this.#getUsers(data,isAll,fields);
         })
         .catch(console.error); 
    };
    */

    static getUserInfo(id){
        return new Promise((resolve,reject)=>{ // promis callback 함수 성공시 resolve 실행, 실패시 reject 실행
            const query="SELECT * FROM users WHERE id=?;";
            db.query(query,[id],(err,data)=>{
                if(err){reject(`${err}`);}
                //console.log(data);
                resolve(data[0]);
            });
        });
    }

    static async save(userinfo){
        return new Promise((resolve,reject)=>{ // promis callback 함수 성공시 resolve 실행, 실패시 reject 실행
            const query="INSERT INTO users(id,name,psword) VALUES(?,?,?);";
            db.query(query,[userinfo.id,userinfo.name,userinfo.psword],(err)=>{
                if(err){reject(`${err}`);}
                resolve({success:true});
            });
        });
    }
}

module.exports=UserStorange;