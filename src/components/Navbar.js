import React, { useState } from "react";
import '../styles/Navbar.css'
import Logo from '../assets/logoo.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
  <div className='navbar'>
      <div className='logo' id={openLinks ? "open" : "close"}>
        <img src={Logo}/>
        </div>
        <div className={`hiddenLinks ${openLinks ? 'visible' : 'hidden'}`}>
        <Link to=''> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/reservation'> Reservation </Link>
        <Link to='/about.us'> About us </Link>
      </div>
      <div className='rightSide'>
        <Link to=''> Home </Link>
        <Link to='/menu'> Menu </Link>
        <Link to='/reservation'> Reservation </Link>
        <Link to='/about.us'> About us </Link>
        <button onClick={toggleNavbar}>
        <i class="bi bi-card-list"></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar
