import React, {Component} from 'react';
import {  XYPlot, VerticalBarSeries,YAxis, XAxis } from 'react-vis';
import LoginStreakTitle from './LoginStreakTitle'


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
                        <div>

                            <XYPlot 
                            width={225}
                            height={225}>
                            <VerticalBarSeries data={myData}
                            color='rgb(212, 71, 200)'
                            />
                            <YAxis/>
                            {/* <XAxis/> */}
                            </XYPlot>
                           <LoginStreakTitle/>
                            </div>
                        
                    )
                }
            }
        

export default LoginStreak
