import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'
import Data from '../extra/Types';
function ProtectedLayout
() {
 const logo = require('../assets/logo.png')
 const headers = Data.SancHeaders;

 var name;
 
 const navigate = useNavigate();
 
 useEffect(()=>{
   checkServer();
   checkUser();
 },[localStorage])
 const checkUser=()=>{
    name=localStorage.getItem('user');
    //console.log(name+"SDASD")
    
     if(name == null || name== ""){
        navigate('/login')
        } 
  }

  const checkServer =async()=>{ 
    await axios.get(Data.url+'api/check',{
      headers}
      ).catch(function (error) {
      console.log(error.toJSON())})
      .then(response=>{
        if(response.data.success){
          return "ok"
          console.log(response.data.success)
        }
        else{
          navigate('/login')
        }
      }
        
        )
  }



  const Logout = ()=>{
   
    localStorage.clear();
    navigate('/')
    

  }
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-link" to="/dashboard"><img height={100} src={logo}/></Link> 

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <div className='d-flex justify-content-center'>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Apply Loan</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/currency">Currency Converter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/insurance">Get Insurance</Link>
                    </li>
                </div>
               
                </ul>
               
               
               
            </div>
            <div className='nav-item d-flex justify-content-end'>
                     
                     <Link to='/'>{localStorage.getItem('user')}</Link>
                   
                    
                   <button className='btn btn-primary' onClick={Logout} >Log out</button>
                    
               </div>
        </nav>

       
        <Outlet/>
        <footer className="bg-light text-center text-lg-start">
         
         <div className="text-center p-3">
           © 2022 Copyright:
           <a className="text-dark" href="/">vangti.com</a>
         </div>
       
       </footer>
    </>
  )
}

export default ProtectedLayout
