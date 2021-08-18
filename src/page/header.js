import React, { useState, useEffect } from 'react';
import '../style/mainpage/header/header.css';
import Alert from "./alert";
// css 파일

import show_logo from '../img/main_body_img/logo_img_good.png';
import show_rgfimg from '../img/main_body_img/rfgimg2.png';
import login_btn from '../img/main_body_img/login_btn.jpeg';
import logout_btn from '../img/main_body_img/logout_btn.jpeg';

// 이미지 파일

import Axios from 'axios';


const Header = ({ location, information, setinformation, history, page, setpage }) => {
    // 함수가 아니고 컴포넌트 처음 시작은 무조건 대문자

    const [nickname, setnickname] = useState(information && information.nickname);
    const [where_category, setwhere_category] = useState('default')
    
    useEffect(() => {
        let token = window.localStorage.getItem("token")
        token && token_check()
    }, [location])
    //로케이션이 바뀔때마다 토큰 체크

    useEffect(() => {
        information && setnickname(information.nickname)
    }, [information])
    //로그인 정보가 변할때마다

    useEffect(() => {
        setwhere_category(location['pathname'])
    }, [location])
    // 로케이션이 변할때마다


    const token_check = async () => {
        await Axios.post("https://qkrtmfqls.gabia.io/tokencheck", {
            token: window.localStorage.getItem("token")
        })
            .then((response) => {
                if (response.data.token.success) {
                    if (information == undefined) {
                        setinformation({ id: response.data.token.token.id, nickname: response.data.token.token.nickname })
                    }
                    setpage(true)
                }
                else {
                    Alert("Login", '토큰이 만료되었습니다.');
                    window.localStorage.clear();
                }
            })
            .catch((error) => {
            });
    }

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const move_home = () => {               //홈으로 돌아가기
        if (location['pathname'] !== '/') {
            // 현재 위치가 루트가 아닐때만 이동하게 함
            console.log("여긴 홈페이지가 아니야, 홈페이지로 이동해")
            history.push('/');
        }
        else {
            console.log("여긴 이미 홈페이지야, 그대로 있어")
        }
    }
    
    const move_myrfg = (e) => {             // 나만의 냉장고페이지
        history.push('/rfgpage');
    }
    const move_profile = (e) => {           // 개발자 프로필
        history.push('/profile');
    }
    const move_introduce = (e) => {         // 웹 소개 페이지
        history.push('/introduce');
    }
    const move_noticepage = (e) => {        // 커뮤니티 페이지
        history.push('/noticepage');
    }
    const move_secret = (e) => {            // 시크릿 페이지
        Alert("Page", "준비중인 페이지입니다.");
    }

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    const move_like = (e) => {         
        history.push('/like');
    }

    const move_my_igd = (e) => {
        history.push('/my_igd');
    }

    const move_my_write = (e) => {    
        history.push('/my_write');
    }

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const move_loginpage = (e) => {         //  로그인 페이지
        history.push('/login')
    }

    const move_logout = (e) => {                 // 로그아웃 하기
        window.localStorage.clear();
        setinformation();
        setpage(false)
        history.push('/')
    }

    return (
        <>
            {/* 이거 컴포넌트 나눠서 해줘요 */}
            <div className="header-form">
                <div className="header-top-box">
                    <div className="header-null-form">
                    </div>
                    <div className="header-logo-main-form">
                        <div className="header-logo-sub-form">
                            <img className="header-logo-img" onClick={() => move_home()} src={show_logo} />
                            {/* 로고이미지 ( 왼쪽 상단에 ) */}
                        </div>
                    </div>

                    <div className="login-window-form">
                        {page != true ?
                            <>
                                <div className="login-wait-form">
                                    <button className="login-move-loginpage-btn" onClick={() =>move_loginpage()}>
                                        <img src={login_btn} className="login-move-loginpage-img"></img>
                                        <p className="login-move-loginpage-text" >로그인</p> 
                                    </button> 
                                    
                                </div>
                            </>

                            :

                            <div className="header-right-big-box">
                                <div className="login-success-msg1">
                                    {nickname} 님
                                    <span className="login-success-msg2">Have a good day 🌈</span>
                                </div>

                                <div className="header-move-rfgpage-btn">
                                    <button className="header-myrfg-btn" onClick={() => move_myrfg()}>
                                        <img align="center" src={show_rgfimg} />
                                        <p className="header-myrfg-btn-text" >나만의 냉장고</p> 
                                    </button>
                                </div>

                                <div className="header-logout-btn">
                                    <button className="logout-move-mainpage-btn" onClick={(e) => move_logout()}>
                                        <img align="center" src={login_btn} />
                                        <p className="logout-move-mainpage-btn-text" >로그아웃</p> 
                                    </button>
                                </div>
                            </div>
                        }

                    </div>
                </div>

                <div className="header-bottom-box" >
                    <div className="introduce_box">
                        {where_category === "/introduce" ?
                            <button className="header-category-btn" onClick={() => move_introduce()} id="header-category-button1">웹 소개</button>
                            :
                            <button className="header-category-btn" onClick={() => move_introduce()} id="header-category-button1">Introduce</button>
                        }

                    </div>

                    <div className="profile_box">
                        {where_category === "/profile" ?
                            <button className="header-category-btn" onClick={move_profile} id="header-category-button4">개발자 프로필</button>
                            :
                            <button className="header-category-btn" onClick={move_profile} id="header-category-button4">Profile</button>
                        }
                    </div>

                    <div className="board_box">
                        {where_category === "/noticepage" ?
                            <button className="header-category-btn" id="header-category-button2" onClick={move_noticepage}>커뮤니티</button>
                            :
                            <button className="header-category-btn" id="header-category-button2" onClick={move_noticepage}>Board</button>
                        }
                    </div>

                    <div className="secret_box">
                        {where_category === "/secret" ?
                            <button className="header-category-btn" id="header-category-button3" onClick={move_secret}>시크릿</button>
                            :
                            <button className="header-category-btn" id="header-category-button3" onClick={move_secret}>Secret</button>
                        }
                    </div>

                    <div className="page_box">
                        <button className="header-category-btn" id="header-category-button5">Page
                            <div className="header-category-btn-mypage-div">
                                <ul className="header-category-btn-mypage-ul">
                                    <li className="header-category-btn-mypage-li" onClick={move_my_igd}>재료 관리</li>
                                    <li className="header-category-btn-mypage-li" onClick={move_like}>좋아요한 레시피</li>
                                    <li className="header-category-btn-mypage-li" onClick={move_my_write}>내가 작성한 게시글</li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;