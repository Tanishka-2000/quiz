import React from 'react'
import { FloatingDiv, Header } from '../components'

function Quiz() {
  return (
    <div>
      <Header icon='line.png' iconType='icon'></Header>
      <FloatingDiv>
        <h1>I will float up in the header</h1>
      </FloatingDiv>
    </div>
  )
}

export default Quiz