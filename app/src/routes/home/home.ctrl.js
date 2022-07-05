'use strict';

const UserStorange=require('../../models/UserStorage');

const output={
     home:(req,res)=>{
        res.render('home/index');
    },
     login:(req,res)=>{
        res.render('home/login');
    }
    
};

const process={
    login:(req,res)=>{
        const request_id=req.body.id,
        request_psword=req.body.psword
        const users=UserStorange.getUsers('good_id','good_psword');

        const response={}; // response 오브젝트 생성
        if (users.good_id.includes(request_id)) { // request_id가 good_id에 포함된 경우
            const indexer=users.good_id.indexOf(request_id); // 해당 id의 리스트 번호 indexer에 등록
            if (users.good_psword[indexer]==request_psword) { // request_psword가 good_psword[indexer] 과 같은지 비교 => 아이디에 해당하는 비밀번호인지 비교
                //인증성공
                response.success=true; // response=오브잭트 success=키값 true 
                return res.json(response);
            }
        }
        //인증실패
        response.success=false;
        response.msg='로그인 실패'; // msg=키값
        return res.json(response);
    }
};

module.exports={
    output,process
}