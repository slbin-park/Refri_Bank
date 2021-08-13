import React , { useState } from "react";
import this_body_show_searchimg from "../../img/main_body_img/search_img2.png";
import this_body_menu_logo from "../../img/main_body_img/body-menu-logo.png";
import this_body_ingredient_logo from "../../img/main_body_img/body-ingredient-logo.png";

import '../../style/mainpage/body/body.css';
const Body = ({text,settext,gettable}) => {

  const [toggle, settoggle] = useState(true);

  //gettable


  return (
    <>  
        <div className = "toggle_btn_box">
          <button className = "toggle_btn" onClick= {()=>{settoggle(!toggle)}} > 
              { toggle ? <img className = "toggle_img1" align="center" src={this_body_menu_logo}/>   : 
          <img className = "toggle_img2" align="center" src={this_body_ingredient_logo}/> }
          </button>
        </div>
        
        <div className="search_bar_box">
          <input className="search_bar" onChange={e => settext(e.target.value)} value={     text} onKeyPress={(e)=> {if(e.key==='Enter')  gettable()}} type="text" placeholder="     Search"></input>
        </div>
        <button className="search_btn" onClick={gettable} > <img align="center" src={this_body_show_searchimg} width='50' height='50' /></button>
    </>
  )
}
    
export default Body;