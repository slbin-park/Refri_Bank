import React, { useState, useEffect } from "react";
import Thumbnail_info from "../components/recipe/tbninfo";
import Recipe_info from "../components/recipe/rcpinfo";
import "../style/recipe/recipe.css";

//이거 대문자로 해야함!!
import Axios from 'axios';


const App = ({ location, history, match, recipe_set_page,information}) => {
    const foodid = location.pathname.split('pe/')[1];
    const [data,setdata] = useState([]);
    const [click_like,setclick_like] = useState(false);
    
    useEffect(()=>{
        // post요청 2번 할것같은데
        // 이게 만약 새로고침을 한다
        // let id = ''
        // if(information.id != ''){
        //     id = information.id
        // }
        Axios.post("https://qkrtmfqls.gabia.io/getrcp/" + foodid, {
            id: foodid,
            userid : information.id
        })
            .then((response) => {
                setclick_like(response.data.check)
                setdata(response.data.data);
            })
            .catch((error) => {
                console.log(error); 
            });
    },[information])

    return (
        <div className="recipe_page_body_form">
            {data != '' ? <Thumbnail_info click_like={click_like} setclick_like={setclick_like} information={information} data={data} ></Thumbnail_info> : ''}
            {data && <Recipe_info data={data} information={information}></Recipe_info>}
        </div>
    )
}

export default App;
