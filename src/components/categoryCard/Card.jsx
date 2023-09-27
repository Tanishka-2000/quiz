import React from 'react'
import "./styles.css";

function Card({ name, icon}) {
  return (
    <div className='card'>
        <p>{ name }</p>
        <img src={icon}/>
    </div>
  )
}

export default Card