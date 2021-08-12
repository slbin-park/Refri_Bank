import React, {useState} from 'react';

function Func_noticeboard_show_noticeboard({history}) {
    
  // 여기서 post로 전부 불러옴
  const [notice_list, setnotice_list] = useState([
    {
      no_num: 1,
      no_title: "주요가이드| RefriBank 주요기능",
      no_description: '',
      no_date: "2021-04-15"
    },
    {
      no_num: 2,
      no_title: "주요가이드| 내 냉장고에 저장한 음식이 사라짐",
      no_description: '',
      no_date: "2021-04-15"
    },
    {
      no_num: 3,
      no_title: "주요가이드| 음식 사진이 뜨지 않을 때",
      no_description: '',
      no_date: "2021-07-11"
    },
    {
      no_num: 4,
      no_title: '',
      no_description: '',
      no_date: "2021-03-29"
    },
  ]);
  
  function Func_notice_title() {
    return (
      <div className="notice_content_header">    
        <div className="notice_no">No</div>
        <div className="notice_title_a">제목</div>
        <div className="notice_day">등록일</div>
      </div>
    );
  }

  function Func_noticeboard_move_noticecontent({e, no, title, day, description}) {
    console.log(1);
    history.push("/noticepage/" + no);
  }

  function Func_notice_content({no, title, day, description}) {
    return (
      <div className="notice_each_content">    
        <div className="notice_no">{no}</div>
        {/* 해당 게시글의 정보 (notice_list)를 들고 가야함 */}
        <div role='button' className="notice_title" onClick={(e)=>Func_noticeboard_move_noticecontent({e, no, title, day, description})}>{title}</div>
        <div className="notice_day">{day}</div>
      </div> 
    );
  }

  return (
    <div className="notice-box">
      <div className="main-content">
          <Func_notice_title/>
          {notice_list.map(v => <Func_notice_content no={v.no_num} title={v.no_title} day={v.no_date} description={v.no_description}/>)}
      </div>
    </div>
);
}

export default Func_noticeboard_show_noticeboard;