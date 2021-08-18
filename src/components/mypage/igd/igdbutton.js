import React, { useState, useEffect } from "react";
import '../../../style/mainpage/aside/aside.css';
import '../../../style/mypage/index.css';
import '../../../style/mypage/likeit.css';

const Igd_button = ({ ftable_cnt, set_page_slice }) => {
    const [page_color, set_page_color] = useState(0);

    const Func_click_page_slice_btn = (i) => {
        set_page_slice({ start: (i) * 18 });
        set_page_color(i);
    }

    useEffect(() => {
        create_button();
    }, [page_color])

    const create_button = () => {
        let table_button = []
        for (let i = 0; i < 10; i++) {
            if (i > ftable_cnt) break;
            table_button.push(
                <div onClick={(e) => Func_click_page_slice_btn(i)} style={page_color == i ? { color: 'rgba(1, 1, 1, 0.8)' } : { color: 'rgba(1, 1, 1, 0.4)' }} className="like_select_num_btn_sub_form"  >
                    {i + 1}
                </div>
            )
        }
        return table_button
    }

    return (
        <>
            {ftable_cnt && create_button()}
        </>
    )
}

export default React.memo(Igd_button);
