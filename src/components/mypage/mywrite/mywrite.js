import React, { useState, useEffect } from 'react';
import '../../../style/mypage/index.css';
import '../../../style/mypage/mypage.css';
import '../../../style/mypage/likeit.css';
import arrow_left from '../../../img/board/arrow_left.png'
import arrow_right from '../../../img/board/arrow_right.png'
import xbuttom from '../../../img/board/xbutton.jpg';
import Open_modal from './mywritecontent';
import Axios from 'axios';
import Alert from '../../../page/alert';
import Mywritetable from './mywritetable';

function Mywrite({ information, history }) {
  const [modalOn, setModalOn] = useState(false);
  const [get_table_number, set_table_number] = useState();
  const [get_modal_table, set_modal_table] = useState();
  const [mywrite_table, set_mywrite_table] = useState();

  // 페이지 버튼
  const [page_color, set_page_color] = useState(0);
  const [arrow_page, set_arrow_page] = useState(0);
  const [mywrite_page_slice, set_mywrite_page_slice] = useState({ start: 0, end: 10 });
  const [mywrite_table_cnt, set_mywrite_table_cnt] = useState();

  useEffect(() => {
    if (get_modal_table != undefined) {
      setModalOn(!modalOn);
    }
  }, [get_modal_table]);

  const onCloseModal = () => {
    setModalOn(false);
  };

  const Modal = () => {
    return (
      <>
        {
          <div className="modal" data-aos="zoom-in">
            <div className="closebtnbox">
              <img className="closebtn" role="button" src={xbuttom} onClick={onCloseModal} width="30px" height="30px" />
            </div>
            <Open_modal get_table_number={get_table_number} get_modal_table={get_modal_table[0]} information={information} />
          </div>
        }
      </>
    );
  };

  useEffect(() => {
    if (information !== undefined) {
      Axios.post('https://qkrtmfqls.gabia.io/getmyboard/', {
        id: information.id,
      })
        .then((response) => {
          set_mywrite_table(response.data);
          set_mywrite_table_cnt(response.data.length / 10);
        })
        .catch((error) => {
          console.log('reply', error);
        });
    }
  }, [information]);

  const get_my_table = async () => {
    if (information !== undefined) {
      Axios.post('https://qkrtmfqls.gabia.io/getmyboard/', {
        id: information.id,
      })
        .then((response) => {
          set_mywrite_table(response.data);
          set_mywrite_table_cnt(response.data.length / 10);
        })
        .catch((error) => {
          console.log('reply', error);
        });
    }
  };
  // 페이지 버튼w
  const Func_click_page_slice_btn = (i) => {
    set_mywrite_page_slice({ start: i * 10, end: (i + 1) * 10 });
    set_page_color(i);
  };

  useEffect(() => {
    set_arrow_page(0);
    set_mywrite_page_slice({ start: 0, end: 10 });
    set_page_color(0);
  }, [mywrite_table_cnt]);

  useEffect(() => {
    create_button();
  }, [page_color]);

  const create_button = () => {
    let table_button = [];
    for (let i = arrow_page * 10; i < arrow_page * 10 + 10; i++) {
      // 10페이지씩 짤라
      if (i > mywrite_table_cnt) break;

      table_button.push(
        <div
          onClick={(e) => Func_click_page_slice_btn(i)}
          style={page_color == i ? { color: 'rgba(1, 1, 1, 0.8)' } : { color: 'rgba(1, 1, 1, 0.4)' }}
          className="like_select_num_btn_sub_form"
        >
          {i + 1}
        </div>,
      );
    }
    return table_button;
  };

  const Func_paging_minus = (e) => {
    e.preventDefault();
    set_arrow_page(arrow_page - 1);
  };
  const Func_paging_plus = (e) => {
    e.preventDefault();
    set_arrow_page(arrow_page + 1);
  };

  return (
    <div className="mypage_main">
      <div className="mypage_main_div">
        <div className="likeit_body">
          {modalOn ? <Modal /> : ''}
          <div className="likeit_header_main_form">
            <div className="likeit_header_title_form">
              <h2>내가 작성한 게시글</h2>
            </div>
            <div className="likeit_header_sub_form">
              <h4>오늘도 게시글을 남겨보세요</h4>
            </div>
          </div>
          <div className="likeit_content">
            <div className="body_header_main_form">
              <div className="body_header_sub_form">
                <div className="mywrite_no">No</div>
                <div className="mywrite_title">제목</div>
                {/* mywrite_date만 css 공유 안함 */}
                <div className="mywrite_date">등록일</div>
                <div className="mywrite_cancel">취소</div>
              </div>
            </div>
            <div className="body_main_form">
              {mywrite_table && (
                <Mywritetable
                  get_my_table={get_my_table}
                  set_table_number={set_table_number}
                  set_modal_table={set_modal_table}
                  mywrite_table={mywrite_table}
                  mywrite_page_slice={mywrite_page_slice}
                ></Mywritetable>
              )}
            </div>
            <div className="likeit_bottom_box">
              {arrow_page > 0 ? (
                <div className="like_select_num_btn_left" onClick={(e) => Func_paging_minus(e)}>
                  <img src={arrow_left} width="11px" height="12px" />
                </div>
              ) : (
                ''
              )}
              {mywrite_table_cnt && create_button()}

              {(arrow_page + 1) * 10 < mywrite_table_cnt ? (
                <div className="like_select_num_btn_right" onClick={(e) => Func_paging_plus(e)}>
                  <img src={arrow_right} width="11px" height="12px" />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mywrite;
