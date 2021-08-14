
import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/heart.png';
import comment_img from '../../img/board/comment.png'
import React, { useEffect } from 'react'
import Axios from "axios";
//4번 렌더링
function Func_freeboard_show_freeboard({ set_reply_table, set_free_select_num, information, free_table }) {
    console.log(free_table)
    console.log(information);
    const Func_this_select_content = (e, number, id, nickname, title, description, createdate, count, likeit) => {
        get_reply(number)
        set_free_select_num({ number: number, id: id, nickname: nickname, title: title, description: description, createdate: createdate, count: count, likeit: likeit });

    }

    // 게시글 클릭시 댓글 가져옴
    const get_reply = async (number) => {
        await Axios.post("https://qkrtmfqls.gabia.io/getreply/" + number, {

        })
            .then((response) => {
                set_reply_table(response.data);
            })
            .catch((error) => {
                console.log('reply', error);
            })
    }
    // 게시글 클릭 끝


    //게시글 삭제버튼 시작
    const Func_this_delete_content = (e, number) => {
        e.preventDefault();
        Axios.post("https://qkrtmfqls.gabia.io/deletefree/" + number, {

        })
            .then((response) => {
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
                                <div onClick={(e) => Func_this_select_content(e, number, id, nickname, title, description, createdate, count, likeit)} style={{ height: '80%' }}>
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
                                    {/* <div>{좋아요수}</div> */}
                                    <img src={comment_img} width='27px' />
                                    <span>{count}</span>
                                    {/* <div>{댓글수}</div> */}
                                    {/* 밖으로 빼야함 */}
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
        // 4개 묶는 div
        <Func_freeboard_show_eachcontent />
    )
}

export default React.memo(Func_freeboard_show_freeboard);