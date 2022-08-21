import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom' 

const Registration=()=> {
const [user_name,setName]=useState('');
const [user_email,setEmail]=useState('');
const [user_phone,setPhone]=useState('');
const [user_pass,setPassword]=useState('');
const [user_c_pass,setCpass]=useState('');

useEffect(()=>{

},[]);



const submitReg=(e)=>{
        e.preventDefault();
    console.log(user_name+' '+user_email+' '+user_pass)
}

 

  return (
    <div className='card'>
        <div className='text-justify'>
                <h1 className='text-center'>Registration for Vangti</h1>        
        </div>
        <div className='card-body d-flex justify-content-center'>
        <form className='center'>
            <div className='ms-2 mb-2 form-group '>
                <label className='form-label '>
                        User Full Name:
                </label>
                <input className='form-control ml-2' type="text" placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)} value={user_name}   name="fname" required/>
                <br /> 
                <label className='form-label '>
                        Contact Mobile:
                </label>
                <input className='form-control ml-2' type="number" placeholder='Enter Mobile Number' maximum='110000'  onChange={(e) => setPhone(e.target.value)} value={user_phone}   name="mobile"/>
                <br />
                <label className='form-label '>
                        Email:
                </label>
                <input className='form-control ml-2' type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)} value={user_email}  name="email"/>
                <br />
                <label className='form-label '>
                        Password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Enter Password'  onChange={(e) => setPassword(e.target.value)} value={user_pass}  name="password"/>
                <br />
                <label className='form-label '>
                        Confirm password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Confirm Password'  onChange={(e) => setCpass(e.target.value)} value={user_c_pass}  name="confirm_password"/>
                <br />
                <button className='btn btn-primary' type='submit' onClick={(e)=>submitReg(e)} >Register</button>   
            </div>
        </form>
        </div>
        <br />
        <h5 className='text-center'>Already registered? <br/> Want to Login? <Link to="/login">Click here</Link></h5>
    </div>
  )
}

export default Registration