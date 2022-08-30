import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import Data from '../extra/Types'
import axios from 'axios'
const Login=()=> {

const xurl=Data.url;
const [user_email,setEmail]=useState('')
const [user_password,setPassword]=useState('')
const Navigate =useNavigate(); 
const headers = {
        'Accept':'Application/json',
        'Authorization': 'Bearer 8|QU7nj0hHRD4sc0Tc9lndHeynHaRc4sTztkbNQTNC',
         
    };
useEffect(()=>{
      // getData();
      //console.log(localStorage.getItem('token'))

     
},[])

const getData=async()=>{
       await axios.get(xurl+'api/user',{
        headers}
        ).catch(function (error) {
                console.log(error.toJSON())}).then(response=>console.log(response))
}



const submitLogin=()=>{
        let x = validateEmail(user_email);
        if(x){
                axios.get(xurl + 'sanctum/csrf-cookie')
                .then((response) => {
                        //console.log(response);
                        axios.post(xurl+'api/login', {
                                email: user_email,
                                password: user_password
                        })
                        .then(function (response) {
                                console.log(response.data)
                                localStorage.setItem('token',response.data.token)
                                localStorage.setItem('user',response.data.name)
                                Navigate('/dashboard')
                        })
                        .catch(function (error) {
                               Swal.fire('Error in Login','Entered email and password is wrong','error')
                        });
                });
        }
        else{
                Swal.fire('error in email','Entered email address is wrong','error')
        }

} 
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    



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
                <input className='form-control ml-2' type="email" pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'} title='wrong email format' placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)} value={user_email}  name="email"/>
                <br />
                <label className='form-label '>
                        Password:
                </label>
                <input className='form-control ml-2' type="password" pattern=" (?=.*[a-z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder='Enter Password'  onChange={(e) => setPassword(e.target.value)} value={user_password}  name="password"/>
                <br />
                 
                <button className='btn btn-primary' type='button' onClick={(e)=>submitLogin(e)} >Login</button>   
            </div>
        </form>
        </div>
        <br />
        <h5 className='text-center'>New to this app? <br/> Want to Register? <Link to="/register">Click here</Link></h5>

    </div>
  )
}

export default Login