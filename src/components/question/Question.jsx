import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import './styles.css'

function Question({ question, number, total, correct, wrong, show, selectAnswer }) {
    const [timeLeft, setTimeLeft] = useState(20);
    let timer;
    useEffect(() => {
        function startTimer(){ 
            if(timeLeft === 0) {
                clearInterval(timer)
                selectAnswer("")
            }else setTimeLeft(p => p-1)
        }

        timer = setInterval(startTimer, 1000);
        return () => clearInterval(timer);
    })

    useEffect(() => {
        if(show && timer) clearInterval(timer);
    }, [show])

    useEffect(() => {
        setTimeLeft(20)
    }, [question])

    return (
        <div className='question'>
            <div className='top'>
                <div className='correct'>
                    <span>{correct > 9 ? correct : '0' + correct}</span>
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
                        sx={{ height: '8px', borderRadius: '4px',  width: ((wrong/total) * 100 + 'px')}}
                    />
                    <span>{wrong > 9 ? wrong : '0' + wrong}</span>
                </div>
            </div>
            <div className='middle'>Questiions { number }/{ total }</div>
            <div className='ques'>{ question }</div>
        </div>
    )
}

export default Question