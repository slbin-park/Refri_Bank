import React, { useState, useEffect } from "react";
// import '../../../style/mypage/index.css'
// import '../../../style/mypage/likeit.css';

function Mywritetable({mywrite_table,history}) {
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


    const Create_mywrite_table = ({ user }) => {
        const show_mywrite = (e) => {
            
            // history.push("/recipe/" + user.foodid)
        }
    
        return (
            <div key={} className=''>
                <div className=''>{user.number}</div>
                <div onClick={(e)=>show_mywrite()} className='mywrite_title'>{user.title}</div>
                <div className='mywrite_cancel' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <button  className='mywrite_cancel_btn'>취소</button>
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
