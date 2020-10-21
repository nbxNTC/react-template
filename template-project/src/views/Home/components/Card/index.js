import React from 'react'

import './styles.css'

const Card = () => {
  return (
    <div className='card-container'>
      <div className='image'>
        <img src="https://avatars1.githubusercontent.com/u/39653977?s=460&u=b743f5ad876600b9ba08c0d98fa0738d4c063302&v=4" alt="my-selfie"/>
      </div>

      <div className='content'>
        <h1>Mario Sergio</h1>
        <p>
          I love working as frontend developer and designer. Currently i'm working as full stack developer at Codigo Font and seeking improve my knowledgment in UI/UX.
          I also like games so much and i'm studying how to make them in Unity.
          I'm currently a student of computer science at UFV - Florestal. 
        </p>
        <p><a href="https://github.com/nbxNTC">My GitHub</a></p>
      </div>
    </div>
  )
}

export default Card