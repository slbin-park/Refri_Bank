import React, { useState } from 'react';
import '../../style/mainpage/aside/aside.css';

const Aside = ({ livetable }) => {
  const [recommand_onoff_btn, setrecommand_onoff_btn] = useState(false);

  const Func_recommand_onoff_btn = (e) => {
    setrecommand_onoff_btn(!recommand_onoff_btn);
  };

  return (
    <>
      {/* <p className="hint_msg">3초간 눌러보세요!</p> */}
      <div className="Big">
        {/*  <> 이게 제일 큰 박스인데 지금 부모에서 aside-form 으로 픽스되어있음 */}

        <button className="recommand_onoff_btn" onClick={() => Func_recommand_onoff_btn()}>
          <div className="aside-top-box">
            <h4> 실시간 Top 10 </h4>
          </div>
        </button>
        <div className="aside-bottom-box">
          {livetable &&
            livetable.slice(0, 10).map(({ FoodN }, index) => {
              return (
                <div className="aside-food-block">
                  <div className="aside-food-num">{index + 1}</div>
                  <div className="aside-food-name">{FoodN}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Aside;
