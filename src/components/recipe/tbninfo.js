import '../../style/recipe/recipe.css';
import React, { useState, useEffect } from 'react';
import like from '../../img/recipe/like.jpg';
import time from '../../img/recipe/time.jpg';
import kcal from '../../img/recipe/kcal.jpg';
import Alert from '../../page/alert';
import Axios from 'axios';

function thumbnail_info({ data, information }) {
  //foodid 는 axios요청할때 푸드아이디
  //like 는 좋아요를 안눌렀을떄

  const set_show_recipe_igdcnt = () => {
    const igdcnt_list = [];
    let indexKey = 0;
    for (let key in data[0]) {
      if (key.includes('IgdN') && data[0][key] != null) {
        indexKey += 1;
        igdcnt_list.push(
          <div key={indexKey} className="recipe-thumbnail-ingredient-ul">
            <div className="recipe-thumbnail-ingredient-li">
              0{indexKey}.<div className="recipe-thunmbnail-ingredient-name">{data[0][key]}</div>
            </div>
          </div>,
        );
      }
    }
    return igdcnt_list;
  };
  const Func_this_likeit_plus = () => {
    if (information == undefined) {
      Alert('Recipe', '로그인 후 이용할 수있습니다.');
    } else {
      Axios.post('https://qkrtmfqls.gabia.io/addlike', {
        id: data[0].FoodId,
        userid: information.id,
        foodname: data[0].FoodN,
      })
        .then((response) => {
          if (response.data.success) {
            Alert('좋아요', '좋아요를 누르셨습니다.')
          }
          else {
            Alert('좋아요', '좋아요를 이미 누르셨습니다.')
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const set_show_time_kcal = () => {
    return (
      <>
        {data[0].FoodT !== '' ? (
          <div className="recipe-thumbnail-icon-content">
            <div className="recipe-thumbnail-icon-img-form">
              <div className="recipe-thumbnail-icon-time-like">
                <img className="recipe-thumbnail-icon-img" src={time}></img>
              </div>
            </div>
            <div className="recipe-thumbnail-icon-name-form">조리 시간</div>
            <div className="recipe-thumbnail-icon-content-form">{data[0].FoodT}</div>
          </div>
        ) : (
          ''
        )}
        {data[0].FoodC !== '' ? (
          <div className="recipe-thumbnail-icon-content">
            <div className="recipe-thumbnail-icon-img-form">
              <div className="recipe-thumbnail-icon-kcal">
                <img className="recipe-thumbnail-icon-img" src={kcal}></img>
              </div>
            </div>
            <div className="recipe-thumbnail-icon-name-form">열량</div>

            <div className="recipe-thumbnail-icon-content-form">{data[0].FoodC}</div>
          </div>
        ) : (
          ''
        )}
        <div className="recipe-thumbnail-icon-content" onClick={(e) => Func_this_likeit_plus()}>
          <div className="recipe-thumbnail-icon-img-form">
            <div className="recipe-thumbnail-icon-time-like">
              <img className="recipe-thumbnail-icon-img" src={like}></img>
            </div>
          </div>
          <div className="recipe-thumbnail-icon-name-form">좋아요</div>

          <div className="recipe-thumbnail-icon-content-form">{data[0].likeit}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="recipe-body-form">
        <div className="recipe-body-sub-form">
          <div className="recipe-thumbnail-title-form">
            <p>{data[0].FoodN}</p>
          </div>
          <div className="recipe-thumbnail-info-form">
            <div className="recipe-thumbnail-img-main-form">
              <div className="recipe-thumbnail-img-sub-form">
                <img className="recipe-thumbnail-img-content" src={data[0].FoodV}></img>
              </div>
            </div>
            <div className="recipe-thumbnail-text-main-form">
              <div className="recipe-thumbnail-text-top">
                <p>준비물</p>
              </div>
              <div className="recipe-thumbnail-ingredient">{set_show_recipe_igdcnt()}</div>
              <div className="recipe-thumbnail-icon-form">{set_show_time_kcal()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default thumbnail_info;
