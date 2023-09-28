import CircleIcon from '@mui/icons-material/Circle'
import './styles.css';

function QuizResult({complete, total, correct, wrong}) {
  return (
    <div className='quizResult'>
        <div className='complete'>
            <div className='scr'>
                <CircleIcon sx={{fontSize: '14px', color: '#FFC102'}} />
                {complete}%
            </div>
            <p>Completion</p>
        </div>
        <div className='total'>
            <div className='scr'>
                <CircleIcon sx={{fontSize: '14px', color: '#FFC102'}}/>
                {total}
            </div>
            <p>Total Question</p>
        </div>
        <div className='correct'>
            <div className='scr'>
                <CircleIcon sx={{fontSize: '14px', color: '#1F8435'}}/>
                {correct > 9 ? correct : '0' + correct}
            </div>
            <p>Correct</p>
        </div>
        <div className='wrong'>
            <div className='scr'>
                <CircleIcon sx={{fontSize: '14px', color: '#FA3939'}}/>
                {wrong > 9 ? wrong : '0' + wrong}
            </div>
            <p>Wrong</p>
        </div>
    </div>
  )
}

export default QuizResult