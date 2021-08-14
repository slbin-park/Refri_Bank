import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css'
import '../../../style/mypage/likeit.css';


function Liketable({table, history, information, like_page_slice}) {
    
    console.log("like", like_page_slice);
    const return_like_table = () => {
        const arr = [];
        table&&table.slice(like_page_slice.start,like_page_slice.end).map((v) => arr.push(<Create_like_table user={v}/>))
        return (
            <>
                {table && arr}
            </>
        )
    }


    const Create_like_table = ({ user }) => {
        const rcp_change = (e) => {
            history.push("/recipe/" + user.foodid)
        }
    
        return (
            <div className="body_sub_form">
                <div key={user.foodid} className='likeit_content_one'>
                    <div className='likeit_no'>{user.foodid}</div>
                    <div onClick={(e)=>rcp_change()} className='likeit_title_content'>{user.foodname}</div>
                    <div className="likeit_nickname">{information.nickname}</div>
                    <div className="likeit_date">{information.nickname}</div>

                    <div className='likeit_cancel'>
                        <button  className='likeit_cancel_btn'>취소</button>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <>
            {return_like_table()}
        </>
    )
}

export default React.memo(Liketable);