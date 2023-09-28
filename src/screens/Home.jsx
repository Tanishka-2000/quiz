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
      <div className='explore'>
        <div className='top'>
          <h2>Explore</h2>
          <button>View all</button>
        </div>
        <div className='grid'>
          <Category name='Space' icon='space.png' />
          <Category name='History' icon='history.png' />
          <Category name='Sports' icon='sports.png' />
          <Category name='Space' icon='space.png' />
          <Category name='History' icon='history.png' />
          <Category name='Sports' icon='sports.png' />
          <Category name='Space' icon='space.png' />
          <Category name='History' icon='history.png' />
          <Category name='Sports' icon='sports.png' />
        </div>
      </div>
    </div>
  )
}

export default Home