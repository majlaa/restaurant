import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1 className='header strong'>Fine dining</h1>
        <p>It’s time to enjoy the finer things in life</p>
        <Link to='/reservation'>
        <button>Book a table</button>
        </Link>
        </div>
    </div>
  )
}

export default Home
