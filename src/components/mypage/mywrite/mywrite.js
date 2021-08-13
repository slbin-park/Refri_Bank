import React, { useState, useEffect } from "react";
// import '../../../style/mypage/index.css';
// import '../../../style/mypage/likeit.css';
import Mywritetable from './mywritetable';

function Mywrite({ history, mywrite_table}) {



    
    return (
        <div className='likeit_body'>
            <div className='likeit_header'>
                <h2>내가 쓴 글</h2>
            </div>
            <div className='likeit_content'>
            <div className='body_header'>
                    <div className='likeit_no'>No</div>
                    <div className='likeit_name'>제목</div>
                    <div className='likeit_cancel'>삭제</div>
                </div>
                <div className='body_main'>
                    <Mywritetable history={history} mywrite_table={mywrite_table}></Mywritetable>
                </div>
            </div>
        </div>
    )
}

export default Mywrite;
