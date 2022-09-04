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
      <div className='card cbody'>
        <div className='card-title fade-up d-flex justify-content-center'>
          <h3>Request for a currency conversion dealer</h3>
          
        </div>
        <div className='card-body '>
          <Dealer/>
          </div>
      </div>  
      <div className='card'>
        <div className='card-title d-flex justify-content-center'>
          <h3> live currency conversion table</h3>
        </div>
        <iframe src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&roundedCorners=true&pairs=1,3,2,4,7,5,8,6,9,10,49,11" width="100%" height="100%" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>
        <div className="poweredBy d-flex justify-content-center">Powered by <a href="/" target="_blank" rel="nofollow">Vangti.com</a></div>
      </div>  
     
    </div>
  )
}

export default Currency