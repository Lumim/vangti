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
    console.log(userData)
}

 

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
                <input className='form-control ml-2' type="text" placeholder={userData.user_name} onChange={(e) => setUserData.full_name(e.target.value)} defaultValue={userData.user_name}   name="fname"/>
                <br /> 
                <label className='form-label col-md-3'>
                        Contact Mobile:
                </label>
                <input className='form-control ml-2' type="number" placeholder='Enter Mobile Number' defaultValue={userData.phone}  name="mobile"/>
                <br />
                <label className='form-label col-md-3'>
                        Email:
                </label>
                <input className='form-control ml-2' type="email" placeholder='Enter Email' name="email"/>
                <br />
                <label className='form-label col-md-3'>
                        Password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Enter Password' name="password"/>
                <br />
                <label className='form-label col-md-3'>
                        Confirm password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Confirm Password' name="confirm_password"/>
                <br />
                <button className='btn btn-primary' type='submit' onClick={(e)=>submitReg(e)} >Register</button>   
            </div>
        </form>
        <br />
        <h5 className='text-center'>Already registered? <br/> Want to Login? <Link to="/login">Click here</Link></h5>
    </div>
  )
}

export default Registration