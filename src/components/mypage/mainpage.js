import React, { useState, useEffect } from "react";
import '../../style/mypage/sidebar.css';
import '../../style/mypage/body.css';
import '../../style/mypage/index.css'
import { Card, CardContent, Subtitle2, Chip,H6,  Body2, CardAction, Button } from 'ui-neumorphism'
import '../../style/mypage/index.css'

import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
import Axios from 'axios';

function Bodymain({ like_count}) {
    return (
        <div className='body_mypage'>
            <div className='body_content'>
                <div className='body_card_all'>
                    <div className='body_card_one'>
                        <Card>
                            <CardContent>
                                <div className='body_card_header'>

                                        방문수

                                </div>
                                <div className='body_card_footer'>
                                    <div className='body_card_icon'>
                                
                            </div>
                                    <div className='chip_number'>
                                        <Chip type='info'>1</Chip>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>
                    </div>              
                    <div className='body_card_one'>
                        <Card>
                            <CardContent>
                                <div className='body_card_header'>

                                        좋아요수

                                </div>
                                <div className='body_card_footer'>
                                    <div className='body_card_icon'>
                                
                            </div>
                                    <div className='chip_number'>
                                        <Chip type='info'>{like_count}</Chip>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>
                    </div>                           <div className='body_card_one'>
                        <Card>
                            <CardContent>
                                <div className='body_card_header'>

                                        방문수

                                </div>
                                <div className='body_card_footer'>
                                    <div className='body_card_icon'>
                                
                            </div>
                                    <div className='chip_number'>
                                        <Chip type='info'>1</Chip>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>
                    </div>    
                </div>
                <div className='body_main'>
                </div>

                <div className='body_footer'>
                </div>
            </div>

        </div>
    )
}

export default React.memo(Bodymain);
