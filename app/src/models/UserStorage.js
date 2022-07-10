//app/src/models/UserStorage.js
//MVC 모델중 M에 해당됨
'use strict';

const fs=require('fs').promises;

class UserStorange{
 // 임시로 생성된 ID와 PW 리스트 => 등록된 계정
    // 클래스 변수에 #추가로 private 선언
    // static 선언으로 인스턴스(require) 없이 사용가능
    static getUsers(...fields){ // ... 형태 의미?
        const userinfo=this.#users;
        // 이하 reduce 이해필요. 반복문?
        const getinfo=fields.reduce((preval, currentval)=>{ // preval는 초기값, 이후엔 currentval값 들어감
            if (userinfo.hasOwnProperty(currentval)) {
                preval[currentval]=userinfo[currentval];
            }
            return preval;
        },{});
        // {}부분이 초기값 설정부분
        return getinfo;
    };

    static getUserInfo(id){
       // const users=this.#users; // database 생성으로 이용하지 않음
       fs.readFile('./src/database/users.json',(err,data)=>{
        if(err){throw err;}
        const users=JSON.parse(data);
        const idx=users.good_id.indexOf(id); // 매개변수로 받은 id 와 일치하는 인덱스
        const userKeys=Object.keys(users); // users의 key값만 가져와 배열 생성 => {id,psword,name} 형태
        const userinfo=userKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userinfo;
    });
    }

    static save(userinfo){
        const user=this.#users;
        user.good_id.push(userinfo.id);
        user.good_psword.push(userinfo.psword);
        user.good_name.push(userinfo.name);
        return {success:true};
    }
}

module.exports=UserStorange;