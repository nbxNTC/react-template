import React from 'react'

import './styles.css'

import Card from './components/Card'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="content">
        <h1>Welcome to the home page!</h1>
        <Card />
      </div>
    </div>
  )
}

export default Home