import React, {useState} from 'react'

const Func_noticecontent_show_noticecontent = ({history, location}) => {

    const [eachnotice_content, seteachnotice_content] = useState({});

    seteachnotice_content(location.props)
    // console.log(eachnotice_content)
    // return (
        
    // );
}

export default Func_noticecontent_show_noticecontent;