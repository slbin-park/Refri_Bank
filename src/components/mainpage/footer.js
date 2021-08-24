import React from 'react';
import '../../style/mainpage/footer/footer.css';

function footer({ ftable, history, page_slice }) {
  const Show = () => {
    let psum_li = [];
    let four_li = [];
    // console.log(ftable);

    {
      ftable &&
        ftable.slice(page_slice.start, page_slice.end).map(({ FoodId, FoodV, FoodN, FoodT, FoodC }, index) => {
          four_li.push(
            <div key={FoodId} className="footer_block" onClick={() => history.push('/recipe/' + FoodId)}>
              <div className="footer_food">
                <img className="footer_food_img" src={FoodV} />
              </div>
              <div className="footer_text">
                <p className="footer_text_style1"> {FoodN} </p>
                <p className="footer_text_style2">
                  {' '}
                  {FoodC && FoodC.includes('.') ? (FoodC.includes('kcal') ? FoodC : FoodC + 'l') : ''} <br />
                </p>
                <p className="footer_text_style3"> {FoodT} </p>
              </div>
            </div>,
          );
          if ((index + 1) / 4 >= 1 && (index + 1) % 4 == 0) {
            psum_li.push(<div className="food_four_box">{four_li}</div>);
            four_li = [];
          }
        });
    }
    return psum_li;
  };

  return (
    <>
      <div className="food_big_block">
        <Show />
        {/*  footer_block 하나가 음식 박스 한개  */}
      </div>
    </>
  );
}

export default React.memo(footer);
