import '../../style/noticepage/writeform.css';

import { useState } from 'react';
import Axios from 'axios';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Func_writeform_write_des({ set_write_toggle, page, information }) {
    const [freeinputdes, setfreeinputdes] = useState({
        title: '',
        description: '',
        //  createdate: new Date()
    });

    const getValue = (e) => {
        const { name, value } = e.target;
        setfreeinputdes({
            ...freeinputdes,
            [name]: value
        })
    };

    const add_notice = () => {
        Axios.post("https://qkrtmfqls.gabia.io/addnotice", {
            id: information.id,
            title: freeinputdes.title,
            description: freeinputdes.description,
            createdate: new Date()
        })
            .then((response) => {
                set_write_toggle(false)
            })
            .catch((error) => {
            });
    }

    const add_free = () => {
        Axios.post("https://qkrtmfqls.gabia.io/addfree", {
            id: information.id,
            nickname: information.nickname,
            title: freeinputdes.title,
            description: freeinputdes.description,
            createdate: new Date()
        })
            .then((response) => {
                set_write_toggle(false)

            })
            .catch((error) => {
            });
    }


    const Func_writeform_post_freeinputdes = (e) => {
        if (page == 'notice') {
            add_notice()
        }
        else if (page == 'free') {
            add_free()
        }

    }

    return (
        <div className="writeform-wrapper-block">
            <div className='writeform-wrapper'>
                <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title' />
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
            <button className="submit-button" onClick={() => { Func_writeform_post_freeinputdes() }}>게시물로 등록하기</button>
        </div>
    );
}

export default Func_writeform_write_des;