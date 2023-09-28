import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import './styles.css'

function Question({ question, number, total, correct, wrong }) {
    const [timeLeft, setTimeLeft] = useState(20);
    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            if(timeLeft === 0) clearInterval(timer)
            else setTimeLeft(p => p-1)
        }, 1000);
        return () => clearInterval(timer);
    })
    return (
        <div className='question'>
            <div className='top'>
                <div className='correct'>
                    <span>0{correct}</span>
                    <LinearProgress
                        variant="determinate"
                        color="success"
                        value={100}
                        sx={{ height: '8px', borderRadius: '4px', width: ((correct/total) * 100 + 'px')}}
                    />
                </div>

                <div className='timer'>
                    <CircularProgress variant="determinate" size={50} color='warning' value={(timeLeft/20) * 100} sx={{ color: '#FEC100'}}/>
                    <div className='timeLeft'>{timeLeft}</div>
                </div>

                <div className='wrong'>
                    <LinearProgress
                        variant="determinate"
                        color="error"
                        value={100}
                        sx={{ height: '8px', borderRadius: '4px',  width: ((correct/total) * 100 + 'px')}}
                    />
                    <span>0{wrong}</span>
                </div>
            </div>
            <div className='middle'>Questiions { number }/{ total }</div>
            <div className='ques'>{ question }</div>
        </div>
    )
}

export default Question