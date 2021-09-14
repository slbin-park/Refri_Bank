import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/likeimg.jpg';
import comment_img from '../../img/board/commentimg.jpg';
import React, { useState, useEffect } from 'react';
import Alert from '../../page/alert';
import Axios from 'axios';

//4번 렌더링
function Func_freeboard_show_freeboard({ setModalOn, set_get_free_number, information, set_button_cnt, page_slice }) {
    const [free_table, set_free_table] = useState(); //전체 게시글 데이터

    useEffect(() => {
        get_free_tableall();
    }, []);

    const get_free_tableall = () => {
        Axios.post('https://qkrtmfqls.gabia.io/getfree', {})
            .then((response) => {
                set_button_cnt(response.data.length / 10);
                set_free_table(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const Click_free = (e, number) => {
        e.preventDefault();
        setModalOn(true);
        set_get_free_number(number);
    };

    //게시글 삭제버튼 시작
    const Func_this_delete_content = (e, number) => {
        e.preventDefault();
        Axios.post('https://qkrtmfqls.gabia.io/deletefree/' + number, {})
            .then((response) => {
                get_free_tableall();
                Alert('board', '게시글 삭제에 성공하셨습니다!');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //게시글 삭제버튼 끝

    const Func_freeboard_show_eachcontent = () => {
        return (
            <>
                {/* slice 넣어야함 */}
                {free_table &&
                    free_table.slice(page_slice.start, page_slice.end).map(({ number, id, nickname, title, description, createdate, count, likeit, index }) => {
                        console.log(id)
                        return (
                            <div key={index} className="eachcontent-block">
                                <div className="eachcontent" border-color="#008554">
                                    <div onClick={(e) => Click_free(e, number)}>
                                        <div className="content-maincontent">
                                            <div className="content-header">
                                                <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                                                <div className="nickname">| {nickname}</div>
                                            </div>
                                            <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
                                        </div>

                                    </div>
                                    <div className="reaction-box">
                                        <img src={heart_img} width="20px" height="20px" style={{ 'margin-right': '5px' }} />
                                        <span style={{ 'margin-right': '15px'}}>{likeit}</span>
                                        <img src={comment_img} width="20px" height="20px" style={{ 'margin-right': '5px' }} />
                                        <span>{count}</span>
                                        {information != undefined ? id == information.id || information.id == 'smpts00' ? <button onClick={(e) => Func_this_delete_content(e, number)}>게시글 삭제</button> : '' : ''}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </>
        );
    };

    return <Func_freeboard_show_eachcontent />;
}

export default React.memo(Func_freeboard_show_freeboard);
