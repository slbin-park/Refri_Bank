import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css';
import '../../../style/mypage/likeit.css';
import Liketable from './liketable';

function Likeit({ history,like_table }) {



    
    return (
        
        <div className='likeit_body'>
            <div className='likeit_header'>
                <h2>좋아요 게시글</h2>
            </div>
            <div className='likeit_content'>
            <div className='body_header'>
                    <div className='likeit_no'>No</div>
                    <div className='likeit_name'>제목</div>
                    <div className='likeit_cancel'>취소</div>
                </div>
                <div className='body_main'>
                    <Liketable history={history}table={like_table}></Liketable>
                </div>
            </div>


        </div>
    )
}

export default Likeit;
