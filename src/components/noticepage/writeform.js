import '../../style/noticepage/writeform.css';

import {useState} from 'react';
import Axios from 'axios';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from "react-router-dom";

function Func_writeform_write_des({history}) {

    const [freeinputdes, setfreeinputdes] = useState({
        id: "",
        nickname: "jenny",
        title: '',
        description: '',
        // createdate: '2021-08-09'
    });

    const getValue = (e) => {
        const { name, value } = e.target;
        setfreeinputdes({
            ...freeinputdes,
            [name]: value
        })
        console.log(freeinputdes);
    };

    
    const Func_writeform_post_freeinputdes = (e) => {
        Axios.post("https://qkrtmfqls.gabia.io", {
            id: freeinputdes.id,
            nickname: freeinputdes.nickname,
            title: freeinputdes.title,
            description: freeinputdes.description,
            // createdate: freeinputdes.createdate
        })
        .then((response) => {
            // <Redirect to="/noticepage"></Redirect>
            history.push('/noticepage');
        })
        .catch((error) => {
        });
    }

    return (
        <div className="writeform-wrapper-block">
            <div className='writeform-wrapper'>
                <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title'/>
                <CKEditor
                editor={ClassicEditor}
                data=""
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setfreeinputdes({
                      ...freeinputdes,
                      description: data
                    })
                }}
                />
            </div>
            <button className="submit-button" onClick={() => {Func_writeform_post_freeinputdes()}}>게시물로 등록하기</button>
        </div>
    );
}

export default Func_writeform_write_des;