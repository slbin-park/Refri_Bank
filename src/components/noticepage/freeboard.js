
import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/heart.png';
import comment_img from '../../img/board/comment.png'
import React,{useEffect} from 'react'
import Axios from "axios";
//4번 렌더링
function Func_freeboard_show_freeboard({ set_reply_table, set_free_select_num, information, free_table}) {
    console.log(free_table)
    console.log(information);
    const Func_this_select_content = (e, number, id, nickname, title, description, created) => {
        get_reply(number)
        set_free_select_num({number:number, id:id, nickname:nickname, title:title, description:description, created:created});       

    }   

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
    

    const Func_this_delete_content = (e, number) => {
        e.preventDefault();
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
                {free_table && free_table.slice(0,6).map(({number, id, nickname, title, description, created}) => {
                    return (
                        <div className="eachcontent-block" onClick={(e) => Func_this_select_content( e, number, id, nickname, title, description, created )} >
                            <div className="eachcontent"  border-color="#008554">
                                <div style={{ height: '80%' }}>
                                <div className="content-header" > 

                                    <div className="nickname">{nickname}</div>
                                </div>
                                <div className="content-maincontent">
                                    <div className="title" dangerouslySetInnerHTML={ {__html: title}}></div>
                                    <div className="description" dangerouslySetInnerHTML={ {__html: description}}></div>
                                </div>

                                </div>
                                <div className='reaction-box' style={{ height: '20%' }}>
                                    <img src={heart_img} width='30px'/>
                                    <span>14</span>
                                    {/* <div>{좋아요수}</div> */}
                                    <img src={comment_img} width='27px'/>
                                    <span>37</span>
                                    {/* <div>{댓글수}</div> */}
                                    {/* 밖으로 빼야함 */}
                                    {information && id == information.id ? <button onClick={(e)=>Func_this_delete_content(e, number)}>게시글 삭제</button> : ""}
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

export default React.memo(Func_freeboard_show_freeboard);