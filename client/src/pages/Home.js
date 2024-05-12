import React from 'react';

import Hero from './homeComponents/Hero';
import About from './homeComponents/About';
import Gallery from './homeComponents/Gallery';
import Footer from '../components/Footer';


function Home() {



  return (
    
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
  
    
  )
}

export default Home;