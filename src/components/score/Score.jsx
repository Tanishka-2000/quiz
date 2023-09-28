import './styles.css'

function Score({ points }) {
  return (
    <div className='score-container'>
        <div className='score'>
           <p>Your Score <span className='pt'>{ points }</span> pt</p>
        </div>
    </div>
  )
}

export default Score