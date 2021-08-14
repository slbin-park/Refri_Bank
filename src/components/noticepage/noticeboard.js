import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import moment from 'moment'


function Func_noticeboard_show_noticeboard({history}) {
    
  // 여기서 post로 전부 불러옴
  const [notice_list, setnotice_list] = useState()

  useEffect(()=>{
    Axios.post("http://qkrtmfqls.gabia.io/getnotice", {
    })
      .then((response) => {
        setnotice_list(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  },[])
  
  function Func_notice_title() {
    return (
      <div className="notice_content_header">    
        <div className="notice_no">No</div>
        <div className="notice_title_a">제목</div>
        <div className="notice_day">등록일</div>
      </div>
    );
  }

  function Func_notice_content({v}) {
    let eprdate = moment(v.createdate).format('YY-MM-DD')
    return (
      <div className="notice_each_content">    
        <div className="notice_no">{v.number}</div>
        <div role='button' className="notice_title" >{v.title}</div>
        <div className="notice_day">{eprdate}</div>
      </div> 
    );
  }

  return (
    <div className="notice-box">
      <div className="main-content">
          <Func_notice_title/>
          {notice_list != undefined ? notice_list.map(v => <Func_notice_content v={v} />):''}
      </div>
    </div>
);
}

export default Func_noticeboard_show_noticeboard;