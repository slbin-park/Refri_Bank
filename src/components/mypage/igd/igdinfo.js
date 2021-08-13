import React, { useState, useEffect } from "react";
import '../../../style/mypage/index.css';
import '../../../style/mypage/myigd/igdmanage.css';
import moment from 'moment'
import ingredient_img from "../../../img/ingredient_img/ingredient-img";

//리액트에서 렌더링을 할때는
// props 가 바뀔때
// state - > props넘겨주죠
// 부모 컴포넌트가 바꼈을 때
function Func_igd_info({ igd_info }) {
    console.log(igd_info)


    const Show_igdinfo = () => {
        let three_arr = []
        let line_arr = []

        igd_info.map((v, index) => {
            let eprd = String(v.eprd)
            let eprdate = moment(eprd, 'YY-MM-DD')
            let eprddate = moment(new Date(), 'YY-MM-DD')
            let last_date = eprdate.diff(eprddate, 'days')
            three_arr.push(
            )

        })
        return line_arr
    }
    return (
        <>
            <div className="igdinfo_big_block">
                <Show_igdinfo />
            </div>
        </>
    )
}




export default React.memo(Func_igd_info);