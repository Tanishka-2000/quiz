import PlayAgainIcon from '@mui/icons-material/Replay'
import ReviewIcon from '@mui/icons-material/Visibility'
import ShareIcon from '@mui/icons-material/Share'
import PdfIcon from '@mui/icons-material/PictureAsPdf'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import './styles.css'

function Controls() {
  return (
    <div className='controls'>
        <div className='item'>
            <div className='icon'>
                <PlayAgainIcon sx={{color:'white'}} />
            </div>
            <p>Play Again</p>
        </div>
        <div className='item'>
            <div className='icon'>
                <ReviewIcon sx={{color:'white'}} />
            </div>
            <p>Review Answers</p>
        </div>
        <div className='item'>
            <div className='icon'>
                <ShareIcon sx={{color:'white'}} />
            </div>
            <p>Share Score</p>
        </div>
        <div className='item'>
            <div className='icon'>
                <PdfIcon sx={{color:'white'}} />
            </div>
            <p>Generate PDF</p>
        </div>
        <div className='item'>
            <div className='icon'>
                <HomeIcon sx={{color:'white'}} />
            </div>
            <p>Home</p>
        </div>
        <div className='item'>
            <div className='icon'>
                <SettingsIcon sx={{color:'white'}} />
            </div>
            <p>LeaderBoard</p>
        </div>
    </div>
  )
}

export default Controls