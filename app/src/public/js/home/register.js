//app/src/public/js/home/register.js
//프론트 엔드에서 회원가입 요청 구현 파일
"use strict";

//DOM= 문서객체모델. 인터페이스. html에 데이터를 받아옴
//document 라이브러리 이용
const id=document.querySelector('#id'), // html id 선택자 id를 받아옴
    name=document.querySelector('#name'),
    psword=document.querySelector('#psword'), //html id선택자 psword 받아옴
    confirmPsword=document.querySelector('#confirm-psword'),
    registerBtn=document.querySelector('#button');

registerBtn.addEventListener('click',register); // registerBtn이 click 이벤트 발생시 register 실행

function register(){
    if (!id.value) {
        return alert('아이디를 입력해주십시오.');
    };
    if (psword.value !== confirmPsword.value) {
            return alert('비밀번호가 일치하지 않습니다.');
    };

    const req={
        id:id.value, // 선택자 id 의 값을 받아옴
        name:name.value,
        psword:psword.value, // 선택자 psword 의 값을 받아옴
    };

    fetch('/register',{
        method: 'POST', //post로 보내기
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(req)
    })
    .then((res)=>res.json()) // 백엔드에서 받은 res(promis)
    //.then((res)=> console.log(res)); 아래와 동일. 파라미터로 받은값이 다시 함수의 파라미터로 들어가는 경우 생략가능
    //.then(console.log);
    .then((res)=>{
        if (res.success){ // 백엔드에서 받은 res의 success값이 true일 때 = 회원가입 성공일 때
            location.href='/login'; // 로그인 페이지로 이동
        }else{
            alert(res.msg); // false 경우 msg alert로 출력
            //alert은 크롬 중앙상단에 뜨는 메시지
        }
    })
    .catch((err)=>{ // 에러발생시 구문
        console.error(new Error('회원가입 에러발생')); // 콘솔에 회원가입중 에러발생 출력
    });
}