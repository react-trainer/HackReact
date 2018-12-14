import React, {Component} from 'react';
import {  RadialChart  } from 'react-vis';
import CompletedLessonsTitle from './CompletedLessonsTitle';

import './Profile.css'
//use react vis instead of canvas, Tyler
class CompletedLessons extends Component{
    render(){ 
        const data = [
                        {angle: 1, color: 'rgb(140, 71, 170)'}, {angle: 5, color: 'rgb(212, 69, 200)'}
                      ];
                    return( 
                        <div>

                            
                            <RadialChart data={data}
                            width={225}
                            height={225}
                            colorType='literal'
                            />        
                            <CompletedLessonsTitle/>                               
                            </div>
                    )
                }
            }
        

export default CompletedLessons


