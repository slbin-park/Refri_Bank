import React from 'react';
import error_img from '../img/error_img.jpeg';
import '../style/errorpage.css';

const Error_page = () => {
  return (
    <div className="errorpage">
      <img src={error_img}></img>
    </div>
  );
};

export default Error_page;
