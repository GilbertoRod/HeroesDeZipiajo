import React from 'react';
import './Hero.css';

function Hero() {
  
  return (
    <>
    
    <div className='hero-body'>
      <div className='hero-container' data-aos="zoom-in">
        <h1 className='hero-title' >Heroes de Zipiajo</h1>
        <h3 className='hero-subtitle'>Construyendo Futuros Brillantes</h3>
        <br/>
        <div className='btn-div'>
          <a href='/donations'><button className="donate-btn">Donations</button></a>
        </div>
      </div>
    </div>
        
        

    
    
    </>
  )
}

export default Hero