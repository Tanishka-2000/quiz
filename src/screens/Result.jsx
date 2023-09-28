import React from 'react'
import { FloatingDiv, Header, QuizResult, Score, Controls } from '../components'

function Result() {
  return (
    <div>
      <Header><Score points={100}/></Header>
      <FloatingDiv>
        <QuizResult complete={100} total={20} correct={13} wrong={7}/>
      </FloatingDiv>
      <Controls />
    </div>
  )
}

export default Result