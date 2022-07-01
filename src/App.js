import React from 'react';
import Signup from './FormComp/Signup';
import './App.css';


function App() {
  return (
    <div className='page'>
      <div className='container-lg container-fluid d-flex flex-md-row flex-column align-items-center justify-content-md-around '>
      <div className='column1 d-flex flex-column align-items-center justify-content-center mt-5 mt-md-0'>
      <h1 className='fw-bold mx-lg-5  text-sm-start text-center'>Learn to code by watching others</h1>
      <p className='mx-lg-5 mx-2 mt-5 text-sm-start text-center'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className='column2 d-flex flex-column justify-content-center px-sm-2  mb-5 mb-md-0'>
        <div  className='py-3 mb-4  promo-button text-center'><p className='mb-0'>Try it free 7 days <span>then $20/mo. thereafter</span></p> </div>
      <Signup/>
      </div>
      </div>
    </div>
  
  );
}

export default App;
