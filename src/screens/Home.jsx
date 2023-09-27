import React from 'react'
import { Header, Category } from '../components'

function Home() {
  return (
    <div className='home'>
      <Header icon='avatar.png' name='Hello Kirat' iconType='image'>
        <div className='popular'>
          <h2>Popular</h2>
          <div className='grid'>
            <Category name='Space' icon='space.png' />
            <Category name='History' icon='history.png' />
            <Category name='Sports' icon='sports.png' />
          </div>
        </div>   
      </Header>
      <div>Home</div>
    </div>
  )
}

export default Home