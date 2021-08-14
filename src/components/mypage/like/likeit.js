import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css';
import '../../../style/mypage/likeit.css';
import Liketable from './liketable';

function Likeit({ history, like_table, information, like_page_cnt }) {
    const [like_page_button, set_like_page_button] = useState()
    const [like_page_slice, set_like_page_slice] = useState({start:0,end:10})
    const [page_color,set_page_color] = useState(0);
    const [default_page_slice, set_default_page_slice] = useState(0);

    const Func_click_page_slice_btn = (i) => {
        set_like_page_slice({start:(i)*10,end:(i+1)*10});
        set_page_color(i);
    }   

    useEffect(()=>{
        console.log("page", page_color);
        create_button();
    },[page_color])
    // 페이지 컬러가 변할때미다 create_button 을 호출
    


    const create_button = ()=>{
        // 버튼 눌려지면 for 문 한번 더 돌면서 색깔 적용
        let psum_like_page_btn_arr = [];
        let like_page_btn_arr = [];
        for(let i=0; i<like_page_cnt; i++) {
            like_page_btn_arr.push(
                <div onClick={(e)=>Func_click_page_slice_btn(e, i)} style={page_color==i ? {color: 'rgba(1, 1, 1, 0.8)'} : {color:'rgba(1, 1, 1, 0.4)'}} className="like_select_num_btn_sub_form abc"  >
                    {i+1}
                </div>
            )
            if((i+1)/5>=1 && (i+1)%5 == 0) {
                psum_like_page_btn_arr.push(like_page_btn_arr);
                like_page_btn_arr = [];
                //
            }
        }
        // 예외처리
        if(like_page_btn_arr.length != 0) psum_like_page_btn_arr.push(like_page_btn_arr);
        // 처음에 안됐던거는 page color 가 바뀔때 for 문을 돌아야하는데 안돌아 그래서 함수에 넣어줌 => 눌리고 나서 다시 for 문 돌면서 확인 (색깔 체크)
        set_like_page_button(psum_like_page_btn_arr);
    }

    const Like_paging_btn = () => {
        return (
            <>
                {like_page_button && like_page_button[default_page_slice]}
            </>
        )
    }
    useEffect(()=> {
        console.log("default", default_page_slice);
        set_page_color(default_page_slice * 5);
        Func_click_page_slice_btn(default_page_slice * 5);
        Like_paging_btn();
    }, [default_page_slice]);
    // default_page_slice 가 0, 1, 2 증가 할 때마다 useEffect => Like_paging_btn 이 실행되면 돼
    
    const Func_paging_minus = () => {
        set_default_page_slice(default_page_slice - 1);
    }
    const Func_paging_plus = () => {
        set_default_page_slice(default_page_slice + 1);
        // [0,1,2,3,4] , [5,6,7,8,9] , ~~
        

    }
    return (

        <div className='likeit_body'>
            
            <div className='likeit_header_main_form'>
                <div className="likeit_header_title_form">
                    <h2>좋아요 게시글</h2>
                </div>
                <div className="likeit_header_sub_form">
                    <h4>고객 여러분의 소중한 의견을 귀담아 듣도록 최선을 다하겠습니다..</h4>
                </div>
            </div>
            <div className='likeit_content'>
                <div className="body_header_main_form">
                    <div className='body_header_sub_form'>
                        <div className='likeit_no'>No</div>
                        <div className='likeit_title'>제목</div>
                        <div className='likeit_nickname'>작성자</div>
                        <div className='likeit_date'>등록일</div>
                        <div className='likeit_cancel'>취소</div>
                    </div>
                </div>
                <div className='body_main_form'>
                    <Liketable history={history} table={like_table} information={information} like_page_slice={like_page_slice}></Liketable>
                </div>
                <div className="likeit_bottom_box">
                    <div className="like_select_num_btn_form">
                        <div className="like_select_num_btn_left" onClick={(e) => Func_paging_minus()}>
                            ▹
                        </div>
                        <Like_paging_btn/>
                        <div className="like_select_num_btn_right" onClick={(e)=>Func_paging_plus()}>
                            ▹
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Likeit;
