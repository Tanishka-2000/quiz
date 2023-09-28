import WrongIcon from '@mui/icons-material/Cancel'
import CorrectIcon from '@mui/icons-material/CheckCircle'
import './styles.css'

function Option({ optionText, correct, selected, selectAnswer, show }) {
  const handleClick = () => {
    selectAnswer(optionText)
  }

  return (
    <li className="option-item" onClick={handleClick}>
      <span>{ optionText }</span>
      { show && 
        (optionText === correct 
        ? <CorrectIcon sx={{color: '#FEC100'}}/>
        : (optionText === selected
        ? <WrongIcon color='error'/>
        : ''))}
    </li>
  )
}

export default Option