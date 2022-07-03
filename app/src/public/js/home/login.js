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
        psword:psword.value // 선택자 psword 의 값을 받아옴
    };

    fetch('/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(req)
    })
    .then((res)=>res.json()) // 백엔드에서 받은 res(promis)
    //.then((res)=> console.log(res)); 아래와 동일. 파라미터로 받은값이 다시 함수의 파라미터로 들어가는 경우 생략가능
    //.then(console.log);
    .then((res)=>{
        if (res.success){ // 백엔드에서 받은 res의 success값이 true일 때 = 로그인 성공일 때
            location.href='/'; // 루트경로로 이동
        }else{
            alert(res.msg); // false 경우 msg alert로 출력
            //alert은 크롬 중앙상단에 뜨는 메시지
        }
    })
    .catch((err)=>{ // 에러발생시 구문
        console.error(new Error('로그인중 에러발생')); // 콘솔에 로그인중 에러발생 출력
    });
}