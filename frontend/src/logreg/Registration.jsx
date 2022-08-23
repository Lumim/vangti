import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'  
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const Registration=()=> {
const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
        })       
 
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data) => {
        
        console.log(data.firstname);
        if(!errors){
                Swal.fire({
                        title: errors.message,
                        text: 'seesssss',
                        icon: 'success',
                        confirmButtonText: 'Close',
                        background:'white',
                        backdrop: `
                        rgba(12,0,123,0.4)`
                      })    
        }
        console.log(errors)
        validate(data.password,data.confirm_password);

}


useEffect(()=>{

},[]);

 

const validate=(pass,cpass)=>{
 
        
        
        if(pass!==cpass){
                Swal.fire({
                        title: 'Error!',
                        text: 'Password and confirm password doesnt match',
                        icon: 'warning',
                        confirmButtonText: 'Close',
                        background:'white',
                        backdrop: `
                        rgba(12,0,123,0.4)`
                      })
        }

}






 

  return ( 
    <div className='card'> 
        <div className='text-justify'>
                <h1 className='text-center'>Registration for Vangti</h1>        
        </div>
        <div className='card-body d-flex justify-content-center'>
        <form className='center'  onSubmit={handleSubmit(onSubmit)}>
            <div className='ms-2 mb-2 form-group '>
                <label className='form-label '>
                        User Full Name:
                </label>
                <input className='form-control ml-2' type="text" placeholder='Enter Full Name' {...register("fullname", {required: true, maxLength: 80})}/>
                <br /> 
                <label className='form-label '>
                        Contact Mobile:
                </label>
                <input className='form-control ml-2' type="number" placeholder='Enter Mobile Number'{...register("mobile", {required: true, minLength: 6, maxLength: 12})}/>
                <br />
                <label className='form-label '>
                        Email:
                </label>
                <input className='form-control ml-2' type="email" placeholder='Enter Your Email' {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                <br />
                <label className='form-label '>
                        Password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Enter Password'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" {...register("password", {required: true, minLength: 6, maxLength: 12})}/>
                <br />
                <label className='form-label '>
                        Confirm password:
                </label>
                <input className='form-control ml-2' type="password" placeholder='Confirm Password'  {...register("confirm_password", {required: true, minLength: 6, maxLength: 12})}/>
                <br />
                <button className='btn btn-primary' type='submit'  >Register</button>   
            </div>
        </form>
        </div>
        <br />
        <h5 className='text-center'>Already registered? <br/> Want to Login? <Link to="/login">Click here</Link></h5> 
    </div>
  )
}

export default Registration