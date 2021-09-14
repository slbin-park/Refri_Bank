import React, { useState, useEffect } from 'react';
import '../style/login_page/login.css';
import logo from '../img/main_body_img/login-logo.png';
import Alert from './alert';
import Axios from 'axios';

const Login = ({ setinformation, history, setpage }) => {
  // 만약에 전달안해줬는데? 여기서 히스토리 받았자나 => 그럼 안되지
  const [logintext, setlogintext] = useState({ id: '', pwd: '' });

  const TokenLogin = (e) => {
    // 아이디 체크
    if (logintext.id.length < 1 || logintext.id.length > 10) {
      Alert('ID Check', 'ID는 최소 1글자 이상, 최대 10글자 이하입니다.');
      return;
    }
    // 비밀번호 체크
    if (logintext.pwd.length < 1 || logintext.pwd.length > 10) {
      Alert('PWD Check', 'PWD는 최소 1글자 이상, 최대 10글자 이하입니다.');
      return;
    }

    // console.log('login id = ', logintext.id);

    e.preventDefault();
    Axios.post('https://qkrtmfqls.gabia.io/login', {
      id: logintext.id,
      pwd: logintext.pwd,
    })

      .then((response) => {
        console.log('response.data = ', response.data);

        if (response.data.success) {
          setpage(true);
          setinformation({
            id: response.data.id,
            nickname: response.data.nickname,
          });
          localStorage.setItem('token', response.data.token);
          Alert('Login', '로그인에 성공하셨습니다.');
          history.push('/');
        }

        if (response.data.success == false) {
          window.localStorage.clear();
          setpage(false);
          Alert('Login', response.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Func_login_move_signup = (e) => {
    history.push('/signup');
  };

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
            <input
              className="login-wait-id"
              name="id"
              type="text"
              placeholder="ID"
              onChange={(e) => setlogintext({ ...logintext, id: e.target.value })}
            />
            <input
              className="login-wait-psword"
              name="pwd"
              type="password"
              placeholder="Password"
              onChange={(e) => setlogintext({ ...logintext, pwd: e.target.value })}
            />
            <button className="loginpage_login_btn" onClick={TokenLogin}>
              <div>
                <span>Login</span>
              </div>
            </button>
            <button className="loginpage_signup_btn" onClick={Func_login_move_signup}>
              <div>
                <span>Sign Up</span>
              </div>
            </button>
          </div>
        </div>

        {/* <input type="text" placeholder="Nickname"onChange={e => setregister({ ...register, name: e.target.value })} value={register.name} /> */}
      </div>
    </div>
  );
};

export default Login;
