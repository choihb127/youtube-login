'use strict';

class UserStorange{
    static #users={ // 임시로 생성된 ID와 PW 리스트 => 등록된 계정
        // 클래스 변수에 #추가로 private 선언
        // static 선언으로 인스턴스(require) 없이 사용가능
        good_id:['id1','id2','id3'],
        good_psword:['1111','1111','1234'],
        name:['name1','name2','name3']
    };


    static getUsers(...fields){ // ... 형태 의미?
        const userinfo=this.#users;
        // 이하 reduce 이해필요. 아마 반복문?
        const getinfo=fields.reduce((preval, currentval)=>{ // preval는 초기값, 이후엔 currentval값 들어감
            if (userinfo.hasOwnProperty(currentval)) {
                preval[currentval]=userinfo[currentval];
            }
            return preval;
        },{});
        // {}부분이 초기값 설정부분
        return getinfo;
    };
}

module.exports=UserStorange;