import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css';
import '../../../style/mypage/likeit.css';
import Liketable from './liketable';

function Likeit({ history, like_table, information }) {

    return (

        <div className='likeit_body'>
            <div className='likeit_header_main_form'>
                <div className="likeit_header_title_form">
                    <h2>좋아요 게시글</h2>
                </div>
                <div className="likeit_header_sub_form">
                    <h4>고객 여러분의 소중한 의견을 귀담아 듣도록 최선을 다하겠습니다..</h4>
                </div>
            </div>
            <div className='likeit_content'>
                <div className="body_header_main_form">
                    <div className='body_header_sub_form'>
                        <div className='likeit_no'>No</div>
                        <div className='likeit_title'>제목</div>
                        {/* <div className='likeit_nickname'>작성자</div>
                        <div className='likeit_date'>등록일</div> */}
                        <div className='likeit_cancel'>취소</div>
                    </div>
                </div>
                <div className='body_main_form'>
                    <Liketable history={history} table={like_table} information={information}></Liketable>
                </div>
            </div>


        </div>
    )
}

export default Likeit;
