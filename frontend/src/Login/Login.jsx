import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function Login() {
        const [user_email,setEmail]=useState('')
        const [user_password,setPassword]=useState('')

const submitLogin=()=>[

]

  return (
    <div className='card'>
        <div className='text-justify'>
                <h1 className='text-center'>Login</h1>        
        </div>
        <div className='card-body d-flex justify-content-center'>
        <form className='center'>
            <div className='ms-2 mb-2 form-group '>
               
                <label className='form-label '>
                        Email:
                </label>
                <input className='form-control ml-2' type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)} value={user_email}  name="email"/>
                <br />
                <label className='form-label '>
                        Password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Enter Password'  onChange={(e) => setPassword(e.target.value)} value={user_password}  name="password"/>
                <br />
                 
                <button className='btn btn-primary' type='submit' onClick={(e)=>submitLogin(e)} >Login</button>   
            </div>
        </form>
        </div>
        <br />
        <h5 className='text-center'>New to this app? <br/> Want to Register? <Link to="/register">Click here</Link></h5>

    </div>
  )
}

export default Login