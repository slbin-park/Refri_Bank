import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css';
import '../../../style/mypage/likeit.css';
import xbuttom from '../../../img/board/xbutton.jpg';
import Open_modal from './mywritecontent';
import Axios from 'axios';
import Mywritetable from './mywritetable';

function Mywrite({ information, history, mywrite_table }) {

    const [modalOn, setModalOn] = useState(false);
    const [get_table_number, set_table_number] = useState();
    const [get_modal_table,set_modal_table] = useState();


    const onCloseModal = () => {
        setModalOn(false);
    }

    const Modal = () => {
        return (
            <>
                {
                    <div className="modal" data-aos="zoom-in">
                        <div className="closebtnbox"><img className="closebtn" role="button" src={xbuttom} onClick={onCloseModal} width="30px" height="30px" /></div>
                        <Open_modal get_table_number={get_table_number}get_modal_table={get_modal_table[0]} information={information} />
                    </div>}
            </>
        );
    };

    useEffect(()=>{
        if(get_modal_table!=undefined){
            setModalOn(!modalOn)
        }
    },[get_modal_table])






    return (

        <div className='likeit_body'>
            {modalOn ? <Modal /> : ''}
            <div className='likeit_header_main_form'>
                <div className="likeit_header_title_form">
                    <h2>내가 작성한 게시글</h2>
                </div>
                <div className="likeit_header_sub_form">
                    <h4>오늘도 게시글을 남겨보세요</h4>
                </div>
            </div>
            <div className='likeit_content'>
                <div className="body_header_main_form">
                    <div className='body_header_sub_form'>
                        <div className='likeit_no'>No</div>
                        <div className='likeit_title'>제목</div>
                        {/* mywrite_date만 css 공유 안함 */}
                        <div className='mywrite_date'>등록일</div>
                        <div className='likeit_cancel'>취소</div>
                    </div>
                </div>
                <div className='body_main_form'>
                    <Mywritetable information={information}set_table_number={set_table_number} set_modal_table={set_modal_table} set_modal_table={set_modal_table} mywrite_table={mywrite_table}></Mywritetable>
                </div>
            </div>


        </div>
    )
}

export default Mywrite;
