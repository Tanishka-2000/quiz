import './styles.css'

function PerformersList({ list, other }) {
  return (
    <ul className='performers'>
        {
            list.map((performer, i) => 
                <li key={performer.rank}>
                    <span>{performer.rank > 8 ? performer.rank : '0'+ performer.rank}</span>
                    <img src={performer.image} />
                    <span>{performer.name}</span>
                    <span className='points'>{performer.points}pt</span>
                </li>
                )
            }
            <li className='other'>
                <span>{other.rank > 8 ? other.rank : '0'+ other.rank}</span>
                <img src={other.image} />
                <span>{other.name}</span>
                <span className='points'>{other.points}pt</span>
            </li>
    </ul>
  )
}

export default PerformersList