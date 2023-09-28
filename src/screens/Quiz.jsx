import { useMemo, useRef, useState } from 'react'
import {   useQuery } from '@tanstack/react-query';
import { FloatingDiv, Header, Option, Question } from '../components'
import { getQuiz } from '../apis';
import { useNavigate, useParams } from 'react-router-dom';

function Quiz() {
  const [show, setShow] = useState(false);
  const [currentQues, setCurrentQues] = useState(0);
  const [selected, setSelected] = useState("");
  const result = useRef({completed:0 , correct: 0, wrong: 0, total: 20});
  const navigate = useNavigate();
  const {category} = useParams();

  const { data, isLoading } = useQuery({ 
    queryKey: ['quiz', category],
    queryFn: () => getQuiz(category)
  })

  const nextQues = () => {
    // todo
    setShow(false)
    setSelected("")
    if( currentQues + 1 === data.length) {
      navigate('/result', { state: result.current})
    }
    setCurrentQues(p => p+1)
  }

  const selectAnswer = (choice) => {
    if(show) return;
    setSelected(choice)

    // save result
    result.current.completed++;

    choice === data[currentQues].correct_answer
    ? result.current.correct++
    : result.current.wrong++;

    console.log(result.current)

    // show result
    setShow(true)
  }

  if(isLoading){
    return <p>...Loading</p>
  }
  

  const options = [...data[currentQues].incorrect_answers];
  options.splice(currentQues % 4, 0, data[currentQues].correct_answer)

  return (
    <div className='quiz'>
      <Header icon='line.png' iconType='icon'></Header>
      <FloatingDiv>
        <Question question={data[currentQues].question} number={currentQues + 1} total={result.current.total} correct={result.current.correct} wrong={result.current.wrong} show={show} selectAnswer={selectAnswer} />
      </FloatingDiv>
      <ol className='options'>
        {
          options.map(answer => 
            <Option key={answer} optionText={answer} correct={data[currentQues].correct_answer} selected={selected} selectAnswer={selectAnswer} show={show} />
            )
        }
      </ol>
      <div className='btn-container'>
        <button
         className='nxt-btn'
         disabled={!show}
         onClick={nextQues}
         >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default Quiz