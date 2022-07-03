'use strict';

const users={ // 임시로 생성된 ID와 PW 리스트 => 등록된 계정
    good_id:['id1','id2','id3'],
    good_psword:['1111','1111','1234']
};

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

        if (users.good_id.includes(request_id)) { // request_id가 good_id에 포함된 경우
            const indexer=users.good_id.indexOf(request_id); // 해당 id의 리스트 번호 indexer에 등록
            if (users.good_psword[indexer]==request_psword) { // request_psword가 good_psword[indexer] 과 같은지 비교 => 아이디에 해당하는 비밀번호인지 비교
                //인증성공
                return res.json({
                    success:true // success라는 키값으로 true 반환 JSON 형태
                });
            }
        }
        //인증실패
        return res.json({
            success:false, // sucess라는 키값으로 false 반환 JSON 형태
            msg:'로그인 실패'
        });
        
    }
};

module.exports={
    output,process
}