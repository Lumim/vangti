import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function ProtectedLayout
() {
 const logo = require('../assets/logo.png')
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-link" to="/"><img height={100} src={logo}/></Link> 

            <div className="collapse navbar-collapse float-right" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 
                <li className="nav-item">
                    <Link className="nav-link" to="/loan">Apply Loan</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/currency">Currency Converter</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/insurance">Get Insurance</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
               
                </form>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default ProtectedLayout
