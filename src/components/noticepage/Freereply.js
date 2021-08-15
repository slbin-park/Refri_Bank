import React, {  } from "react";
import "../../style/noticepage/freecontent.css";


const Reply_free = ({reply_table}) => {
  return (
    <>
        { reply_table
            .slice(0, 6)
            .map(({nickname, description, created, index }) => {
              return (
                <div key={index} className="eachcomment-block">
                  <div className="comment-header">
                    <div className="comment-nickname">{nickname}</div>
                    <div createdate="comment-createdate">{created}</div>
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
