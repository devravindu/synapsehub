import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
        <p><a href="#home">Home</a></p>
        <p><a href="#synapseHub">SynapseHub?</a></p>
        <p><a href="#openai">Open AI</a></p>
        <p><a href="#casestudies">Case Studies</a></p>
        <p><a href="#library">Library</a></p>
  </>
)

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false)
  return (
    <div className='synapsehub__navbar'>
    <div className='synapsehub__navbar-links'>
      <div className='synapsehub__navbar-links_logo'>
        <img 
          src={logo}
          alt='logo'
        />
      </div>
      <div className='synapsehub__navbar-links_container'>
      <Menu />
        </div>
    </div>
    <div className='synapsehub__navbar-sign'>
      <p>Sign In</p>
      <button type='button'>Sign up</button>
    </div>
    <div className='synapsehub__navbar-menu'>
      {togglemenu ? <RiCloseLine color='#fff' size={27} onClick={() => setTogglemenu(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setTogglemenu(true)} />}

      {togglemenu && (<div className='synapsehub__navbar-menu_container scale-up-center'>
      <div className='synapsehub__navbar-menu_container-links'>
      <Menu />
      <div className='synapsehub__navbar-menu_container-links-sign'>
      <p>Sign In</p>
      <button type='button'>Sign up</button>
    </div>
      </div>
        
      </div>)}
      </div>
    </div>
  )
}

export default Navbar