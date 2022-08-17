import React,{ useEffect,useState,useRef  } from 'react'
import {gsap} from 'gsap'
import Banner from './home_modules/Banner';
import WantCurrency from './home_modules/WantCurrency';

const Landing=()=> {
const boxRef=useRef();
const h1Ref=useRef();
useEffect(()=>{
 
});

const actionMind=()=>{
  gsap.to(boxRef.current, 2,{ rotation: "+=360", repeat:-1});
  callH1();
}
const callH1=()=>{
gsap.to(h1Ref.current,3.5,{x:360,duration:2,stagger:1,repeat:-1});

}

  return (
    <div>
      <div className='card'> <Banner/> <button className=' buttonHome'> click for more</button></div>
       <WantCurrency/>
      <h1>Want to apply for a currency conversion?</h1>
      <h1 > Request for a vangti dealer at you home?</h1>
      <h2 > Request for a loan agent at you doorstep?</h2>
      <h2 > Request for a insurance agent at you home?</h2>
      <h1 ref={h1Ref} >Features</h1>
      <button onClick={actionMind} className='btn btn-danger'>click here</button>
      <ul>
        <li >Track application</li>
        <li>get loan agent on online request</li>
        <li>get Insurance agent on request application</li>
        <li>Get Currency dealer at your doorstep within 1 hour of request</li>
        <li>Send Overseas money from money point</li>
      </ul>


    </div>
  )
}

export default Landing