import React, { useState } from 'react'
import { FloatingDiv, Header, Option, Question } from '../components'

function Quiz() {
  const [show, setShow] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [currentQues, setCurrentQues] = useState(1);
  const [selected, setSelected] = useState("");

  const nextQues = () => {
    setShow(false)
    selectAnswer("")
  }

  const selectAnswer = (option) => {
    setSelected(option)
    setShow(true)
  }

  return (
    <div className='quiz'>
      <Header icon='line.png' iconType='icon'></Header>
      <FloatingDiv>
        <Question question='hello, how are you?' number={currentQues} total={20} correct={correct} wrong={currentQues - correct - 1} show={show} setShow={setShow} />
      </FloatingDiv>
      <ol className='options'>
        <Option optionText='come' correct='come' selected={selected} selectAnswer={selectAnswer} show={show} />
        <Option optionText='comes' correct='come' selected={selected} selectAnswer={selectAnswer} show={show} />
        <Option optionText='are coming' correct='come' selected={selected} selectAnswer={selectAnswer} show={show} />
        <Option optionText='came' correct='come' selected={selected} selectAnswer={selectAnswer} show={show} />
      </ol>
      <div className='btn-container'>
        <button className='nxt-btn' disabled={!show}>Next Question</button>
      </div>
    </div>
  )
}

export default Quiz