import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import Data from '../extra/Types'
import axios from 'axios'
const Login=()=> {

const url=Data.url;
const [user_email,setEmail]=useState('')
const [user_password,setPassword]=useState('')
const headers = {
        'Authorization': 'Bearer Token',
        'Token': '6|8KUjAlglu8AdtnNjIBl3vt9a2tiNy6Sjtgfe28kv'
    };
useEffect(()=>{
       getData();
},[])

const getData=async()=>{
       await axios.get(url+'user',{
        headers
        }).then(response=>console.log(response).catch(error=>{console.log('there is an error',error)}))
}



const submitLogin=()=>{
        let x = validateEmail(user_email);
        if(x){
                console.log(user_email,user_password,url);        
                console.log(validateEmail(user_email));
        }
        else{
                Swal.fire('error in email','Entered email address is wrong','error')
        }

}
const validate =(u,p)=>{
        let y = u.trim();
        if(y==""){
                return  false
        }
        else{
                return true
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