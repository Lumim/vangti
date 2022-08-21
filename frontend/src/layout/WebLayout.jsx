import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const WebLayout=()=> {
    const logo = require('../assets/logo.png')
  return (
<div>
      
        <ul className="nav justify-content-center">
            <li className="nav-item ">
                <Link className="nav-link active" to="/"><img className='' height={100} width={100} src={logo}/></Link>
            </li>
            <li className="nav-item align-middle">
                <Link className="nav-link align-middle" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
          
        </ul>
         
      
        <Outlet/>
    </div>
  )
}

export default WebLayout