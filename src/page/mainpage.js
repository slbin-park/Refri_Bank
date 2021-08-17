import React, { useState, useEffect } from 'react';
//이거 대문자로 해야함!!
import Body from '../components/mainpage/body';
import MainFooter from '../components/mainpage/footer';
import Footer_bottom from '../components/mainpage/footer-bottom';
import Alert from './alert';

const App = ({ history }) => {
  // 히스토리를 받았어 (프롭스로)
  const [ftable, setftable] = useState();
  const [ftable_cnt, setftable_cnt] = useState();
  const [page_slice, set_page_slice] = useState({ start: 0, end: 16 });

  return (
    <>
      <div className="body-top-form">
        <Body setftable_cnt={setftable_cnt} setftable={setftable} />
      </div>
      <div className="body-bottom-form">
        <MainFooter setftable={setftable} ftable={ftable} history={history} setftable_cnt={setftable_cnt} page_slice={page_slice} aside_check={true} />
      </div>
      <div className="move-footer-form">
        <div style={{ width: '100%', height: '80%', 'margin-top': '5%', 'margin-bottom': '5%', display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
          <div className="like_select_num_btn_form">{ftable && <Footer_bottom set_page_slice={set_page_slice} ftable_cnt={ftable_cnt} />}</div>
        </div>
      </div>
    </>
  );
};

export default App;
