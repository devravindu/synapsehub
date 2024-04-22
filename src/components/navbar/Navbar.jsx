import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='synapsehub__navbar'>
    <div className='synapsehub__navbar-links'>
      <div className='synapsehub__navbar-links_logo'>
        <img 
          src={logo}
          alt='logo'
        />
      </div>
    </div>
    </div>
  )
}

export default Navbar