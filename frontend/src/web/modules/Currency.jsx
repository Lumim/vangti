import React,{useState,useEffect,useRef} from 'react'
import Conversion from './currency_modules/Conversion';
import Dealer from './currency_modules/Dealer';
import {gsap} from 'gsap'
const Currency=()=> {
const Curr = useRef();
  return (
    <div className='container conversion'>
      <div className='card'>
          <div className='card-title d-flex justify-content-center'>
              <h3 ref={Curr}> Currency Converter module</h3>
             
          </div>
          <div className='card-body'>
          <Conversion/>
          </div>
      </div>
      <div className='card'>
        <div className='card-title fade-up d-flex justify-content-center'>
          <h3>Request for a currency conversion dealer</h3>
          
        </div>
        <div className='card-body'>
          <Dealer/>
          </div>
      </div>  
      <div className='card'>
        <div className='card-title'>
          <h3> live currency conversion table</h3>
        </div>
      </div>  
     
    </div>
  )
}

export default Currency