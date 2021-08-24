import React, { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';

import "../../style/recipe/recipe.css";

function recipe_info({ data }) {
    const create_table = () => {
        let count = 0
        let arr = [];
        for (let key in data[0]) {
            count += 1
            if (key.includes("RcpI") && data[0][key] !== null) {
                arr.push(
                    <>
                        <div className="alice-content-main-form">
                            <div className="alice-content-sub-form">
                                <div className="alice-content-img-form">
                                    <div className="alice-content-img-flex">
                                        <img src={data[0][key]} className="alice-content-img" />
                                    </div>
                                </div>
                                <div className="alice-content-text-form">
                                    <p>{data[0][key.replace("I", "T")]}</p>
                                </div>
                            </div>
                        </div>
                    </>
                );
            }
        }
        return arr;
    }


    return (
        <>
            <div className="recipe-info-main-title">
                Image & description of additional recipes
            </div>
            <div className="alice-main-form">
                <AliceCarousel>
                    {create_table()}
                </AliceCarousel>
            </div>
        </>
    )
}

export default recipe_info;