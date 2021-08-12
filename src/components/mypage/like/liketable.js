import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css'
import '../../../style/mypage/likeit.css';






function Liketable({table,history}) {
    const [page_slice,set_page_slice] = useState({start:0,end:7})

    const return_like_table = () => {
        const arr = [];
        table&&table.slice(page_slice.start,page_slice.end).map((v) => arr.push(<Create_like_table user={v}/>))
        return (
            <>
                {table && arr}
            </>
        )
    }


    const Create_like_table = ({ user }) => {
        const rcp_change = (e) => {
            console.log(123)
            e.preventDefault();
            history.push("/recipe/" + user.foodid)
        }
    
        return (
            <div key={user.foodid} className='likeit_content_one'>
                <div className='likeit_no'>{user.foodid}</div>
                <div onClick={(e)=>rcp_change()} className='likeit_name'>{user.foodname}</div>
                <div className='likeit_cancel' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <button  className='likeit_cancel_btn'>취소</button>
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
