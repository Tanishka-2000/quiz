import React from 'react'
import { FloatingDiv, Header, QuizResult, Score, Controls } from '../components'
import { useLocation } from 'react-router-dom'

function Result() {
  const { state } = useLocation()
  return (
    <div>
      <Header><Score points={(100/state.total) * state.correct}/></Header>
      <FloatingDiv>
        <QuizResult complete={100} total={state.total} correct={state.correct} wrong={state.wrong}/>
      </FloatingDiv>
      <Controls />
    </div>
  )
}

export default Result