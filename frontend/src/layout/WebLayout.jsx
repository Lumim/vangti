import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function WebLayout() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-link" to="/"> Vangti</Link> 

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 
                <li className="nav-item">
                    <Link className="nav-link" to="/loan">Apply Loan</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/currency">Currency Converter</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/insurance">Get Insurance</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
               
                </form>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default WebLayout