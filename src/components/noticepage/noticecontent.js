import React, { useState, useEffect } from "react";
import '../../style/noticepage/freecontent.css';
import Aos from "aos";
import Axios from 'axios';

const Func_freecontent_show_freecontent = ({ get_notice_number }) => {

    const [notice_table, set_notice_table] = useState();
    useEffect(() => {
        get_notice_table()
    }, [])

    const get_notice_table = () => {
        Axios.post("https://qkrtmfqls.gabia.io/notice" + get_notice_number, {
        })
            .then((response) => {
                set_notice_table(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            });
    }


    Aos.init()
    return (
        <>
            {notice_table && <div className="thumbnail-content-bigbox">
                <div className="thumbnail-content-box">
                    <div className="thumbnail-content-title">
                        <span>{notice_table.title}</span>
                    </div>
                    <br />
                    <div className="thumbnail-content-description" dangerouslySetInnerHTML={{ __html: notice_table.description }}>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default React.memo(Func_freecontent_show_freecontent);