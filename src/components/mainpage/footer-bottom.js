import React, { useState, useEffect } from 'react';
import '../../style/mainpage/aside/aside.css';
import '../../style/mypage/index.css';
import '../../style/mypage/likeit.css';
import arrow_left from '../../img/board/arrow_left.png';
import arrow_right from '../../img/board/arrow_right.png';

const Footer_bottom = ({ ftable_cnt, set_page_slice }) => {
  // console.log("ftable data", ftable.length/16);
  console.log('ftable_cnt', ftable_cnt);
  const [page_color, set_page_color] = useState(0);
  const [arrow_page, set_arrow_page] = useState(0);
  // - > 버튼이 한화면에 10개 들어가잖아
  // 오른쪽인든 왼쪽이든 누르면
  // 오른쪽을 누르면 arrow_page가 +1 이 되잖아
  // arrouw_page = 1
  const Func_click_page_slice_btn = (i) => {
    set_page_slice({ start: i * 8, end: (i + 1) * 8 });
    // 16개씩 짤라서 페이지 슬라이스 , 16개 -> 페이지 1 (i)
    set_page_color(i);
  };

  useEffect(() => {
    set_arrow_page(0);
    set_page_slice({ start: 0, end: 8 });
    set_page_color(0);
  }, [ftable_cnt]);
  // page 이동 되면 디폴트로 start:0, end:16 => 처음 화면

  useEffect(() => {
    set_arrow_page(0);
    set_page_slice({ start: 0, end: 8 });
    set_page_color(0);
  }, [ftable_cnt]);
  // page 이동 되면 디폴트로 start:0, end:16 => 처음 화면

  useEffect(() => {
    console.log('page', page_color);
    create_button();
  }, [page_color]);

  const create_button = () => {
    let table_button = [];
    // console.log('실행')
    for (let i = arrow_page * 10; i < arrow_page * 10 + 10; i++) {
      // 10페이지씩 짤라
      if (i > ftable_cnt) break;
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
    <>
      {arrow_page > 0 ? (
        <div className="like_select_num_btn_left" onClick={(e) => Func_paging_minus(e)}>
          <img src={arrow_left} width="11px" height="12px" />
        </div>
      ) : (
        ''
      )}
      {ftable_cnt && create_button()}

      {(arrow_page + 1) * 10 < ftable_cnt ? (
        <div className="like_select_num_btn_right" onClick={(e) => Func_paging_plus(e)}>
          <img src={arrow_right} width="11px" height="12px" />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Footer_bottom;
