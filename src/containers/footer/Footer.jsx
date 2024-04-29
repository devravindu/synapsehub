import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='synapsehub__footer section__padding' id='footer'>
      <div className='synapsehub__footer-heading'><h1 className='gradient__text'>Do you want to step in to the future before others</h1></div>
      <div className='synapsehub__footer-button'>
        <p>Request Early Access</p>
      </div>

      <div className='synapsehub__footer-links'>
        <div className='synapsehub__footer-links_logo'>
          <img src={logo} alt='Logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='synapsehub__footer-links-container'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='synapsehub__footer-links-container'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='synapsehub__footer-links-container'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='synapsehub__footer-copyright'>
        <p>© 2024 SynapseHub. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer