import { Link } from 'react-router-dom';
import "./styles.css";

function Card({ name, icon}) {
  return (
    <Link to='quiz'>
      <div className='card'>
          <p>{ name }</p>
          <img src={icon}/>
      </div>
    </Link>
  )
}

export default Card