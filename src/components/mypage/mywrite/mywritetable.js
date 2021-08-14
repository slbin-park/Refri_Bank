import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css'
import '../../../style/mypage/likeit.css';
import Axios from 'axios'
function Mywritetable({mywrite_table,set_table_number,set_modal_table }) {
    const [page_slice,set_page_slice] = useState({start:0,end:7})


    const return_mywrite_table = () => {
        const arr = [];
        mywrite_table && mywrite_table.slice(page_slice.start,page_slice.end).map((v) => arr.push(<Create_mywrite_table user={v}/>))
        return (
            <>
                {mywrite_table && arr}
            </>
        )
    }

    
    const get_table = (number) =>{
        set_table_number(number)
            Axios.post("https://qkrtmfqls.gabia.io/free" + number, {
            })
                .then((response) => {
                    set_modal_table(response.data)
                })
                .catch((error) => {
                    console.log('reply', error);
                });
    }

    const Create_mywrite_table = ({ user }) => {
        // 제목 클릭하면 내가 작성한 게시글 보여줘야함
        const show_mywrite = (number) => {
            console.log(number)
            get_table(number)
        }

        return (
            <div className="body_sub_form">
                <div /*key={}*/ className='likeit_content_one'>
                    <div className='likeit_no'>{user.number}</div>
                    <div onClick={()=>show_mywrite(user.number)} className='likeit_title_content'>{user.title}</div>
                    <div className="mywrite_date">{user.created}</div>
                    <div className='likeit_cancel' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <button  className='likeit_cancel_btn'>취소</button>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <>
        {return_mywrite_table()}
        </>
    )
}

export default React.memo(Mywritetable);
