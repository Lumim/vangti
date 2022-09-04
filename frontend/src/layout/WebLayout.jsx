import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const WebLayout=()=> {

 

  const logo = require('../assets/logo.png')
  return (
    <>
<nav>
      
        <ul className="nav justify-content-center bg-dark">
            <Link class="navbar-brand" to="/">
            <img  src={logo} width="75" height="75" alt=""/>
            </Link>
            <li   className="nav-item align-middle">
                <Link id="nav_item" className="nav-link align-middle" to="/login">Login</Link>
            </li>
            <li  className="nav-item">
                <Link  id="nav_item" className="nav-link" to="/register">Register</Link>
            </li>
            
          
        </ul>
         
        <Outlet/>
 </nav>
 <footer className="bg-light text-center text-lg-start relative-bottom">
         
         <div className="text-center p-3">
           © 2022 Copyright:
           <a className="text-dark" href="/">vangti.com</a>
         </div>
       
       </footer>   
 </>
 
   
  )
}

export default WebLayout