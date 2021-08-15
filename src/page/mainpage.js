import React, { useState, useEffect } from "react";
//이거 대문자로 해야함!!
import Body from '../components/mainpage/body';
import Footer from '../components/mainpage/footer';
import Aside from '../components/mainpage/aside';
import Footer_bottom from '../components/mainpage/footer-bottom';
import Axios from 'axios';
import Alert from "./alert";

const App = ({ history }) => {
    // 히스토리를 받았어 (프롭스로)
    const [table, settable] = useState();
    const [text, settext] = useState('');
    const [ftable,setftable] = useState();
    const [livetable, setlivetable] = useState();
    const [ftable_cnt, setftable_cnt] = useState();
    const [page_slice, set_page_slice] = useState({ start: 0, end: 16 })


    useEffect(()=> {
        Axios.post("https://qkrtmfqls.gabia.io/liverank", {})

        .then((response) => {
            let new_arr = response.data.slice();
            new_arr.sort(function(a, b){
                return a.likeit - b.likeit;
            })
            setftable(new_arr);
            setlivetable(response.data);
            setftable_cnt(response.data.length/16)
            
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    const gettable = () => {
        if(text != '') {
            Axios.post("https://qkrtmfqls.gabia.io/gettable", {
                id: text
            })
            .then((response) => {
                setftable(response.data)
                setftable_cnt(response.data.length/16)
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <>
            <div className="body-top-form">
                <Body gettable={gettable} settext={settext} text={text} history={history} />
            </div>
            <div className="body-bottom-form">
                <div className="footer-form">
                    <Footer ftable={ftable} history={history} page_slice={page_slice} />
                </div>
                <div className="aside-form">
                    <Aside livetable={livetable} history={history}/>
                </div>
            </div>
            <div className="move-footer-form">
            <div style={{ width: '100%', height: '80%', display: 'flex', 'justify-content': 'center', 'align-items': 'center' }}>
            <div className="like_select_num_btn_form">
            {
                    ftable &&
                    <Footer_bottom set_page_slice={set_page_slice} ftable_cnt ={ftable_cnt}/>
                }
            </div>
          </div>

            </div>
        </>
    )
}

export default App;