import '../../style/category/introduce.css';

import logo2 from '../../img/main_body_img/background_img.jpg'
import logo3 from '../../img/main_body_img/project_logo_img.png'
import logo4 from '../../img/main_body_img/123.png'
import react_img from '../../img/main_body_img/react.png'
import html_img from '../../img/main_body_img/html.png'
import css_img from '../../img/main_body_img/css.png'
import node_img from '../../img/main_body_img/node.png'
import mysql_img from '../../img/main_body_img/mysql.png'
import express_img from '../../img/main_body_img/express.png'
import move_top_btn from '../../img/main_body_img/move_top_btn.png'

const introduce = () => {
    return (
        <>
            <div className="introduce-big-box">
                <div className="introduce-top-box">
                    <div className="left-big-box">
                        <div className="left-first-box">
                            <div className="left-first-box-img-form">
                                <div className="left-first-box-img-content">
                                    <img src={logo4}></img>
                                </div>
                            </div>
                            <div className="left-first-box-text">
                                <h3> Refrigerator + Bank = Refri Bank </h3>
                            </div>
                        </div>

                        <div className="left-second-box">
                            <div className="front-end-box">
                                <div className="front-end-box-title-form">
                                    <div className="front-end-box-title">
                                        <li><ul> •Front-end</ul></li>
                                    </div>
                                </div>
                                <div className="front-end-box-icon-form">
                                    <div className="front-end-box-icon">
                                        <div className="front-end-box-icon-wrap">
                                            <img className="react-icon" src={react_img} ></img>
                                        </div>
                                        <div className="front-end-box-icon-wrap">
                                            <img src={html_img} ></img>
                                        </div>
                                        <div className="front-end-box-icon-wrap">
                                            <img src={css_img} ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="front-end-box">
                                <div className="front-end-box-title-form">
                                    <div className="front-end-box-title">
                                        <li><ul> •Back-end</ul></li>
                                    </div>
                                </div>
                                <div className="front-end-box-icon-form">
                                    <div className="back-end-box-icon">
                                        <div className="nodejs-icon-wrap">
                                            <img className="back-end-box-img" src={node_img} ></img>
                                        </div>

                                        <div className="mysql-icon-wrap">
                                            <img className="back-end-box-img" src={mysql_img} ></img>
                                        </div>

                                        <div className="express-icon-wrap">
                                            <img className="back-end-box-img" src={express_img}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-big-box">
                        <div className="hello-box">
                            <p>
                                <br></br>
                                <h2> Refri Bank 에 오신것을 환영합니다 : ) </h2> <br></br>
                                <br></br><br></br>
                                여러분의 냉장고는 현재 어떤 상태인가요? <br></br>
                                가지고 있는 식재료로 어떤 요리를 할지 고민이 되거나 또는 잊혀진 식재료가 있지는 않나요? <br></br>
                                <br></br><br></br>
                                이러한 고민을 가진 5명의 학생들이 제작한  Refri Bank는 <br></br>
                                냉장고를 의미하는 Refrigerator와 관리를 대신수행하는 Bank를 합친 단어입니다. <br></br>
                                <br></br><br></br>
                                처음엔 단순히 냉장고에 들어있는 식재료를 사용할 수있는 레시피 추천 서비스를 구상하였으나, <br></br>
                                추가적으로 저희가 가진 데이터를 이용하여 실시간 인기 레시피, 내가 등록한 식재료의 유통기한 <br></br>
                                알림 , 재료나 제목을 통한 레시피 검색기능, 자유게시판 등을 만들어 최대한 다양한 서비스를 <br></br>
                                제공할 수 있도록 제작하였습니다. <br></br>
                                <br></br><br></br>
                                어서 실시간으로 인기있는 레시피, 혹은 궁금한 레시피를 검색해보세요! <br></br>
                                만약 회원가입을 하시면 냉장고 페이지에서 식재료의 유통기한을 표시할 수있고, <br></br>
                                Refri Bank는 냉장고에 들어있는 식재료를 바탕으로 하여 추천 레시피를 제공해줍니다. <br></br>
                                또한 유통기한이 만료되었다는 알림도 제공받을 수있습니다! <br></br>
                                <br></br><br></br>
                                많은 서비스 이용과 공유는 저희에게 힘이됩니다.<br></br>
                                <br></br><br></br>
                                감사합니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="introduce-bottom-box">
                    <div className="introduce-bottom-left">
                        <p className="culcha">출처</p>
                        <p className="where-is-from">
                            본 페이지는 상업적인 이익을 창출하지 않으며 <br></br>
                            레시피는 모두 '해먹남녀' 사이트를 통해 가져왔습니다. <br></br>
                        </p>
                        <div className="introduce-bottom-img-form">
                            <div className="refribank-img-form">
                                <img src={logo2} width='140' height='70'></img>
                            </div>
                            <div className="project-img-form">
                                <img src={logo3} width='160' height='70'></img>
                            </div>
                        </div>
                    </div>
                    <div className="introduce-bottom-right">
                        <div className="introduce-bottom-button-form">
                            <button className="introduce-bottom-right-btn">
                                <img src={move_top_btn} width="60" height="60"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default introduce;




