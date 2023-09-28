import React from 'react'
import { Header, Topers } from '../components'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header icon='avatar.png' iconType='image'>
        <div className='nav'>
          <div className='active'>Today</div>
          <div>Month</div>
          <div>All Times</div>
        </div>
        <Topers />
      </Header>
    </div>
  )
}

export default Dashboard