import React, { useState, useEffect } from 'react';

import '../style/mainpage/header/header.css';
// css 파일

// import this_header_show_logo from '../../img/logo.png';
import this_header_show_logo from '../img/main_body_img/logo_img_good.png';
import this_header_show_rgfimg from '../img/main_body_img/rfgimg2.png';
import this_header_login_btn from '../img/main_body_img/login_btn.jpeg'
import this_header_logout_btn from '../img/main_body_img/logout_btn.jpeg'

// 이미지 파일

import Axios from 'axios';


const Header = ({location, information, setinformation, history ,page,setpage}) => {
    // 함수가 아니고 컴포넌트 처음 시작은 무조건 대문자

    const [nickname,setnickname] = useState(information.nickname);
    const [where_category,setwhere_category] = useState('default')
    
    useEffect(() => {
        let token = window.localStorage.getItem("token")
        token && token_check()
    }, [location])
    //로케이션이 바뀔때마다 토큰 체크

    useEffect(() => {
        setnickname(information.nickname)
    }, [information])
    //로그인 정보가 변할때마다

    useEffect(() => {
        setwhere_category(location['pathname'])
        // if (where_category === '/') {
        //     setwhere_category('default')
        // }
    }, [location])
    // 로케이션이 변할때마다

    
    const token_check = async () => {
        await Axios.post("https://qkrtmfqls.gabia.io/tokencheck", {
            token: window.localStorage.getItem("token")
        })
            .then((response) => {
                let token = window.localStorage.getItem("token")
                if (response.data.token.success) {
                    if(information.id==''){
                    setinformation({ id: response.data.token.token.id, nickname: response.data.token.token.nickname })
                }
                    setpage(true)
                }
                else {
                    alert('토큰이 만료되었습니다.')
                    window.localStorage.clear();
                }
            })
            .catch((error) => {
            });
    }

    const Func_header_move_home = () => {               //홈으로 돌아가기
        history.push('/');
    }
    const Func_header_move_myrfg = (e) => {             // 나만의 냉장고페이지
        history.push('/rfgpage');
    }
    const Func_header_move_profile = (e) => {           // 개발자 프로필
        history.push('/profile');
    }
    const Func_header_move_introduce = (e) => {         // 웹 소개 페이지
        history.push('/introduce');
    }
    const Func_header_move_noticepage = (e) => {        // 커뮤니티 페이지
        history.push('/noticepage');
    }
    const Func_header_move_secret = (e) => {            // 시크릿 페이지
        alert(" 아직 준비중인 페이지입니다 ! ")
    }
    const Func_header_move_page = (e) => {              // 시크릿 페이지
        alert(" 아직 준비중인 페이지입니다 ! ")
    }
    const Func_header_move_loginpage = (e) => {         //  로그인 페이지
        history.push('/login')
    }

    const Func_header_logout = (e) => {                 // 로그아웃 하기
        window.localStorage.clear();
        setpage(false)
        history.push('/')
    }

    return (
        <>
            {/* 이거 컴포넌트 나눠서 해줘요 */}
            <div className="header-form">
                <div className="header-top-box">
                    <div className="header-logo-form">
                        <img className="header-logo-img" onClick={() => Func_header_move_home()} src={this_header_show_logo} />
                        {/* 로고이미지 ( 왼쪽 상단에 ) */}
                    </div>
            
                    <div className="login-window-form">
                        {page != true ?
                            <>
                                <div className="login-wait-form">
                                    <button className="login-move-loginpage-btn" onClick={() => Func_header_move_loginpage()}>
                                        <img src={this_header_login_btn} width='50' height='50'></img>
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
                                    <button className="header-myrfg-btn" onClick={() => Func_header_move_myrfg()}>
                                        <img align="center" src={this_header_show_rgfimg} width='80' height='70' />
                                    </button>
                                </div>
                                
                                <div className="header-logout-btn">
                                    <button className="logout-move-mainpage-btn" onClick={(e) => Func_header_logout()}>
                                        <img align="center" src={this_header_logout_btn} width='50' height='50' />
                                    </button>
                                </div>
                            </div>
                        }

                    </div>
                </div>

                <div className="header-bottom-box" >
                    <div className="introduce_box">
                        { where_category === "/introduce" ? 
                        <button className="header-category-btn" onClick={() => Func_header_move_introduce()} id="header-category-button1">웹 소개</button> 
                        : 
                        <button className="header-category-btn" onClick={() => Func_header_move_introduce()} id="header-category-button1">Introduce</button>  
                        }

                    </div>

                    <div className="profile_box">
                        { where_category === "/profile" ? 
                        <button className="header-category-btn" onClick={Func_header_move_profile} id="header-category-button4">개발자 프로필</button>
                        : 
                        <button className="header-category-btn" onClick={Func_header_move_profile} id="header-category-button4">Profile</button>
                        }
                    </div>

                    <div className="board_box">
                        { where_category === "/noticepage" ? 
                        <button className="header-category-btn" id="header-category-button2" onClick={Func_header_move_noticepage}>커뮤니티</button>
                        : 
                        <button className="header-category-btn" id="header-category-button2" onClick={Func_header_move_noticepage}>Board</button>
                        }
                    </div>

                    <div>
                        { where_category === "/secret" ?
                        <button className="header-category-btn" id="header-category-button3" onClick={Func_header_move_secret}>시크릿</button>
                        : 
                        <button className="header-category-btn" id="header-category-button3" onClick={Func_header_move_secret}>Secret</button>
                        }

                    </div>

                    <div>
                        { where_category === "/page" ? 
                        <button className="header-category-btn" id="header-category-button5" onClick={Func_header_move_page}>페이지</button>
                        : 
                        <button className="header-category-btn" id="header-category-button5" onClick={Func_header_move_page}>Page</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;