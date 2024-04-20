import React from 'react';

import { Header, Blog, Fetures, WhatSynapseHub, Possibility, Footer } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatSynapseHub />
      <Fetures />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App