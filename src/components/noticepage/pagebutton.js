import React, { useState, useEffect } from "react";
import '../../style/mypage/index.css';
import '../../style/mypage/likeit.css';

function Likeit({ button_cnt, page, set_page_slice }) {
    //button_cnt - > response.data / 10 버튼개수
    // set_page_slice - > [page_slice,set_page_slice] = useState({start:0,end:10})
    // page_slice.start page_slice.end 를
    // arr.slice(page_slice.start,page_slice.end )


    const [page_color, set_page_color] = useState(0);
    const [arrow_page, set_arrow_page] = useState(0);

    const Func_click_page_slice_btn = (i) => {
        set_page_slice({ start: (i) * 10, end: (i + 1) * 10 });
        set_page_color(i);
    }

    useEffect(() => {
        set_arrow_page(0)
        set_page_slice({ start: 0, end: 10 })
        set_page_color(0)
    }, [page])


    useEffect(() => {
        create_button();
    }, [page_color])

    const create_button = () => {
        let table_button = []
        for (let i = (arrow_page * 5); i < (arrow_page * 5) + 5; i++) {
            if (i > button_cnt) break;
            table_button.push(
                <div onClick={(e) => Func_click_page_slice_btn(i)} style={page_color == i ? { color: 'rgba(1, 1, 1, 0.8)' } : { color: 'rgba(1, 1, 1, 0.4)' }} className="like_select_num_btn_sub_form"  >
                    {i + 1}
                </div>
            )
        }
        return table_button
    }

    const Func_paging_minus = (e) => {
        e.preventDefault();
        set_arrow_page(arrow_page - 1);
    }
    const Func_paging_plus = (e) => {
        e.preventDefault();
        set_arrow_page(arrow_page + 1);
    }
    return (
        <>
            { arrow_page > 0 ? <div className="like_select_num_btn_left" onClick={(e) => Func_paging_minus(e)}>
                ‣
                </div> : ''}
            {button_cnt && create_button()}
            { (arrow_page + 1) * 5 < button_cnt ? <div className="like_select_num_btn_right" onClick={(e) => Func_paging_plus(e)}>
                ‣
            </div> : ''}
        </>
    )
}

export default React.memo(Likeit);