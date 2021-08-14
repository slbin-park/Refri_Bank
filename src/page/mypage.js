import React, { useState, useEffect } from "react";
import Sidebar from '../components/mypage/Sidebar';
import Mainpage from '../components/mypage/mainpage';
import '../style/mypage/mypage.css';
import Informationpage from '../components/mypage/information';
import Likeit from '../components/mypage/like/likeit';
import Myigd  from '../components/mypage/igd/igdmanage';
import Mywrite from '../components/mypage/mywrite/mywrite';
import Axios from 'axios'

function Mypage({ history,information }) {

    const [my_page,set_admin_page] = useState('my_igd')
    const [like_table,set_like_table] = useState()
    const [like_count,set_like_count] = useState()

    const [mywrite_table,set_mywrite_table] = useState()


    // 좋아요한 레시피
    useEffect(()=>{

        if(information != undefined){
            get_my_table()
        Axios.post("https://qkrtmfqls.gabia.io/likeitpage", {
            id: information.id,
        })
        .then((response) => {
            console.log(response.data)
            set_like_table(response.data.data)
            set_like_count(response.data.data.length)
        })
        .catch((error) => {
            console.log(error);
        });
        }
    },[information])

    const get_my_table = async() => {
    // 내가 작성한 게시글
        Axios.post("https://qkrtmfqls.gabia.io/getmyboard/", {
            id:information.id
        })
        .then((response) => {
            set_mywrite_table(response.data)
            console.log(mywrite_table);
        })
        .catch((error) => {
            console.log('reply', error);
        });
    }

    return (
        <>
        <div className="mypage_main" style={{ height: '100vh' }}>
            <button onClick={()=>set_admin_page('like')}>
                이거누르셈
            </button>
            <button onClick={()=> {set_admin_page('my_write')}}>
                내 게시물
            </button>

            <div className='mypage_main_div'>
                {/* <Sidebar set_admin_page={set_admin_page}/> */}
                {my_page === 'main' ? <Mainpage like_count={like_count}/> :''}
                {my_page === 'like' ? <Likeit history={history} like_table={like_table} information={information}/>:''}
                {my_page === 'my_igd' ? <Myigd history={history} like_table={like_table} information={information}/>:''}
                {my_page === 'my_write' ? <Mywrite history={history} information={information}  mywrite_table={mywrite_table} />:''}
            </div>
        </div>
        </>
    )
}

export default Mypage;
