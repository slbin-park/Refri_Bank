import React, { useState, useEffect } from "react";
import '../style/adminpage/adminpage.css';

import Sidebar from '../components/adminpage/Sidebar';
import Usermanage from '../components/adminpage/Usermanage'; //유저관리
import Notice from '../components/adminpage/Notice'

function Admin({ history }) {
    const [admin_page,set_admin_page] = useState('user')
    return (
        <div className="admin_main" style={{ height: '900px' }}>
            <div className='admin_main_div'>
                <Sidebar set_admin_page={set_admin_page}/>
                {admin_page == 'user'?<Usermanage />:''}
                {admin_page == 'notice'?<Notice />:''}
            </div>
        </div>
    )
}

export default Admin;
