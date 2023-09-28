import React from 'react'
import { Header, PerformersList, Topers } from '../components'

const list = [
  {
    rank: 1,
    name: 'Moni',
    image: 'person4.png',
    points: 223
  },
  {
    rank: 2,
    name: 'Esha',
    image: 'person5.png',
    points: 160
  },
  {
    rank: 3,
    name: 'Kaosar',
    image: 'person6.png',
    points: 140
  },
  {
    rank: 4,
    name: 'Sam',
    image: 'person7.png',
    points: 130
  },

];

const other =   {
  rank: 18,
  image: 'person8.png',
  points: 120
}

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
      <PerformersList list={list} other={other}/>
    </div>
  )
}

export default Dashboard