import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='card'>
        <div className='text-justify'>
                <h1 className='text-center'>Login</h1>        
        </div>
        <form>
            <div className='ms-2 mb-2 card-body form-group col-md-3 text-justify align-center'>
                <label className='form-label col-md-3'>
                        User Name:
                </label>
                <input className='form-control ml-2' type="text" placeholder='enter email/username' name=""/>
                <br />
                <label className='form-label col-md-3'>
                        Password:
                </label>
                <input className='form-control ml-2 ' type="password" placeholder='enter Password' name=""/>
                <br />
                 <button className='btn btn-primary' >Login</button>   
            </div>
        </form>
        <br />
        <h5 className='text-center'>New to this app? <br/> Want to Register? <Link to="/register">Click here</Link></h5>

    </div>
  )
}

export default Login