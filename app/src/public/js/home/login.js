"use strict";

//DOM= 문서객체모델. 인터페이스. html에 데이터를 받아옴
//document 라이브러리 이용
const id=document.querySelector('#id'), // html id 선택자 id를 받아옴
    psword=document.querySelector('#psword'), //html id선택자 psword 받아옴
    loginBtn=document.querySelector('button');

loginBtn.addEventListener('click',login); // loginBtn이 click 이벤트 발생시 login 실행

function login(){
    const req={
        id:id.value, // 선택자 id 의 값을 받아옴
        psword:id.value // 선택자 psword 의 값을 받아옴
    };
    console.log(req);
}