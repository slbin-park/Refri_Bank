import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/heart.png';
import comment_img from '../../img/board/comment.png'
import {React,useEffect} from 'react'
import Axios from "axios";

function Func_freeboard_show_freeboard({get_free_table,set_free_table,modalOn, setModalOn, free_select_num, set_free_select_num, history, information, free_table}) {

    console.log(information);
    const Func_this_select_content = (e, number, id, nickname, title, description, createdate) => {
        setModalOn(!modalOn);
        set_free_select_num({number:number, id:id, nickname:nickname, title:title, description:description, createdate:createdate});       
    }   

    const Func_this_delete_content = (e, number) => {

        Axios.post("https://qkrtmfqls.gabia.io/deletefree/"+number, {

        })
        .then((response) => {
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const Func_freeboard_show_eachcontent = () => {
        return (
            <>
                {/* slice 넣어야함 */}
                {free_table && free_table.slice(0,6).map(({number, id, nickname, title, description, createdate}) => {
                    return (
                        <div className="eachcontent-block" >
                            <div className="eachcontent"  border-color="#008554">
                                <div style={{ height: '80%' }}>
                                    
                                <div className="content-header" onClick={(e) => Func_this_select_content( e, number, id, nickname, title, description, createdate )}> 

                                    <div className="nickname">{nickname}</div>
                                    <div createdate="createdate">{createdate}</div>
                                </div>
                                <div className="content-maincontent">
                                    <div className="title" dangerouslySetInnerHTML={ {__html: title}}></div>
                                    <div className="description" dangerouslySetInnerHTML={ {__html: description}}></div>
                                </div>

                                </div>
                                <div className='reaction-box'>
                                    <div className="heart_img_box">
                                        <img className="heart_img" src={heart_img}/>
                                        <span>14</span>
                                    </div>
                                    <div className="comment_img_box">
                                        <img className="comment_img" src={comment_img} />
                                        <span>37</span>
                                    </div>
                                    {/* <div>{좋아요수}</div> */}
                                    
                                    {/* <div>{댓글수}</div> */}
                                    {/* 밖으로 빼야함 */}
                                    {id == information.id ? <button onClick={(e)=>Func_this_delete_content(e, number)}>게시글 삭제</button> : ""}
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
            <Func_freeboard_show_eachcontent/>
      )
  }
  
export default Func_freeboard_show_freeboard;