import React, { useState, useEffect } from "react";

import '../../style/noticepage/noticepage.css';
import 'aos/dist/aos.css';

import email_img from '../../img/board/email.png';
import xbuttom from '../../img/board/xbutton.jpg';

import Noticeboard from '../../components/noticepage/noticeboard';
import Freeboard from '../../components/noticepage/freeboard';
import Freecontent from '../../components/noticepage/freecontent';
import Write_form from '../../components/noticepage/writeform'


function App({ information }) {

  const [page, setpage] = useState('free') // 공지 , 자유게시판 구분용
  const [write_toggle, set_write_toggle] = useState(false); // 게시글 작성하기 위한 토글
  const [get_free_number, set_get_free_number] = useState(); // 게시판 고유 번호
  const [modalOn, setModalOn] = useState(false); // 모달창을 위한 토글

  const Write_open = (e) => {
    if (page == 'notice') {
      if (information.id == 'smpts00' || information.id == '1') {
        set_write_toggle(!write_toggle)
      }
      else {
        alert('관리자만 가능합니다.')
      }
    }
    else {
      set_write_toggle(!write_toggle)
    }
  }

  // 공지사항
  const Func_noticepage_toggle_noticeboard = () => {
    setpage('notice');
    document.querySelector('.noticeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.freeboard-select-btn').classList.remove('selectedboard-btn');
  }

  // 자유게시판
  const Func_noticepage_toggle_freeboard = () => {
    setpage('free');
    document.querySelector('.freeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.noticeboard-select-btn').classList.remove('selectedboard-btn');
  }

  const onCloseModal = () => {
    setModalOn(!modalOn);
  }

  //이메일 전송 링크
  const Func_email_click_btn = () => {
    window.location.href = "https://www.naver.com/";
  }

  const Modal = () => {
    return (
      <>
        <div className="modal" data-aos="zoom-in">
          <div className="closebtnbox"><img className="closebtn" role="button" src={xbuttom} onClick={onCloseModal} width="30px" height="30px" /></div>
          <Freecontent get_free_number={get_free_number} information={information} />
        </div>
      </>
    );
  };

  return (
    <>
      { write_toggle == false ?
        <div className="notice-form">

          {modalOn ? <Modal /> : ''}

          <div className="topcontent-form">
            <h1> 자주 묻는 질문 </h1>
            <p> 찾는 내용이 없으시다면 고객센터를 방문해바라 이 말이다</p>
          </div>

          <div className="middle-content-form">
            <div className="middle-content-form-left">왼쪽 </div>
            <div className="middle-content-form-right">
              <div className="right-img-box">
                <img className="email_img" src={email_img} width="50" height="50" ></img>
              </div>
              <div className="right-text-box">
                <h3> 이메일 문의하기</h3>
                <p> 찾으시는 답변이 없으신가요 ? </p>
              </div>
              <div className="right-btn-box">
                <button className="send-btn" onClick={() => window.open("mailto:ds4ouj@gmail.com", '_blank')}>E-mail 보내기 </button>
              </div>
            </div>
          </div>

          <div className="subcontent-form">
            <div className="notice-nav-form">
              <div className="notice-nav">
                <div role="button" className="noticeboard-select-btn" onClick={Func_noticepage_toggle_noticeboard}>Notice</div>
                <div role="button" className="freeboard-select-btn selectedboard-btn" onClick={Func_noticepage_toggle_freeboard}>BulletinBoard</div>
              </div>
              <div className="search_box">
                <input className="search"></input>
              </div>
            </div>
            <div className="maincontent-form">

              {page == 'notice' ? <Noticeboard /> : ''}

              <div className="allcontent-block">
                {page == 'free' ? <Freeboard setModalOn={setModalOn} set_get_free_number={set_get_free_number} information={information} /> : ''}
              </div>

            </div>
          </div>

          {information != undefined ? <button className="move_writeform_btn" onClick={Write_open}>게시글 작성하기</button> : ''}

        </div>
        : <Write_form set_write_toggle={set_write_toggle} page={page} information={information} />}
    </>
  );
}

export default App;
