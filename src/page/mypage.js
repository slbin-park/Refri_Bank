import React, { useState, useEffect } from "react";
import Sidebar from '../components/mypage/Sidebar';
import Mainpage from '../components/mypage/mainpage';
import '../style/mypage/mypage.css';
import Informationpage from '../components/mypage/information';
import Likeit from '../components/mypage/like/likeit';
import Myigd  from '../components/mypage/igd/igdmanage';
// import Mywrite from '../components/mypage/mywrite/mywrite';
import Axios from 'axios'

function Mypage({ history,information }) {
    const [my_page,set_admin_page] = useState('my_igd');
    const [like_table,set_like_table] = useState();
    const [like_count,set_like_count] = useState();
    const [like_page_cnt, set_like_page_cnt] = useState();

    // const [mywrite_table,set_mywrite_table] = useState()
    
    useEffect(()=>{
        if(information != undefined){
        Axios.post("https://qkrtmfqls.gabia.io/likeitpage", {
            id: information.id,
        })
            .then((response) => {
                console.log(response.data)
                set_like_table(response.data.data)
                set_like_page_cnt(parseInt(response.data.data.length/10) + (response.data.data.length%10 == 0 ? 0 : 1));
                set_like_count(response.data.data.length)
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },[information])

    // 내가 쓴 게시글 불러옴 number랑 title만 불러오면 됨.
    // useEffect(()=>{
    //     if(information.id != ''){
    //     Axios.post("", {
    //         id: information.id,
    //     })
    //         .then((response) => {
    //             console.log(response.data)
    //             set_mywrite_table(response.data.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     }
    // },[information])

    return (
        <div className="mypage_main" style={{ height: '100vh' }}>
            <button onClick={()=>set_admin_page('like')}>
                이거누르셈

                </button>
            <div className='mypage_main_div'>
                {/* <Sidebar set_admin_page={set_admin_page}/> */}
                {my_page === 'main' ? <Mainpage like_count={like_count}/> :''}
                {my_page === 'like' ? <Likeit history={history} like_table={like_table} information={information} like_page_cnt={like_page_cnt}/>:''}
                {my_page === 'my_igd' ? <Myigd history={history} like_table={like_table} information={information}/>:''}
                {/* {my_page === 'my_write' ? <Mywrite history={history} mywrite_table={mywrite_table} information={information}/>:''} */}
            </div>
        </div>
    )
}

export default Mypage;
