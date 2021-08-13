import React, { useState, useEffect } from "react";
import '../../style/mypage/sidebar.css';

function Sidebar({ history ,set_admin_page}) {

    return (
        <div className="mypage_side_bar">
            <div className="topbar" >
                <div className="left_sub_menu">
                    <div className="sub_menu">
                            <h2 style={{textAlign:'center'}}>My Page</h2>
                            <ul className="big_menu">
                                <li onClick={()=>set_admin_page('main')}>개인정보 <i className="arrow fas fa-angle-right"></i></li>
                                {/* {menu1 ?<ul className="small_menu" >
                                    <li><a href="#">소메뉴1-1</a></li>
                                    <li><a href="#">소메뉴1-2</a></li>
                                    <li><a href="#">소메뉴1-4</a></li>
                                </ul>:''} */}
                            </ul>
                            <ul className="big_menu">
                                <li onClick={()=>set_admin_page('like')} >좋아요 레시피 <i className="arrow fas fa-angle-right"></i></li>
                                {/* {menu2 ?<ul className="small_menu">
                                    <li><a href="#">소메뉴2-1</a></li>
                                    <li><a href="#">소메뉴2-2</a></li>
                                </ul>:''} */}
                            </ul>
                            <ul className="big_menu">
                                <li onClick={()=>set_admin_page('my_write')}>내가 쓴 글</li>
                            </ul>
                            <ul className="big_menu">
                                <li onClick={()=>set_admin_page('my_igd')}>재료관리</li>
                            </ul>
                            <ul className="big_menu">
                                <li>정보변경</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
