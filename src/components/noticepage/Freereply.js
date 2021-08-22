import React, { } from "react";
import "../../style/noticepage/freecontent.css";
import moment from 'moment'


const Reply_free = ({ reply_table, page_slice }) => {

  return (
    <>
      { reply_table
        .slice(page_slice.start, page_slice.end)
        .map(({ nickname, description, created, index }) => {
          return (
            <div key={index} className="eachcomment-block">
              <div className="comment-header">
                <div className="comment-nickname">{nickname}</div>
                <div createdate="comment-createdate">{moment(created).format('YY-MM-DD h:mm')}</div>
              </div>
              <div className="comment-description">
                <div className="description">{description}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default React.memo(Reply_free);
