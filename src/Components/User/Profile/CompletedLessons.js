import React, {Component} from 'react';
import {  RadialChart  } from 'react-vis';

import './Profile.css'
//use react vis instead of canvas, Tyler
class CompletedLessons extends Component{
    render(){
        const data = [
                        {angle: 1, label: 'Not started'}, {angle: 5, label: 'Completed'}
                      ];
                    return( 
                            
                            <RadialChart data={data}
                            width={250}
                            height={250}/>
                            
                        
                    )
                }
            }
        

export default CompletedLessons


