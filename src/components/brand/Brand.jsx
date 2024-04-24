import React from 'react';
import './brand.css';
import { google,shopify,dropbox,slack,atlassian } from './import'

const Brand = () => {
  return (
    <div className='synapsehub__brand section__padding'>
      <div className='synapsehub__brand-logo'>
        <img src={google} alt='google'/>
      </div>
      <div className='synapsehub__brand-logo'>
        <img src={shopify} alt='shopify'/>
      </div>
      <div className='synapsehub__brand-logo'>
        <img src={dropbox} alt='dropbox'/>
      </div>
      <div className='synapsehub__brand-logo'>
        <img src={slack} alt='slack'/>
      </div>
      <div className='synapsehub__brand-logo'>
        <img src={atlassian} alt='atlassian'/>
      </div>
    </div>
  )
}

export default Brand