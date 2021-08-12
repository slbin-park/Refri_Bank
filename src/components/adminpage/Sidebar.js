import React, { useState, useEffect } from "react";
import '../../style/adminpage/sidebar.css';

function Sidebar({ history ,set_admin_page}) {
  const [menu1,setmenu1] = useState(false)
  const [menu2,setmenu2] = useState(false)



    return (
        <div className="side_bar">
            <div className="topbar" >
                <div className="left_sub_menu">
                    <div className="sub_menu">
                            <h2>Admin Page</h2>
                            <ul className="big_menu">
                                <li onClick={()=>set_admin_page('user')}>유저관리 <i className="arrow fas fa-angle-right"></i></li>
                                {/* {menu1 ?<ul className="small_menu" >
                                    <li><a href="#">소메뉴1-1</a></li>
                                    <li><a href="#">소메뉴1-2</a></li>
                                    <li><a href="#">소메뉴1-4</a></li>
                                </ul>:''} */}
                            </ul>
                            <ul className="big_menu">
                                <li onClick={()=>set_admin_page('notice')} >공지사항 <i className="arrow fas fa-angle-right"></i></li>
                                {/* {menu2 ?<ul className="small_menu">
                                    <li><a href="#">소메뉴2-1</a></li>
                                    <li><a href="#">소메뉴2-2</a></li>
                                </ul>:''} */}
                            </ul>
                            <ul className="big_menu">
                                <li>MYPAGE</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
