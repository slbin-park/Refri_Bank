import Func_filter_find_ingredient from "./filter";
import React, { useState } from "react";

const Filterbutton = ({information, result_box_list, setresult_box_list}) => {
    console.log(information)
    
    console.log('filterbutton 렌더링');
    const [toggle, settoggle] = useState(false);

    const Func_show_ingredient = () => {
        return (
          <div className="rfg-body-form" style={toggle === true ? { height: '80vh' } : { height: '0vh' }}>
            <Func_filter_find_ingredient information={information} result_box_list={result_box_list} setresult_box_list={setresult_box_list}/>
          </div>
        );
    }

    return (
        <div className="rfg-form">
            <div className="rfg-select-btn" onClick={() => { settoggle(!toggle) }}>
            <div className="ingredient-toggle-btn" >
                {toggle ? "그만 담고 검색하기" : '내 냉장고에 재료 추가하기'}
            </div>
            </div>
            {Func_show_ingredient()}
        </div>
    )
}

export default Filterbutton;