import React, { useState, useEffect } from "react";
import Axios from 'axios';
import AOS from "aos";
import '../../style/noticepage/freecontent.css';
import likeimg from '../../img/board/likeimg.jpg';
import commentimg from '../../img/board/commentimg.jpg';

const Func_freecontent_show_freecontent = ({ set_reply_table, get_free_number, information, reply_table }) => {

    const [commentinput, setcommentinput] = useState('');
    const [free_board, set_free_board] = useState();

    useEffect(() => {
        get_free_table()
    }, [reply_table])

    const get_reply = async () => {
        await Axios.post("https://qkrtmfqls.gabia.io/getreply/" + get_free_number, {
        })
            .then((response) => {
                set_reply_table(response.data);
            })
            .catch((error) => {
                console.log('reply', error);
            })
    }

    const Func_freecontent_post_commentimput = (e) => {
        if (information != undefined) {
            Axios.post("https://qkrtmfqls.gabia.io/addreply", {
                number: get_free_number,
                userid: information.id,
                nickname: information.nickname,
                description: commentinput
            })
                .then((response) => {
                    //get_free_table()
                    get_reply()
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const get_free_table = () => {
        Axios.post("https://qkrtmfqls.gabia.io/free" + get_free_number, {
        })
            .then((response) => {
                set_free_board(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const update_likeit = () => {
        if (information != undefined) {
            Axios.post("https://qkrtmfqls.gabia.io/updatelikeit", {
                number: get_free_number,
                userid: information.id,
                title: get_free_number.title
            })
                .then((response) => {
                    if (response.data.success) {
                        alert('좋아요 버튼을 눌렀습니다.')
                        get_reply()
                    }
                    else {
                        alert('이미 좋아요를 눌렀습니다.')
                    }
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    const Func_freecontent_show_commentlist = () => {
        AOS.init();
        return (
            <>
                {reply_table && reply_table.slice(0, 6).map(({ number, id, nickname, description, created, index }) => {
                    return (
                        <div key={index} className="eachcomment-block">
                            <div className="comment-header">
                                <div className="comment-nickname">{nickname}</div>
                                <div createdate="comment-createdate">{created}</div>
                            </div>
                            <div className="comment-description">
                                <div className="description" >{description}</div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <>
            {free_board && <div className="thumbnail-content-bigbox">
                <div className="thumbnail-content-box">
                    <div className="thumbnail-content-title">
                        <span>{free_board.title}</span>
                    </div>
                    <br />
                    <div className="thumbnail-content-description" dangerouslySetInnerHTML={{ __html: free_board.description }}>
                    </div>

                    <div className="reaction-num">
                        <img onClick={update_likeit} src={likeimg} width="20px" height="20px" />
                        <div>{free_board.likeit}</div>
                        <img src={commentimg} width="20px" height="20px" />
                        <div>{free_board.count}</div>
                    </div>

                    {/* 로그인 안할시에 입력창 안뜸 */}
                    {information && <form className="eachcomment-input">
                        <input required autoFocus className="comment-input" type='text' placeholder='댓글을 입력하세요...' onKeyPress={(e) => { if (e.key == 'Enter') Func_freecontent_post_commentimput() }} onChange={e => setcommentinput(e.target.value)} value={commentinput} />
                        <a role="button" className="commentsubmit-button" onClick={() => { Func_freecontent_post_commentimput() }}>등록</a>
                    </form>}
                    {/* 로그인 안할시에 처리 끝 */}

                    {/* 댓글 */}
                    <Func_freecontent_show_commentlist />
                </div>
            </div>}
        </>
    )
}

export default React.memo(Func_freecontent_show_freecontent);