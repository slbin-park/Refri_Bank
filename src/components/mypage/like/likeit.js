import React, { useState, useEffect } from 'react';
import '../../../style/mypage/index.css';
import '../../../style/mypage/mypage.css';
import '../../../style/mypage/likeit.css';
import arrow_left from '../../../img/board/arrow_left.png'
import arrow_right from '../../../img/board/arrow_right.png'
import Liketable from './liketable';
import Axios from 'axios';
import Alert from '../../../page/alert';

function Likeit({ history, information }) {
  const [like_table, set_like_table] = useState();
  const [page_color, set_page_color] = useState(0);
  const [arrow_page, set_arrow_page] = useState(0);
  const [like_page_slice, set_like_page_slice] = useState({ start: 0, end: 10 });
  const [like_table_cnt, set_like_table_cnt] = useState();

  const Func_click_page_slice_btn = (i) => {
    set_like_page_slice({ start: i * 10, end: (i + 1) * 10 });
    set_page_color(i);
  };

  useEffect(() => {
    information && get_likeit_table()
  }, [information])

  const get_likeit_table = () => {
    Axios.post('https://qkrtmfqls.gabia.io/likeitpage', {
      id: information.id,
    })
      .then((response) => {
        console.log('response.data', response.data);
        set_like_table(response.data);
        set_like_table_cnt(response.data.data.length / 10);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  // 페이지 버튼 함수

  useEffect(() => {
    set_arrow_page(0);
    set_like_page_slice({ start: 0, end: 10 });
    console.log('슬라이스 use effect', like_page_slice);
    set_page_color(0);
  }, [like_table_cnt]);

  useEffect(() => {
    console.log('page', page_color);
    create_button();
  }, [page_color]);

  const create_button = () => {
    console.log('실행');
    let table_button = [];
    // console.log('실행')
    for (let i = arrow_page * 10; i < arrow_page * 10 + 10; i++) {
      // 10페이지씩 짤라
      if (i > like_table_cnt) break;

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
          <div className="likeit_header_main_form">
            <div className="likeit_header_title_form">
              <h2>좋아요 레시피</h2>
            </div>
            <div className="likeit_header_sub_form">
              <p>내가 좋아하는 레시피를 한눈에 알아보기</p>
            </div>
          </div>
          <div className="likeit_content">
            <div className="body_header_main_form">
              <div className="body_header_sub_form">
                <div className="likeit_no">No</div>
                <div className="likeit_title">제목</div>
                <div className="likeit_cancel">취소</div>
              </div>
            </div>

            <div className="body_main_form">
              {like_table && <Liketable get_likeit_table={get_likeit_table} information={information} history={history} table={like_table} like_page_slice={like_page_slice}></Liketable>}
            </div>

            {/* <div
              style={{
                width: '100%',
                height: '80%',
                display: 'flex',
                'margin-top': '2%',
                'margin-bottom': '2%',
                'justify-content': 'center',
                'align-items': 'center',
              }}
            > */}
            <div className="likeit_bottom_box">
              {arrow_page > 0 ? (
                <div className="like_select_num_btn_left" onClick={(e) => Func_paging_minus(e)}>
                  <img src={arrow_left} width="11px" height="12px" />
                </div>
              ) : (
                ''
              )}
              {like_table_cnt && create_button()}

              {(arrow_page + 1) * 10 < like_table_cnt ? (
                <div className="like_select_num_btn_right" onClick={(e) => Func_paging_plus(e)}>
                  <img src={arrow_right} width="11px" height="12px" />
                </div>
              ) : (
                ''
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Likeit;
