import React, { useState, useEffect } from "react";
import Axios from 'axios';
import AOS from "aos";
import likeimg from '../../../img/board/likeimg.jpg';
import commentimg from '../../../img/board/commentimg.jpg';
import Aos from "aos";

// set댓글테이블, 게시글 가져옴: content
const Func_mywritecontent_show_mywritecontent = ({get_table_number,get_modal_table}) => {
    const [get_reply_table,set_reply] =useState()

    useEffect(()=>{
        get_reply()
    },[])
    
    const get_reply = async (number) => {
        await Axios.post("https://qkrtmfqls.gabia.io/getreply/" + get_table_number, {

        })
            .then((response) => {
                set_reply(response.data);
            })
            .catch((error) => {
                console.log('reply', error);
            })
    }

    const Func_freecontent_show_commentlist = () => {
        return (
            <>
                {get_reply_table && get_reply_table.slice(0, 6).map(({ number, id, nickname, description, created, index }) => {
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
    Aos.init();
    return (
            <>{get_reply_table &&
        <div className="thumbnail-content-bigbox">
            <div className="thumbnail-content-box">
                <div className="thumbnail-content-title">
                    <span>{get_modal_table.title}</span>
                    <div className="thumbnail-content-createdate"><span>{get_modal_table.created}</span></div>
                </div>
                <div className="thumbnail-content-description">
                    <span>{get_modal_table.description}</span>
                </div>
                <div className="reaction-num">
                    <img src={likeimg} width="20px" height="20px"/>
                    <div>{get_modal_table.likeit}</div>
              <img src={commentimg} width="20px" height="20px"/>
                    <div>{get_modal_table.count}</div>
                </div>
                <Func_freecontent_show_commentlist />
            </div>
        </div>}
        </>
    )
}

export default React.memo(Func_mywritecontent_show_mywritecontent);