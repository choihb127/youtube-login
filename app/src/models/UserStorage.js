//app/src/models/UserStorage.js
//MVC 모델중 M에 해당됨
'use strict';

const fs=require('fs').promises;

class UserStorange{
 // 임시로 생성된 ID와 PW 리스트 => 등록된 계정
// 클래스 변수에 #추가로 private 선언
// static 선언으로 인스턴스(require) 없이 사용가능

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

    static getUserInfo(id){
       // const users=this.#users; // database 생성으로 이용하지 않음
       return fs.readFile('./src/database/users.json')
       .then((data)=>{
            return this.#getUserInfo(data,id);
        })
        .catch(console.error);
    }

    static async save(userinfo){
        const users=await this.getUsers(true); // 전체 data 불러오기
        if(users.good_id.includes(userinfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
            users.good_id.push(userinfo.id);
            users.good_name.push(userinfo.name);
            users.good_psword.push(userinfo.psword);
            fs.writeFile('./src/database/users.json',JSON.stringify(users));
            return {success:true};
    }
}

module.exports=UserStorange;