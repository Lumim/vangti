import React from 'react'
import {Link} from 'react-router-dom'


function Registration() {
  return (
    <div className='card'>
        <div className='text-justify'>
                <h1 className='text-center'>Registration for Vangti</h1>        
        </div>
        <form>
            <div className='ms-2 mb-2 card-body form-group col-md-3'>
                <label className='form-label col-md-4'>
                        User Full Name:
                </label>
                <input className='form-control ml-2' type="text" placeholder='Enter Full name' name=""/>
                <br /> 
                <label className='form-label col-md-3'>
                        Contact Mobile:
                </label>
                <input className='form-control ml-2' type="text" placeholder='Enter Mobile Number' name=""/>
                <br />
                <label className='form-label col-md-3'>
                        Email:
                </label>
                <input className='form-control ml-2' type="email" placeholder='Enter Email' name=""/>
                <br />
                <label className='form-label col-md-3'>
                        Password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Enter Password' name=""/>
                <br />
                <button className='btn btn-primary' >Register</button>   
            </div>
        </form>
        <br />
        <h5 className='text-center'>Already registered? <br/> Want to Login? <Link to="/login">Click here</Link></h5>
    </div>
  )
}

export default Registration