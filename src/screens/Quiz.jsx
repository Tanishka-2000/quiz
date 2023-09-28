import React from 'react'
import { FloatingDiv, Header, Question } from '../components'

function Quiz() {
  return (
    <div>
      <Header icon='line.png' iconType='icon'></Header>
      <FloatingDiv>
        <Question question='hello, how are you?' number={13} total={20} correct={5} wrong={7} />
      </FloatingDiv>
    </div>
  )
}

export default Quiz