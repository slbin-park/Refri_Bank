import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css';
import '../../../style/mypage/myigd/igdmanage.css';
import '../../../style/mypage/mypage.css';
import Dairy from '../../../img/ingredient_img/dairyproduct-g.png';
import Func_idg_info from './igdinfo'
import Axios from 'axios';

function Idgmanage({ information, history }) {
    //이거머임 좋아요한 레시피개수?
    console.log(123);
    const igd_key_value = ['닭', '오리', '돼지', '소', '소세지', '양파', '당근', '마늘', '버섯', '부추', '고추', '파', '상추', '토마토', '새우', '고등어', '게', '전복', '조개', '바지락', '홍합', '오징어', '생선', '멸치', '간장', '된장', '고추장', '쌈장', '참기름', '깨', '가루', '면', '밀가루', '밥', '계란', '우유', '치즈', '요거트'];
    const [igd_info, setigd_info] = useState();

    useEffect(() => {
        Func_req_idginfo();
    }, []);

    const Func_req_idginfo = async (e) => {
        if (information != undefined) {
            await Axios.post("https://qkrtmfqls.gabia.io/getrfg", {
                id: information.id
            })
                .then((response) => {
                    let res_igdname = response.data[0].Igdname.split(",");
                    let res_eprname = response.data[0].Eprdate.split(",");
                    let new_igdname = [];
                    res_igdname && res_igdname.map((v, index) => v !== '' ? new_igdname.push({ result_igdname: v, eprd: res_eprname[index] }) : 0);
                    setigd_info(new_igdname);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className='igd_main_div'>
            <div className='igd_title_div'>
                <div style={{ 'font-size': '5vh' }}> 재료관리</div>
                <br />
                   리프레 뱅크 재료 관리 서비스를 마음껏 이용해보세요.<br />
            </div>
            <div className='igd_content_div'>

                <div className='igd_body_div'>
                    <div className='igd_left_box'>
                        {/* 위에2개 시작 */}
                        <div className='igd_box_left_top_1'>
                            <div className='igd_box_1'>
                                <div className='igd_box_1_content'>
                                    <img className='igd_box_img' src={Dairy}></img>
                                    <br />
                        햄버거<br />
                        21-08-30<br />
                        d-15<br />
                                </div>
                            </div>

                            <div className='igd_box_1'>
                                <div className='igd_box_1_content'>

                                    <img className='igd_box_img' src={Dairy}></img>

                                    <br />
                        햄버거<br />
                        21-08-30<br />
                        d-15<br />
                                </div>
                            </div>
                        </div>
                        {/* 위에2개 끝 */}
                        {/* 오른쪽 첫번째 끝 */}


                        <div className='igd_box_right_top_1'>
                            <div className='igd_box_2_all'>
                                <div className='igd_box_2'>

                                    <div className='igd_box_top1_img'>
                                        <div >
                                            <img className='igd_box_img' src={Dairy}></img>
                                            <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                        </div>
                                    </div>
                                    <div className='igd_box_top1_img'>
                                        <div >

                                            <img className='igd_box_img' src={Dairy}></img>
                                            <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 오른쪽 첫번째 끝 */}





                        {/* 위에2개 시작 */}
                        <div className='igd_box_left_top_1'>
                            <div className='igd_box_1_cover'>
                                <div className='igd_box_1'>

                                    <div className='igd_box_1_content'>
                                        <div className="igd_box_img_form">
                                            <img className='igd_box_img' src={Dairy}></img>
                                        </div>
                                    </div>
                                    <div style={{ height: '20%', 'font-size': '20%' }}>
                                        <br />
                        햄버거<br />
                        21-08-30<br />
                        d-15<br />
                                    </div>
                                </div>

                                <div className='igd_box_1'>
                                    <div className='igd_box_1_content'>

                                        <img className='igd_box_img' src={Dairy}></img>

                                        <br />
                        햄버거<br />
                        21-08-30<br />
                        d-15<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 위에2개 끝 */}




                        {/* 위에2개 시작 */}
                        <div className='igd_box_left_top_1'>
                            <div className='igd_box_1'>
                                <div className='igd_box_1_content'>
                                    <img className='igd_box_img' src={Dairy}></img>
                                    <br />
                        햄버거<br />
                        21-08-30<br />
                        d-15<br />
                                </div>
                                {/* 오른쪽 첫번째 끝 */}                         {/* 오른쪽 첫번째 끝 */}


                                <div className='igd_box_right_top_1'>
                                    <div className='igd_box_2_all'>
                                        <div className='igd_box_2'>

                                            <div className='igd_box_top1_img'>
                                                <div >
                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                                    햄버거<br />
                                                    21-08-30<br />
                                                    d-15<br />
                                                </div>
                                            </div>
                                            <div className='igd_box_top1_img'>
                                                <div >

                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                                    햄버거<br />
                                                    21-08-30<br />
                                                    d-15<br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 오른쪽 첫번째 끝 */}


                            </div>

                            <div className='igd_right_box'>
                                {/* 오른쪽 첫번째 끝 */}


                                <div className='igd_box_right_top_1'>
                                    <div className='igd_box_2_all'>
                                        <div className='igd_box_2'>

                                            <div className='igd_box_top1_img'>
                                                <div >
                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                                </div>
                                            </div>
                                            <div className='igd_box_top1_img'>
                                                <div >

                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 오른쪽 첫번째 끝 */}                         {/* 오른쪽 첫번째 끝 */}


                                <div className='igd_box_right_top_1'>
                                    <div className='igd_box_2_all'>
                                        <div className='igd_box_2'>

                                            <div className='igd_box_top1_img'>
                                                <div >
                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                                </div>
                                            </div>
                                            <div className='igd_box_top1_img'>
                                                <div >

                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 오른쪽 첫번째 끝 */}                         {/* 오른쪽 첫번째 끝 */}


                                <div className='igd_box_right_top_1'>
                                    <div className='igd_box_2_all'>
                                        <div className='igd_box_2'>

                                            <div className='igd_box_top1_img'>
                                                <div >
                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                                </div>
                                            </div>
                                            <div className='igd_box_top1_img'>
                                                <div >

                                                    <img className='igd_box_img' src={Dairy}></img>
                                                    <br />
                                햄버거<br />
                                21-08-30<br />
                                d-15<br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 오른쪽 첫번째 끝 */}


                                {/* {igd_info && <Func_idg_info igd_info={igd_info}/>} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default React.memo(Idgmanage);
