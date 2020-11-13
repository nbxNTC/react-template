import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import Card from './components/Card'

const Home = () => {
  return (
    <div className='home-container'>
      <div className="content">
        <h1>Welcome to the home page!</h1>
        <Card />

        <h1>Exemplos</h1>

        <ul>
          <li><Link to='/forms'>Formulário</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home