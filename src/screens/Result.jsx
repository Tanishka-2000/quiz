import React from 'react'
import { Header, Score } from '../components'

function Result() {
  return (
    <div>
      <Header><Score points={100}/></Header>
    </div>
  )
}

export default Result