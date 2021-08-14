import React, { useState, useEffect } from "react";
import '../../style/noticepage/noticepage.css';
// import notice from '../../img/category_notice_img/notice_img.jpg';
import xbuttom from '../../img/board/xbutton.jpg';
import email from '../../img/board/email.png';

import Func_noticeboard_show_noticeboard from '../../components/noticepage/noticeboard';
import Func_freeboard_show_freeboard from '../../components/noticepage/freeboard';
import Func_freecontent_show_freecontent from '../../components/noticepage/freecontent';
import Axios from "axios";
import 'aos/dist/aos.css';

function App({ history, information }) {

  const [page, setpage] = useState('free');
  const [notice_table, set_notice_table] = useState();
  const [free_table, set_free_table] = useState();


  const [get_free_number, set_get_free_number] = useState();
  const [reply_table, set_reply_table] = useState();



  const [modalOn, setModalOn] = useState(false);


  useEffect(() => {
    get_free_table()
  }, [])

  const get_free_table = async () => {
    await Axios.post("http://qkrtmfqls.gabia.io/getfree", {
    })
      .then((response) => {
        set_free_table(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    setModalOn(true);
  }, [reply_table])




  const Func_noticepage_move_writeform = (e) => {
    history.push('/writeform');
  }

  const Func_noticepage_toggle_noticeboard = () => {
    setpage('notice');
    document.querySelector('.noticeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.freeboard-select-btn').classList.remove('selectedboard-btn');
  }

  const Func_noticepage_toggle_freeboard = () => {
    setpage('free');
    document.querySelector('.freeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.noticeboard-select-btn').classList.remove('selectedboard-btn');
  }


  const onCloseModal = () => {
    setModalOn(!modalOn);
  }

  const Modal = () => {
    return (
      <>
        { reply_table &&
          <div className="modal" data-aos="zoom-in">
            <div className="closebtnbox"><img className="closebtn" role="button" src={xbuttom} onClick={onCloseModal} width="30px" height="30px" /></div>
            <Func_freecontent_show_freecontent set_reply_table={set_reply_table} get_free_number={get_free_number} information={information} reply_table={reply_table} />
          </div>}
      </>
    );
  };



  return (
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
            <img className="email_img" src={email} ></img>
          </div>
          <div className="right-text-box">
            <h3> 이메일 문의하기</h3>
            <p> 찾으시는 답변이 없으신가요 ? </p>
          </div>
          <div className="right-btn-box">
            <button className="send-btn">E-mail 보내기 </button>
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
          {page =='notice' ?   <Func_noticeboard_show_noticeboard notice_table={notice_table} history={history} /> : ''}
          <div className="allcontent-block">
            {page =='free' ?  free_table != undefined ? <Func_freeboard_show_freeboard set_reply_table={set_reply_table} set_free_table={set_get_free_number} free_table={free_table} information={information} /> : '' : ''}

          </div>
        </div>
      </div>
      {information && <button className="move_writeform_btn" onClick={Func_noticepage_move_writeform}>게시글 작성하기</button>}
    </div>
  );
}

export default App;
