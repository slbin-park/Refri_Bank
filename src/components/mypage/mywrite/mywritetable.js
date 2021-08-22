import React, { useState, useEffect } from 'react';
import '../../../style/mypage/index.css';
import '../../../style/mypage/likeit.css';
import Alert from '../../../page/alert';
import Axios from 'axios';
function Mywritetable({ get_my_table, mywrite_table, set_table_number, set_modal_table, mywrite_page_slice }) {
  const return_mywrite_table = () => {
    const arr = [];
    mywrite_table && mywrite_table.slice(mywrite_page_slice.start, mywrite_page_slice.end).map((v) => arr.push(<Create_mywrite_table user={v} />));
    return <>{mywrite_table && arr}</>;
  };

  const get_table = (number) => {
    set_table_number(number);
    Axios.post('https://qkrtmfqls.gabia.io/free' + number, {})
      .then((response) => {
        set_modal_table(response.data);
      })
      .catch((error) => {
        console.log('reply', error);
      });
  };

  const Create_mywrite_table = ({ user }) => {
    const show_mywrite = (number) => {
      get_table(number);
    };

    //게시글 삭제버튼 시작
    const Func_this_delete_content = (e, number) => {
      e.preventDefault();
      Axios.post('https://qkrtmfqls.gabia.io/deletefree/' + number, {})
        .then((response) => {
          get_my_table();
          Alert('Mypage', '게시글 삭제에 성공하셨습니다!');
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="body_sub_form">
        <div /*key={}*/ className="likeit_content_one">
          <div className="mywrite_no">{user.number}</div>
          <div onClick={() => show_mywrite(user.number)} className="mywrite_title_content">
            {user.title}
          </div>
          <div className="mywrite_date">{user.created}</div>
          <div className="mywrite_cancel" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className="likeit_cancel_btn" onClick={(e) => Func_this_delete_content(e, user.number)}>
              취소
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <>{return_mywrite_table()}</>;
}

export default React.memo(Mywritetable);
