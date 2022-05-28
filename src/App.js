import React from 'react';

import { Navbar, LandingPage, Footer } from './components';
import { Aboutus, Menu } from './containers';

const App  = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Aboutus />
      <Menu />
      <Footer />
    </div>
  )
}

export default App;
