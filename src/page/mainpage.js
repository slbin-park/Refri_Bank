import React, { useState, useEffect } from 'react';
//이거 대문자로 해야함!!
import Body from '../components/mainpage/body';
import Footer from '../components/mainpage/footer';
import Aside from '../components/mainpage/aside';
import Footer_bottom from '../components/mainpage/footer-bottom';
import Axios from 'axios';
import Alert from './alert';

const App = ({ history }) => {
  // 히스토리를 받았어 (프롭스로)
  const [text, settext] = useState('');
  const [ftable, setftable] = useState();
  const [livetable, setlivetable] = useState();
  const [ftable_cnt, setftable_cnt] = useState();
  const [page_slice, set_page_slice] = useState({ start: 0, end: 8 });

  useEffect(() => {
    Axios.post('https://qkrtmfqls.gabia.io/liverank', {})
      .then((response) => {
        // 처음에 로딩 될 때, 라이브랭크로 받아오는데 이게 지금 3천개 다 가져온거임
        // 굳이 이렇게 할 필요없다 이거야
        // 어차피 여기서 받아온거는
        // 왼쪽에 푸터(전부다 보여주던가, 16개로 한페이지만 보여주던가),
        // 오른쪽에 어사이드(10개)
        // 이게 끝이야 => 내 생각엔 그냥 처음에 좋아요 순으로 26개만 받아와
        // 그다음 왼쪽은 11번~26번 보여주고
        // 오른쪽은 1번~10번 ( 좋아요 최상위 10개 ) 보여주는것도 괜찮을거 같음

        // 이게 아니면 그냥 아예 랜덤으로 26개만 받아오던가

        // 여기서 우리가 고민 해야 할건
        // 1. 각각의 컴포넌트에서 포스트를 요청 => 2번 포스트
        // 2. 메인에서 포스트 한번만 하고 그걸 인자로 넘겨준다
        // 이 두개 중 뭐가 이득이냐, 이걸 생각해야함

        let new_arr = response.data.slice();
        new_arr.sort(function (a, b) {
          return a.likeit - b.likeit;
        });
        setftable(new_arr);
        setlivetable(response.data);
        setftable_cnt(response.data.length / 8);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  // 처음에 로딩 될 때 한번만 하면 되니까 useeffect로 한번만 해주면 됨

  const gettable = () => {
    if (text != '') {
      Axios.post('https://qkrtmfqls.gabia.io/gettable', {
        id: text,
      })
        .then((response) => {
          setftable(response.data);
          setftable_cnt(response.data.length / 8);
          // gettable => 검색 했을 때 테이블 불러오는거
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="body-top-form">
        <Body gettable={gettable} settext={settext} text={text} />
      </div>
      <div className="body-bottom-form">
        <div className="footer-form">
          <Footer ftable={ftable} history={history} page_slice={page_slice} />
        </div>
        <div className="aside-form">
          <Aside livetable={livetable} history={history} />
        </div>
      </div>
      <div className="move-footer-form">
        <div
          style={{
            width: '100%',
            height: '80%',
            display: 'flex',
            'margin-top': '2%',
            'margin-bottom': '2%',
            'justify-content': 'center',
            'align-items': 'center',
          }}
        >
          <div className="like_select_num_btn_form">
            {ftable && ( // 비동기 처리
              <Footer_bottom set_page_slice={set_page_slice} ftable_cnt={ftable_cnt} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
