
import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/heart.png';
import comment_img from '../../img/board/comment.png'
import React, { useState, useEffect } from 'react'
import Axios from "axios";
//4번 렌더링
function Func_freeboard_show_freeboard({ setModalOn, set_get_free_number, information }) {
    const [free_table, set_free_table] = useState(); //전체 게시글 데이터


    useEffect(() => {
        get_free_tableall()
    }, [])

    const get_free_tableall = () => {
        Axios.post("https://qkrtmfqls.gabia.io/getfree", {

        })
            .then((response) => {
                set_free_table(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const Click_free = (e, number) => {
        setModalOn(true)
        set_get_free_number(number);
    }


    //게시글 삭제버튼 시작
    const Func_this_delete_content = (e, number) => {
        e.preventDefault();
        Axios.post("https://qkrtmfqls.gabia.io/deletefree/" + number, {
        })
            .then((response) => {
                get_free_tableall()
                alert('게시글 삭제에 성공하셨습니다 ! ')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    //게시글 삭제버튼 끝

    const Func_freeboard_show_eachcontent = () => {
        return (
            <>
                {/* slice 넣어야함 */}
                {free_table && free_table.slice(0, 6).map(({ number, id, nickname, title, description, createdate, count, likeit, index }) => {
                    return (
                        <div key={index} className="eachcontent-block"  >
                            <div className="eachcontent" border-color="#008554">
                                <div onClick={(e) => Click_free(e, number)} style={{ height: '80%' }}>
                                    <div className="content-header" >

                                        <div className="nickname">{nickname}</div>
                                        <div createdate="createdate">{createdate}</div>
                                    </div>
                                    <div className="content-maincontent">
                                        <div className="title" dangerouslySetInnerHTML={{ __html: title }}></div>
                                        <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
                                    </div>
                                </div>
                                <div className='reaction-box' style={{ height: '20%' }}>
                                    <img src={heart_img} width='30px' />
                                    <span>{likeit}</span>
                                    <img src={comment_img} width='27px' />
                                    <span>{count}</span>
                                    {information && id == information.id ? <button onClick={(e) => Func_this_delete_content(e, number)}>게시글 삭제</button> : ""}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <Func_freeboard_show_eachcontent />
    )
}

export default React.memo(Func_freeboard_show_freeboard);