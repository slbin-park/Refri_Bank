import React, { useState, useEffect } from 'react';
import '../../../style/mypage/index.css';
import '../../../style/mypage/myigd/igdmanage.css';
import '../../../style/mypage/mypage.css';
import Igd_button from './igdbutton';
import Dairy from '../../../img/ingredient_img/dairyproduct-g.png';
import ingredient_img from '../../../img/ingredient_img/ingredient-img';
import Func_idg_info from './igdinfo';
import Axios from 'axios';
import moment from 'moment';
import Alert from '../../../page/alert';

function Idgmanage({ information }) {
  const [igd_info, setigd_info] = useState();
  useEffect(() => {
    console.log('실행');
  });

  const [igd_slice, set_igd_slice] = useState({ start: 0 });
  const [igd_btn, set_igd_btn] = useState(1);

  useEffect(() => {
    if (information != undefined) {
      Func_req_idginfo();
    }
  }, [information]);

  // ingredient_img[igd_info.result_igdname] -> 이미지
  // igd_info.result_igdname // -> 이름
  // let eprd = String(igd_info.eprd) // - > 유통기한
  // let eprdate = moment(eprd, 'YY-MM-DD')
  // let eprddate = moment(new Date(), 'YY-MM-DD')
  // let last_date = eprdate.diff(eprddate, 'days') // - > 남은유통기한

  const Func_req_idginfo = async (e) => {
    await Axios.post('https://qkrtmfqls.gabia.io/getrfg', {
      id: information.id,
    })
      .then((response) => {
        let res_igdname = response.data[0].Igdname.split(',');
        let res_eprname = response.data[0].Eprdate.split(',');
        let new_igdname = [];
        res_igdname &&
          res_igdname.map((v, index) =>
            v !== ''
              ? new_igdname.push({
                result_igdname: v,
                eprd: res_eprname[index],
                eprd_remain: moment(res_eprname[index], 'YY-MM-DD').diff(moment(new Date(), 'YY-MM-DD'), 'days'),
              })
              : 0,
          );
        setigd_info(new_igdname);
        set_igd_btn(new_igdname.length / 18);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="igd_main_div">
      <div className="igd_title_div">
        <div className="igd_header_title_form"> 재료관리</div>
        <div className="igd_header_sub_form">레프리 뱅크에서 내 재료와 유통기한을 확인하세요.</div>
      </div>
      <div className="igd_content_div">
        <div className="igd_body_color">
          <div className="igd_body_div">
            <div className="igd_left_box">
              <div className='igd_left_in_box' >
                {/* 위에2개 시작 */}
                <div className="igd_box_left_top_1">
                  <div className="igd_box_1_cover">
                    <div className="igd_box_1">
                      <div className="igd_box_1_content">
                        {igd_info && igd_info.length > igd_slice.start && igd_info != undefined ? (
                          <div className="igd_box_img_form">
                            <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start].result_igdname]}></img>
                            <br />
                            {igd_info[igd_slice.start].result_igdname}
                            <br />
                            {igd_info[igd_slice.start].eprd}
                            <br />D {igd_info[igd_slice.start].eprd_remain}
                            <br />
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>

                    <div className="igd_box_1">
                      <div className="igd_box_1_content">
                        {igd_info && igd_info.length > igd_slice.start + 1 && igd_info != undefined ? (
                          <div className="igd_box_img_form">
                            <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 1].result_igdname]}></img>
                            <br />
                            {igd_info[igd_slice.start + 1].result_igdname}
                            <br />
                            {igd_info[igd_slice.start + 1].eprd}
                            <br />D {igd_info[igd_slice.start + 1].eprd_remain}
                            <br />
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* 위에2개 끝 */}
              </div>

              {/* 오른쪽 첫번째 끝 */}

              <div className="igd_box_right_top_1">
                <div className="igd_box_2_all">
                  <div className="igd_box_2">
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 2 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 2].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 2].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 2].eprd}
                          <br />D {igd_info[igd_slice.start + 2].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 3 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 3].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 3].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 3].eprd}
                          <br />D {igd_info[igd_slice.start + 3].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 4 && igd_info != undefined ? (
                        <div className="igd_box_img_form">
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 4].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 4].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 4].eprd}
                          <br />D {igd_info[igd_slice.start + 4].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 오른쪽 첫번째 끝 */}

              {/* 위에2개 시작 */}
              <div>
                {/* 위에2개 시작 */}
                <div className='igd_left_in_box'>
                  <div className="igd_box_left_top_1">
                    <div className="igd_box_1_cover">
                      <div className="igd_box_1">
                        <div className="igd_box_1_content">
                          {igd_info && igd_info.length > igd_slice.start + 5 && igd_info != undefined ? (
                            <div className="igd_box_img_form">
                              <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 5].result_igdname]}></img>
                              <br />
                              {igd_info[igd_slice.start + 5].result_igdname}
                              <br />
                              {igd_info[igd_slice.start + 5].eprd}
                              <br />D {igd_info[igd_slice.start + 5].eprd_remain}
                              <br />
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>

                      <div className="igd_box_1">
                        <div className="igd_box_1_content">
                          {igd_info && igd_info.length > igd_slice.start + 6 && igd_info != undefined ? (
                            <div className="igd_box_img_form">
                              <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 6].result_igdname]}></img>
                              <br />
                              {igd_info[igd_slice.start + 6].result_igdname}
                              <br />
                              {igd_info[igd_slice.start + 6].eprd}
                              <br />D {igd_info[igd_slice.start + 6].eprd_remain}
                              <br />
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 위에2개 끝 */}

                {/* 위에2개 시작 */}
                <div className='igd_left_in_box'>
                  <div className="igd_box_left_top_1">
                    <div className="igd_box_1_cover">
                      <div className="igd_box_1">
                        <div className="igd_box_1_content">
                          {igd_info && igd_info.length > igd_slice.start + 7 && igd_info != undefined ? (
                            <div className="igd_box_img_form">
                              <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 7].result_igdname]}></img>
                              <br />
                              {igd_info[igd_slice.start + 7].result_igdname}
                              <br />
                              {igd_info[igd_slice.start + 7].eprd}
                              <br />D {igd_info[igd_slice.start + 7].eprd_remain}
                              <br />
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>

                      <div className="igd_box_1">
                        <div className="igd_box_1_content">
                          {igd_info && igd_info.length > igd_slice.start + 8 && igd_info != undefined ? (
                            <div className="igd_box_img_form">
                              <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 8].result_igdname]}></img>
                              <br />
                              {igd_info[igd_slice.start + 8].result_igdname}
                              <br />
                              {igd_info[igd_slice.start + 8].eprd}
                              <br />D {igd_info[igd_slice.start + 8].eprd_remain}
                              <br />
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 위에2개 끝 */}
              </div>
            </div>

            <div className="igd_right_box">
              {/* 오른쪽 첫번째 끝 */}
              <div className="igd_box_right_top_1">
                <div className="igd_box_2_all">
                  <div className="igd_box_2">
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 9 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 9].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 9].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 9].eprd}
                          <br />D {igd_info[igd_slice.start + 9].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 10 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 10].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 10].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 10].eprd}
                          <br />D {igd_info[igd_slice.start + 10].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 11 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 11].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 11].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 11].eprd}
                          <br />D {igd_info[igd_slice.start + 11].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 오른쪽 첫번째 끝 */} {/* 오른쪽 첫번째 끝 */}
              <div className="igd_box_right_top_1" >
                <div className="igd_box_2_all">
                  <div className="igd_box_2">
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 12 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 12].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 12].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 12].eprd}
                          <br />D {igd_info[igd_slice.start + 12].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 13 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 13].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 13].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 13].eprd}
                          <br />D {igd_info[igd_slice.start + 13].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 14 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 14].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 14].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 14].eprd}
                          <br />D {igd_info[igd_slice.start + 14].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 오른쪽 첫번째 끝 */} {/* 오른쪽 첫번째 끝 */}
              <div className="igd_box_right_top_1" >
                <div className="igd_box_2_all">
                  <div className="igd_box_2">
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 15 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 15].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 15].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 15].eprd}
                          <br />D {igd_info[igd_slice.start + 15].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 16 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 16].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 16].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 16].eprd}
                          <br />D {igd_info[igd_slice.start + 16].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="igd_box_top1_img">
                      {igd_info && igd_info.length > igd_slice.start + 17 && igd_info != undefined ? (
                        <div>
                          <img className="igd_box_img" src={ingredient_img[igd_info[igd_slice.start + 17].result_igdname]}></img>
                          <br />
                          {igd_info[igd_slice.start + 17].result_igdname}
                          <br />
                          {igd_info[igd_slice.start + 17].eprd}
                          <br />D {igd_info[igd_slice.start + 17].eprd_remain}
                          <br />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* 오른쪽 첫번째 끝 */}
              {/* {igd_info && <Func_idg_info igd_info={igd_info}/>} */}
            </div>
          </div>
          <div style={{ display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
            <div className="like_select_num_btn_form">{<Igd_button ftable_cnt={igd_btn} set_page_slice={set_igd_slice} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Idgmanage);
