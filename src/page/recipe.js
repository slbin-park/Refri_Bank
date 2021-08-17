import React, { useState, useEffect } from 'react';
import Thumbnail_info from '../components/recipe/tbninfo';
import AliceCarousel from 'react-alice-carousel';
import '../style/recipe/recipe.css';

//이거 대문자로 해야함!!
import Axios from 'axios';

const App = ({ location, information }) => {
  const foodid = location.pathname.split('pe/')[1];
  const [data, setdata] = useState([]);

  useEffect(() => {
    Axios.post('https://qkrtmfqls.gabia.io/getrcp/' + foodid, {
      id: foodid,
    })
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [information]);

  const create_table = () => {
    let count = 0;
    // arr 배열에 RcpI와 RcpT를 함께 담아서 return 하기 때문에 랜더링을 한번만 수행하도록 하는 역할
    // RcpI를 data 배열의 키로 검색. RcpI가 존재한다면 같은 index의 RcpT를 배열에 담는 for문 수행
    let arr = [];
    for (let key in data[0]) {
      count += 1;
      if (key.includes('RcpI') && data[0][key] !== null) {
        arr.push(
          <>
            <div className="alice-content-main-form">
              <div className="alice-content-sub-form">
                <div className="alice-content-img-form">
                  <div className="alice-content-img-flex">
                    <img src={data[0][key]} className="alice-content-img" />
                  </div>
                </div>
                <div className="alice-content-text-form">
                  <p>{data[0][key.replace('I', 'T')]}</p>
                </div>
              </div>
            </div>
          </>,
        );
      }
    }
    return arr;
  };

  return (
    <div className="recipe_page_body_form">
      {data != '' ? <Thumbnail_info information={information} data={data}></Thumbnail_info> : ''}
      <div className="recipe-info-main-title">Image & description of additional recipes</div>
      {/* set_show_img_text는 data에 들어있는 레시피 image와 텍스트를 모두 불러오는 함수 */}
      <div className="alice-main-form">
        <AliceCarousel>{create_table()}</AliceCarousel>
      </div>
    </div>
  );
};

export default App;
