import React, { useState, useEffect } from "react";
import '../../style/adminpage/sidebar.css';
import '../../style/adminpage/body.css';
import '../../style/adminpage/modal.css';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
import Axios from 'axios';

function Usermanage({ history }) {
    const [user, setuser] = useState()

    const [show_modal, set_show_modal] = useState(false)
    const [show_delete,set_show_delete] = useState(false)

    const [change_psw, set_change_psw] = useState({ id: '', pwd: '' })
    const [page_cnt, set_page_cnt] = useState()
    const [page_button, set_page_button] = useState()
    const [page_slice, set_page_slice] = useState({start:0,end:7})

    useEffect(() => {
        get_userinfo()
    }, [])

    useEffect(() => {
        let btn_arr = []
        for (let i = 0; i < page_cnt; i++) {
            btn_arr.push(<button onClick={()=>{set_page_slice({start:(i)*7,end:(i+1)*7})}} className='page_btn'>{i}</button>)
        }
        set_page_button(btn_arr)
    }, [page_cnt])

    const User_table = () => {
        const arr = [];
        user&&user.slice(page_slice.start,page_slice.end).map((v) => arr.push(<Get_user_table user={v}/>))
        return (
            <>
                {user && arr}
            </>
        )
    }

    const Btn_page = () => {
        return (
            <>
                {page_button && page_button}
            </>
        )
    }

    const get_userinfo = async () => {
        await Axios.post("https://qkrtmfqls.gabia.io/getuser", {
        })
            .then((response) => {
                setuser(response.data)
                set_page_cnt(parseInt(response.data.length / 7) + 1)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const change_pwd_post = async () => {
        await Axios.post("https://qkrtmfqls.gabia.io/changepswd", {
            id: change_psw.id,
            psword: change_psw.pwd
        })
            .then((response) => {
                if (response.data.success) {
                    alert('변경에 성공하셨습니다.')
                    set_show_modal(false)
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const Get_user_table = ({ user }) => {
        return (
            <div key={user.ID} className='admin_content'>
                <div className='admin_id'>{user.ID}</div>
                <div className='admin_nick'>{user.Name}</div>
                <div className='admin_view'>{user.visit}</div>
                <div className='admin_change' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button onClick={() => { set_show_modal(!show_modal); set_change_psw({ ...change_psw, id: user.ID }) }} className='admin_change_btn'>변경</button>
                </div>
                <div className='admin_kick' style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <button onClick={() => {set_show_delete(!show_delete);set_show_delete({ ...change_psw, id: user.ID })}} className='admin_kick_btn'>강제탈퇴</button>
                </div>
            </div>
        )
    }
    return (
        <div className='body_user'>
            <div className='usermange_content'>
                <div className='usermange_title'>
                    <h2>유저관리</h2>
                </div>
                <div className='body_header_admin'>
                    <div className='admin_id'>ID</div>
                    <div className='admin_nick'>NickName</div>
                    <div className='admin_view'>방문수</div>
                    <div className='admin_change'>비밀번호변경</div>
                    <div className='admin_kick'>강제탈퇴</div>
                </div>
                <div className='body_main'>
                    <User_table />
                </div>
                {/* 모달창 */}
                <Rodal customStyles={{ background: '#f1f0f5' }} visible={show_modal} animation='door' onClose={() => set_show_modal(false)}>
                    <div className='modal_header'>
                        변경할 아이디  :  {change_psw.id}
                        </div>
                    <div className='modal_body'>
                        변경할 비밀번호<br/><br/>
                <input type="text" onChange={e => set_change_psw({ ...change_psw, pwd: e.target.value })} value={change_psw.pwd} className='modal_input' />
                    </div>
                    <div className='modal_btn_div'>
                        <button onClick={() => change_pwd_post()} className='modal_btn'>confirm</button>
                    </div>
                </Rodal>

                <Rodal customStyles={{ background: '#f1f0f5' }} visible={show_delete} animation='door' onClose={() => set_show_delete(false)}>
                    <div className='modal_header'>
                        탈퇴할 아이디  :  {change_psw.id}
                        </div><br/>
                    <div className='modal_body'>
                        탈퇴 하겠습니까?<br/><br/><br/>
                    </div>
                    <div className='modal_btn_div'>
                        <button onClick={() => change_pwd_post()} className='modal_btn'>confirm</button>
                    </div>
                </Rodal>
                {/* 모달창 끝 */}

            </div>
            <div className='admin_body_footer'>
                    <Btn_page />
                </div>

        </div>
    )
}

export default React.memo(Usermanage);
