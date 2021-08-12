import React, { useState, useEffect } from "react";
import '../style/login_page/login.css';
import logo from '../img/main_body_img/login-logo.png';
import Axios from 'axios';

const Login = ({ information, setinformation, history, setpage }) => {
  // 만약에 전달안해줬는데? 여기서 히스토리 받았자나 => 그럼 안되지
  const [logintext, setlogintext] = useState({ id: '', pwd: '' })



  const TokenLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      id: logintext.id,
      pwd: logintext.pwd
    })
      .then((response) => {
        if (response.data.success)//로그인 성공시
        {
          console.log(response.data)
          alert('로그인에 성공하셨습니다!')
          setpage(true)
          setinformation({ id: response.data.id, nickname: response.data.nickname })
          localStorage.setItem('token', response.data.token);
          history.push('/');
        } else if (response.data.token.success == false) {
          window.localStorage.clear();
          console.log(response.data);
          setpage(false)
          alert(response.data.msg);//실패사유 출력
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const Func_login_move_signup = (e) => {
    console.log("회원가입 페이지로 이동")
    history.push('/signup');
  }

  return (
    <div className="login-page-main-form">
      <div className="login-sub-form">
        <div className="login-logo-top-form">
          <div className="login-logo-img-form">
            <img className="login-logo-img" src={logo}></img>
          </div>
        </div>
        <div className="login-input-main-form">
          <div className="login-input-sub-form">
            <input className="login-wait-id" name="id" type="text" placeholder="Id" onChange={e => setlogintext({ ...logintext, id: e.target.value })} />
            <input className="login-wait-psword" name="pwd" type="password" placeholder="Password" onChange={e => setlogintext({ ...logintext, pwd: e.target.value })} />
            <button className="loginpage_login_btn" onClick={TokenLogin}> 
              <div>
                <span>Login</span> 
              </div>
            </button>
            <button className="loginpage_signup_btn" onClick={Func_login_move_signup}> 
              <div>
                <span>Signup</span> 
              </div>
            </button>
          </div>
        </div>

        {/* <input type="text" placeholder="Nickname"onChange={e => setregister({ ...register, name: e.target.value })} value={register.name} /> */}
        
      </div>
    </div>

  )
}

export default Login;
