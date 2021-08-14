import React, { useState, useEffect } from "react";
import Axios from 'axios';
import AOS from "aos";
import likeimg from '../../../img/board/likeimg.jpg';
import commentimg from '../../../img/board/commentimg.jpg';
import Aos from "aos";

// set댓글테이블, 게시글 가져옴: content
const Func_mywritecontent_show_mywritecontent = ({get_modal_table}) => {
    Aos.init();



    return (
            <>
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
                {/* <Func_freecontent_show_commentlist /> */}
            </div>
        </div>
        </>
    )
}

export default React.memo(Func_mywritecontent_show_mywritecontent);