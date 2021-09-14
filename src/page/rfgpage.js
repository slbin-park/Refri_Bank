import Func_filter_find_ingredient from '../components/rfgpage/filter';
import Footer from '../components/mainpage/footer';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Footer_bottom from '../components/mainpage/footer-bottom';
import '../style/mypage/index.css';
import '../style/mypage/likeit.css';

// import SearchResult from '../components/SearchResult';

function App({ history, information }) {
  const [toggle, settoggle] = useState(false);
  const [thumb_table, set_thumb_table] = useState();
  const [result_box_list, setresult_box_list] = useState([]);
  const [random_select, set_random_select] = useState([]);
  const [page_slice, set_page_slice] = useState({ start: 0, end: 8 });
  // page_slice - > 이거는 한페이지에서 자르는 개수를 정하는 변수

  const [ftable_cnt, set_ftable_cnt] = useState();
  //ftable_cnt 버튼의 개수

  useEffect(() => {
    if (random_select.length != 0) {
      Axios.post('https://qkrtmfqls.gabia.io/getidgrc', {
        igd: random_select[0],
      })
        .then((response) => {
          console.log(response.data);
          set_thumb_table(response.data);
          set_ftable_cnt(response.data.length / 8);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [random_select]);

  useEffect(async () => {
    if (information !== undefined) {
      get_rcp_rfg();
    }
  }, [information]);

  const get_rcp_rfg = async () => {
    await Axios.post('https://qkrtmfqls.gabia.io/getrfg', {
      id: information.id,
    })
      .then((response) => {
        console.log(response);
        let res_igdname = response.data[0].Igdname.split(',');
        let res_eprname = response.data[0].Eprdate.split(',');
        let new_igdname = [];
        const random_select1 = [];
        res_igdname &&
          res_igdname.map((v, index) => {
            if (v !== '') {
              new_igdname.push({ result_igdname: v, eprd: res_eprname[index] });
              random_select1.push(v);
            }
          });
        setresult_box_list(new_igdname);
        random_select1.sort(() => Math.random() - 0.5);
        console.log(random_select1[0]);
        set_random_select(random_select1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Func_show_ingredient = () => {
    return (
      <div className="rfg-body-form" style={toggle === true ? { height: '80vh' } : { height: '0vh' }}>
        <Func_filter_find_ingredient
          get_rcp_rfg={get_rcp_rfg}
          information={information}
          result_box_list={result_box_list}
          setresult_box_list={setresult_box_list}
        ></Func_filter_find_ingredient>
      </div>
    );
  };

  return (
    <>
      <div className="hello-rfg-form">
        <h1> 나만의 냉장고 </h1>
        <p> 재료 관리 서비스를 마음껏 이용해 보세요! </p>
      </div>
      <div className="rfg-form">
        <div
          className="rfg-select-btn"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <div className="ingredient-toggle-btn">{toggle ? '그만 담고 검색하기' : '내 냉장고에 재료 추가하기'}</div>
        </div>
        {Func_show_ingredient()}
      </div>
      <div className="rfg-recommend-text-box">
        <h2>추천 레시피</h2>
      </div>
      <div className="fg-result-box">
        <Footer ftable={thumb_table} history={history} page_slice={page_slice} aside_check={false} />
      </div>
      <div className="move-footer-form">
        <div
          style={{
            width: '100%',
            height: '80%',
            display: 'flex',
            'margin-top': '3%',
            'margin-bottom': '3%',
            'justify-content': 'center',
            'align-items': 'center',
          }}
        >
          <div className="like_select_num_btn_form">{ftable_cnt && <Footer_bottom set_page_slice={set_page_slice} ftable_cnt={ftable_cnt} />}</div>
        </div>
      </div>
    </>
  );
}

export default App;
