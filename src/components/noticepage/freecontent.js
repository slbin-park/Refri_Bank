import React, { useState, useEffect } from "react";
import Axios from 'axios';
import '../../style/noticepage/freecontent.css';
import likeimg from '../../img/board/likeimg.jpg';
import commentimg from '../../img/board/commentimg.jpg';
import Free_reply from './Freereply'
import Aos from "aos";

const Func_freecontent_show_freecontent = ({ get_free_number, information }) => {
    const [commentinput, setcommentinput] = useState('');
    const [free_board, set_free_board] = useState(); //게시글 내용이 들어가있음
    const [reply_table, set_reply_table] = useState(); //댓글 데이터
    useEffect(() => {
        get_free_table()
        get_reply()
    }, [])

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

    const Add_reply = (e) => {
        e.preventDefault();

        if (information != undefined) {
            Axios.post("https://qkrtmfqls.gabia.io/addreply", {
                number: get_free_number,
                userid: information.id,
                nickname: information.nickname,
                description: commentinput
            })
                .then((response) => {
                    setcommentinput('')
                    get_free_table()
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
                        get_free_table()
                        get_reply()
                        alert('좋아요 버튼을 눌렀습니다.')
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
    Aos.init()
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
                        <input required autoFocus className="comment-input" type='text' placeholder='댓글을 입력하세요...' onKeyPress={(e) => e.key == 'Enter' ? Add_reply : ''} onChange={e => setcommentinput(e.target.value)} value={commentinput} />
                        <button className="commentsubmit-button" onClick={Add_reply}>등록</button>
                    </form>}
                    {/* 로그인 안할시에 처리 끝 */}

                    {/* 댓글 */}
                    {reply_table && <Free_reply reply_table={reply_table} />}
                </div>
            </div>}
        </>
    )
}

export default React.memo(Func_freecontent_show_freecontent);