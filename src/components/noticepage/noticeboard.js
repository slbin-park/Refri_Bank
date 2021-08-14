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
        console.log(response.data)
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

  function Func_notice_content({no, title, day, description}) {
    let eprdate = moment(day).format('YY-MM-DD')
    return (
      <div className="notice_each_content">    
        <div className="notice_no">{no}</div>
        {/* 해당 게시글의 정보 (notice_list)를 들고 가야함 */}
        <div role='button' className="notice_title" >{title}</div>
        <div className="notice_day">{eprdate}</div>
      </div> 
    );
  }

  return (
    <div className="notice-box">
      <div className="main-content">
          <Func_notice_title/>
          {notice_list != undefined ? notice_list.map(v => <Func_notice_content no={v.number} title={v.title} day={v.createdate} />):''}
      </div>
    </div>
);
}

export default Func_noticeboard_show_noticeboard;