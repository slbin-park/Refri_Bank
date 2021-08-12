import React, { useState, useEffect } from "react";
//이거 대문자로 해야함!!
import Body from '../components/mainpage/body';
import Footer from '../components/mainpage/footer';
import Aside from '../components/mainpage/aside';
import Axios from 'axios';



const App = ({ history }) => {
    // 히스토리를 받았어 (프롭스로)
    const [table, settable] = useState();
    const [text, settext] = useState('');
    const [ftable,setftable] = useState();
    const [livetable, setlivetable] = useState();


    useEffect(()=> {
        Axios.post("https://qkrtmfqls.gabia.io/liverank", {})
        .then((response) => {
            setftable(response.data)
            setlivetable(response.data);
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
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <>
            <div className="body-form">
                <Body gettable={gettable} settext={settext} text={text} history={history} />
            </div>
            <div className="footer-form">
                <Footer ftable={ftable} history={history} />
            </div>
            <div className="aside-form">
                <Aside livetable={livetable} history={history}/>
            </div>
        </>
    )
}

export default App;