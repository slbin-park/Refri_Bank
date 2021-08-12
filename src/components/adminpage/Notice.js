import React, { useState, useEffect } from "react";
import '../../style/adminpage/sidebar.css';
import '../../style/adminpage/noticepage.css';
import '../../style/adminpage/modal.css';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

function Notice({ history }) {

    // const Get_Notice_table = ({ user }) => {
    //     return (
    //         <div key={user.ID} className='admin_no'>
    //             <div className='admin_title'>{user.ID}</div>
    //             <div className='admin_date'>{user.Name}</div>
    //             <div className='admin_view'>{user.visit}</div>
    //             <div className='admin_change' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    //                 <button onClick={() => { set_show_modal(!show_modal); set_change_psw({ ...change_psw, id: user.ID }) }} className='admin_change_btn'>변경</button>
    //             </div>
    //             <div className='admin_kick' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
    //                 <button onClick={() => {set_show_delete(!show_delete);set_show_delete({ ...change_psw, id: user.ID })}} className='admin_kick_btn'>강제탈퇴</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    return (
        <div className='body'>
            <div className='body_content'>
                <div className='body_title'>
                    <h2>공지사항</h2>
                </div>
                <div className='body_header'>
                    <div className='admin_no'>No</div>
                    <div className='admin_title'>제목</div>
                    <div className='admin_date'>등록일</div>
                    <div className='admin_change'>수정</div>
                    <div className='admin_delete'>삭제</div>
                </div>


                
            </div>
        </div>
    )
}

export default Notice;
