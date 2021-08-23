import React, { useState, useEffect } from "react";

import '../../style/noticepage/freecontent.css';
import likeimg from '../../img/board/likeimg.jpg';
import commentimg from '../../img/board/commentimg.jpg';
import '../../style/mypage/likeit.css';

import Free_reply from './Freereply';
import Alert from "../../page/alert";
import Page_button from './replypage'

import Axios from 'axios';
import Aos from "aos";
import moment from 'moment'


const Func_freecontent_show_freecontent = ({ get_free_number, information }) => {
    const [commentinput, setcommentinput] = useState('');
    const [free_board, set_free_board] = useState(); //게시글 내용이 들어가있음
    const [reply_table, set_reply_table] = useState(); //댓글 데이터
    const [page_slice, set_page_slice] = useState({ start: 0, end: 10 })
    const [reply_btn, set_reply_btn] = useState()
    useEffect(() => {
        get_free_table()
        get_reply()

    }, [])

    const get_reply = async () => {
        await Axios.post("https://qkrtmfqls.gabia.io/getreply/" + get_free_number, {
        })
            .then((response) => {
                set_reply_table(response.data);
                set_reply_btn(response.data.length / 10)
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
                description: commentinput,
                created: moment(new Date()).format('YY-MM-DD h:mm')
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
                title: free_board.title
            })
                .then((response) => {
                    if (response.data.success) {
                        get_free_table()
                        get_reply()
                        Alert("Board", '좋아요 버튼을 눌렀습니다.');
                    }
                    else {
                        Alert("Board", '이미 좋아요를 눌렀습니다.');
                    }
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
                    {reply_table && <Free_reply page_slice={page_slice} reply_table={reply_table} />}
                    {reply_btn != undefined ? <div style={{ width: '100%', height: '80%', display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
                        <div className="like_select_num_btn_form">
                            {<Page_button button_cnt={reply_btn} set_page_slice={set_page_slice} />}
                        </div>
                    </div> : ''}


                </div>
            </div>}
        </>
    )
}

export default React.memo(Func_freecontent_show_freecontent);