import React, { useState, useEffect } from 'react';
import '../../style/noticepage/noticepage.css';
import 'aos/dist/aos.css';
import '../../style/mypage/likeit.css';

import email_img from '../../img/board/email.png';
import xbuttom from '../../img/board/xbutton.jpg';

import Noticeboard from '../../components/noticepage/noticeboard';
import Freeboard from '../../components/noticepage/freeboard';
import Freecontent from '../../components/noticepage/freecontent';
import Write_form from '../../components/noticepage/writeform';
import Notice_content from '../../components/noticepage/noticecontent';
import Page_button from '../../components/noticepage/pagebutton';

import Alert from '../alert';

function App({ information }) {
  const [page, setpage] = useState('free'); // 공지 , 자유게시판 구분용
  const [write_toggle, set_write_toggle] = useState(false); // 게시글 작성하기 위한 토글
  const [get_free_number, set_get_free_number] = useState(); // 게시판 고유 번호
  const [get_notice_number, set_notice_number] = useState();
  const [modalOn, setModalOn] = useState(false); // 모달창을 위한 토글
  const [button_cnt, set_button_cnt] = useState();
  const [page_slice, set_page_slice] = useState({ start: 0, end: 10 }); //페이징 버튼 시작 , 끝

  useEffect(() => {
    console.log(button_cnt);
  }, [button_cnt]);
  const Write_open = (e) => {
    if (page == 'notice') {
      if (information.id == 'smpts00' || information.id == '1') {
        set_write_toggle(!write_toggle);
      } else {
        Alert('Board', '관리자만 가능합니다.');
      }
    } else {
      set_write_toggle(!write_toggle);
    }
  };

  // 공지사항
  const Func_noticepage_toggle_noticeboard = () => {
    setpage('notice');
    document.querySelector('.noticeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.freeboard-select-btn').classList.remove('selectedboard-btn');
  };

  // 자유게시판
  const Func_noticepage_toggle_freeboard = () => {
    setpage('free');
    document.querySelector('.freeboard-select-btn').classList.add('selectedboard-btn');
    document.querySelector('.noticeboard-select-btn').classList.remove('selectedboard-btn');
  };

  const onCloseModal = () => {
    setModalOn(!modalOn);
  };

  const Modal = () => {
    return (
      <>
        <div className="modal" data-aos="zoom-in">
          <div className="closebtnbox">
            <img className="closebtn" role="button" src={xbuttom} onClick={onCloseModal} width="30px" height="30px" />
          </div>
          {page == 'free' ? (
            <Freecontent get_free_number={get_free_number} information={information} />
          ) : (
            <Notice_content get_notice_number={get_notice_number} />
          )}
        </div>
      </>
    );
  };

  return (
    <>
      {write_toggle == false ? (
        <div className="notice-form">
          {modalOn ? <Modal /> : ''}

          <div className="topcontent-form">
            <h1> 자주 묻는 질문 </h1>
            <p> 찾으시는 내용이 없다면 고객센터를 방문해주시길 바랍니다</p>
          </div>

          <div className="middle-flex-form">
            <div className="middle-content-form">
              {/* <div className="middle-content-form-left"></div> */}
              <div className="middle-content-form-right">
                <div className="right-img-box">
                  <img className="email_img" src={email_img} width="50px" height="50px"></img>
                </div>
                <div className="right-text-box">
                  <h3> 이메일 문의하기</h3>
                  <p> 찾으시는 답변이 없으신가요 ? </p>
                </div>
                <div className="right-btn-box">
                  <button className="send-btn" onClick={() => window.open('mailto:ds4ouj@gmail.com', '_blank')}>
                    E-mail 보내기{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="subcontent-form">
            <div className="notice-nav-flex-form">
              <div className="notice-nav-form">
                <div className="notice-nav">
                  <div role="button" className="noticeboard-select-btn" onClick={Func_noticepage_toggle_noticeboard}>
                    Notice
                  </div>
                  <div role="button" className="freeboard-select-btn selectedboard-btn" onClick={Func_noticepage_toggle_freeboard}>
                    BulletinBoard
                  </div>
                </div>
                <div className="search_box">
                  <input className="search"></input>
                </div>
              </div>
            </div>
            <div className="maincontent-form">
              {page == 'notice' ? (
                <Noticeboard page_slice={page_slice} set_button_cnt={set_button_cnt} setModalOn={setModalOn} set_notice_number={set_notice_number} />
              ) : (
                ''
              )}

              <div className="allcontent-block">
                {page == 'free' ? (
                  <Freeboard
                    page_slice={page_slice}
                    set_button_cnt={set_button_cnt}
                    setModalOn={setModalOn}
                    set_get_free_number={set_get_free_number}
                    information={information}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div style={{ width: '100%', height: '80%', display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
            <div className="like_select_num_btn_form">
              {page != undefined && button_cnt != undefined ? (
                <Page_button page={page} button_cnt={button_cnt} set_page_slice={set_page_slice} />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='write_board'>
            {information != undefined ? (
              <button className="move_writeform_btn" onClick={Write_open}>
                게시글 작성하기
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <Write_form set_write_toggle={set_write_toggle} page={page} information={information} />
      )}
    </>
  );
}

export default App;
