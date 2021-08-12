import '../../style/noticepage/freeboard.css';
import heart_img from '../../img/board/heart.png';
import comment_img from '../../img/board/comment.png'
import Axios from "axios";

function Func_freeboard_show_freeboard({modalOn, setModalOn, free_select_num, set_free_select_num, history, free_table}) {

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
                        <div className="eachcontent-block" onClick={(e) => Func_this_select_content( e, number, id, nickname, title, description, createdate )}>
                            <div className="eachcontent" border-color="#008554">
                                <div className="content-header"> 
                                    <div className="nickname">{nickname}</div>
                                    <div createdate="createdate">{createdate}</div>
                                </div>
                                <div className="content-maincontent">
                                    <div className="title" dangerouslySetInnerHTML={ {__html: title}}></div>
                                    <div className="description" dangerouslySetInnerHTML={ {__html: description}}></div>
                                </div>
                                <div className='reaction-box'>
                                    <img src={heart_img} width='30px'/>
                                    <span>14</span>
                                    {/* <div>{좋아요수}</div> */}
                                    <img src={comment_img} width='27px'/>
                                    <span>37</span>
                                    {/* <div>{댓글수}</div> */}
                                    <button onClick={(e)=>Func_this_delete_content(e, number)}></button>
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