import React, { Component } from "react";
import {Text} from 'react-native'


export default class Timer extends Component {
   
    constructor() {
        super();
        this.state = {
            minutes: 2,
            seconds: 0
        };
        this.time = this.time.bind(this);
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }));
                }
            }
        }, 1000);
    }

    time() {
        this.setState(() => ({
            minutes: 2,
            seconds: 0
        }))    
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
           <>
                {minutes === 0 && seconds === 0 ? 
                    
                  <Text>Time up</Text>
                 : (
                       
                        <Text style={{ fontSize: 25 }}> Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>    
                
                    )}
                    </>
        );
    }
}

