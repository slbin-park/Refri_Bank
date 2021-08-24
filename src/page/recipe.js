import React, { useState, useEffect } from 'react';
import Thumbnail_info from '../components/recipe/tbninfo';
import Recipe_info from '../components/recipe/rcpinfo';
import '../style/recipe/recipe.css';

//이거 대문자로 해야함!!
import Axios from 'axios';

const App = ({ location, information }) => {
  const foodid = location.pathname.split('pe/')[1];
  const [data, setdata] = useState([]);

  useEffect(() => {
    Axios.post('https://qkrtmfqls.gabia.io/getrcp/' + foodid, {
      id: foodid
    })
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [information]);

  return (
    <div className="recipe_page_body_form">
      {data != '' ? <Thumbnail_info information={information} data={data}></Thumbnail_info> : ''}
      {data && <Recipe_info data={data} information={information}></Recipe_info>}
    </div>
  );
};

export default App;
