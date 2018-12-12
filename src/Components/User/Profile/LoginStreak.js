import React, {Component} from 'react';
import {  XYPlot, HeatmapSeries,YAxis, XAxis } from 'react-vis';


class LoginStreak extends Component{
    render(){
        const myData = [
            {x: 1, y: 0},
            {x: 2, y: 2},
            {x: 3, y: 4},
            {x: 4, y: 0},
            {x: 5, y: 0},
            {x: 6, y: 5},
            {x: 7, y: 3},
          ]
                    return( 
                            <XYPlot 
                            width={250}
                            height={250}>
                            <HeatmapSeries data={myData}
                            />
                            <YAxis/>
                            <XAxis/>
                            </XYPlot>
                            
                        
                    )
                }
            }
        

export default LoginStreak
