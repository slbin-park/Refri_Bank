import React, { useState } from "react";
import '../style/signup_page/register.css';
import logo from '../img/main_body_img/login-logo.png';
import Axios from 'axios'

function App({ history, setthis_signup_set_inputs, this_signup_set_inputs }) {
  // 만약에 전달안해줬는데? 여기서 히스토리 받았자나 => 그럼 안되지
  const [register, setregister] = useState({ id: '', pwd: '', pwdcheck: '', name: '' })


  const user_register = async e => {
    console.log(1)
    e.preventDefault();
    await Axios.post("https://qkrtmfqls.gabia.io/register", {
      id: register.id,
      psword: register.pwd,
      name: register.name,
    })
      .then((response) => {
        console.log(response.data)
        if (response.data.success) {
          alert('회원가입을 축하드립니다!')
          history.push('/')
        }
        else {
          alert(response.data.msg)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const Func_signup_check_password = (e) => {
    e.preventDefault();
    // 버튼을 누를시 수행하는 고유 동작을 중단시킴
    if (register.pwd === register.pwdcheck) alert("일치합니다.")
    // 로그인 성공 했을때에만 냉장고 버튼 생기게 해줘야 함
    // 로그인 안하면 ( 쿠키 없을 때 ) 버튼 생기면 안됨
    else alert("Check your PWD.")
  }

  return (
    <div className="register-page-main-form">
      <div className="register-sub-form">
        <div className="register-logo-top-form">
          <div className="register-logo-img-form">
            <img className="register-logo-img" src={logo}></img>
          </div>
        </div>
        <div className="register-input-main-form">
          <div className="register-input-sub-form">
            <input type="text" placeholder="ID" onChange={e => setregister({ ...register, id: e.target.value })} value={register.id} />
            <input type="password" onChange={e => setregister({ ...register, pwd: e.target.value })} value={register.pwd} placeholder="Password" />
            <input type="password" placeholder="Check Password" onChange={e => setregister({ ...register, pwdcheck: e.target.value })} value={register.pwdcheck} />
            <button onClick={Func_signup_check_password}>
              <div>
                <span>Check Password</span>
              </div>
            </button>
            <input type="text" placeholder="Nickname" onChange={e => setregister({ ...register, name: e.target.value })} value={register.name} />
            <button onClick={user_register}>
              <div>
                <span>Submit</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(App);
