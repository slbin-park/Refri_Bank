import '../../style/category/profile.css';
import num1 from '../../img/profile_img/num1.jpeg';
import num2 from '../../img/profile_img/num2.jpeg';
import num3 from '../../img/profile_img/num3.jpeg';
import num4 from '../../img/profile_img/num4.jpeg';
import num5 from '../../img/profile_img/num5.jpeg';
import React, { useState } from 'react';

import Skeleton from 'react-loading-skeleton';

const Profile =({})=> {
    
    return (
            <div className="wrapper">
                <div className="team">
                    <li className="team-item">
                        <div className="profile">
                            <img src={num1} ></img>
                            {/* <div style={{fontSize: 300, lineHeight: 2 }}> */}

                            {/* <Skeleton count={1}  ></Skeleton> */}
                        
                            {/* </div> */}

                            <div className="profile-contents">
                                <h2 className="name1">Jaeny</h2>
                                <h3 className="job1">Back-end</h3>
                                <p className="coffee1">Drink : Americano </p>
                                <p className="myself1">"Want to become a person who is good at everything, not just a person who works hard"</p>
                            </div>
                        </div>
                    </li>

                    <li className="team-item">
                        <div className="profile">
                            <img src={num2}></img>
                            <div className="profile-contents">
                                <h2 className="name2">Bonin</h2>
                                <h3 className="job2">Back-end</h3>
                                <p className="coffee2">Like : vacation</p>
                                <p className="myself2">"Live roughly"</p>
                            </div>
                        </div>
                    </li>

                    <li className="team-item">
                        <div className="profile">
                            <img src={num3}></img>
                            <div className="profile-contents">
                                <h2 className="name3">SexyPig</h2>
                                <h3 className="job3">Front-end</h3>
                                <p className="coffee3">Drink : Icetea shot chuga </p>
                                <p className="myself3">"The way to get started something is to quit talking and begin doing first"</p>
                            </div>
                        </div>
                    </li>

                    <li className="team-item">
                        <div className="profile">
                            <img src={num4}></img>
                            <div className="profile-contents">
                                <h2 className="name4">Kate </h2>
                                <h3 className="job4">Front-end</h3>
                                <p className="coffee4">Hobby : Swimming </p>
                                <p className="myself4">" 나 뭐해야 해 ? "</p>
                            </div>
                        </div>
                    </li>

                    <li className="team-item">
                        <div className="profile">
                            <img src={num5}></img>
                            <div className="profile-contents">
                                <h2 className="name5">Binu </h2>
                                <h3 className="job5">Designer</h3>
                                <p className="coffee5">Love : Bebe </p>
                                <p className="myself5">"Want to be a designer who gives people a chance to choose better things"</p>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
    )
}

export default React.memo(Profile);