import { useNavigate } from 'react-router-dom'
import './styles.css'

function Header({ name, icon, iconType, children }) {
  const navigate = useNavigate();

  return (
    <div className='header'>
        <div className='circle big' aria-hidden='true'></div>
        <div className='circle big' aria-hidden='true'></div>
        <div className='circle big' aria-hidden='true'></div>
        <div className='circle small' aria-hidden='true'></div>
        <div className='top-bar'>
            <button
             className='back'
             onClick={() => navigate(-1)}>
              <span className="material-symbols-outlined">arrow_back</span>
              </button>
            <p>{ name || ""}</p>
            { icon && <img className={iconType === 'icon' ? 'icon' : 'avatar'} src={icon}/>}
        </div>
    { children }
    </div>
  )
}

export default Header