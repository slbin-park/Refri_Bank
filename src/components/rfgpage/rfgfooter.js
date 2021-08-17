import React, { useState, useEffect } from "react";
import Axios from 'axios';

import '../../style/mainpage/footer/footer.css';
import "../../style/mainpage/aside/aside.css";


function Footer({ ftable, history, setftable_cnt, page_slice, setftable }) {
  const [recommand_onoff_btn, setrecommand_onoff_btn] = useState(false);
  const [livetable, setlivetable] = useState();

  useEffect(() => {
    Axios.post("https://qkrtmfqls.gabia.io/liverank", {})
      .then((response) => {
        let new_arr = response.data.slice();
        new_arr.sort(function (a, b) {
          return a.likeit - b.likeit;
        })
        setftable(new_arr);
        setlivetable(response.data);
        setftable_cnt(response.data.length / 16);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const Func_recommand_onoff_btn = (e) => {
    setrecommand_onoff_btn(!recommand_onoff_btn)
  }

  const Show = () => {
    let psum_li = [];
    let four_li = [];
    // console.log(ftable);
    {
      ftable && ftable.slice(page_slice.start, page_slice.end).map(({ FoodId, FoodV, FoodN, FoodT, FoodC }, index) => {
        four_li.push(
          <div key={FoodId} className="footer_block" onClick={() => history.push("/recipe/" + FoodId)}>
            <div className="footer_food">
              <img className="footer_food_img" src={FoodV} />
            </div>
            <div className="footer_text">
              <p className="footer_text_style1"> {FoodN} </p>
              <p className="footer_text_style2">
                {' '}
                {FoodC && FoodC.includes('.') ? (FoodC.includes('kcal') ? FoodC : FoodC + 'l') : ''}{' '}
                <br />
              </p>
              <p className="footer_text_style3"> {FoodT} </p>
            </div>
          </div>
        );
        if ((index + 1) / 4 >= 1 && (index + 1) % 4 == 0) {
          psum_li.push(
            <div className="food_four_box">
              {four_li}
            </div>
          );
          four_li = [];
        }
      })
    }
    return psum_li;
  }

  return (
    <>
      <div className="footer-form">

        <div className="food_big_block">
          <Show />
          {/*  footer_block 하나가 음식 박스 한개  */}
        </div>

      </div>

    </>
  )
}

export default Footer