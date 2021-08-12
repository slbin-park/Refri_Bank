import React, { useState, useEffect } from "react";
import Axios from 'axios';
import AOS from "aos";
import '../../style/noticepage/freecontent.css';
import likeimg from '../../img/board/likeimg.jpg';
import commentimg from '../../img/board/commentimg.jpg';

const Func_freecontent_show_freecontent = ({ content, information, reply_table }) => {

    // 지금 입력한 내용

    const [commentinput, setcommentinput] = useState('');

    // 저장된 댓글 불러온 테이블
    const [comment_table, setcomment_table] = useState();


    // 댓글 등록 버튼 누르면 post 요청으로 입력내용 보냄
    const Func_freecontent_post_commentimput = (e) => {
        Axios.post("https://qkrtmfqls.gabia.io/addreply", {
            number: content.number,
            userid: information.id,
            nickname: information.nickname,
            description: commentinput
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const Func_test = (e) => {
        setcommentinput(e.target.value);
    }


    const Func_freecontent_show_commentlist = () => {
        AOS.init();
        return (
            <>
                {reply_table && reply_table.slice(0, 6).map(({ number, id, nickname, description, created }) => {
                    return (
                        <div className="eachcomment-block">
                            <div className="comment-header">
                                <div className="comment-nickname">{nickname}</div>
                                <div createdate="comment-createdate">{created}</div>
                            </div>
                            <div className="comment-description">
                                <div className="description">{description}</div>
                            </div>
                            {/* <button onClick={(e) => Func_this_delete_comment(e, number)}></button> */}
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div className="thumbnail-content-bigbox">
            <div className="thumbnail-content-box">
                <div className="thumbnail-content-title">
                    <span>{content.title}</span>
                </div>
                <div className="thumbnail-content-description">
                    <span>{content.description}</span>
                </div>
                {/* <div className="thumbnail-content-innerbox">
                    <div className="thumbnail-content-nickname"><span>작성자: Kate</span></div> 
                    <div className="thumbnail-content-createdate"><span>게시일: 2021-08-10</span></div>
    </div> */}
                {/* 댓글 */}
                <div className="reaction-num">
                    <img src={likeimg} width="20px" height="20px"/>
                    <div>17</div>
                    <img src={commentimg} width="20px" height="20px"/>
                    <div>17</div>
                </div>
                <form className="eachcomment-input">
                    <input required autoFocus className="comment-input" type='text' placeholder='댓글을 입력하세요...' onChange={e => setcommentinput(e.target.value)} value={commentinput} />
                    <a role="button" className="commentsubmit-button" onClick={() => { Func_freecontent_post_commentimput() }}>등록</a>
                </form>
                <Func_freecontent_show_commentlist />
            </div>
        </div>
    )
}

export default Func_freecontent_show_freecontent;