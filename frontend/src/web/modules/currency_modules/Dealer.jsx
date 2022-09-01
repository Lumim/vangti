import React,{useState,useEffect} from 'react' 
const Dealer=()=> {
   
  return (
    <div className='d-flex justify-content-center'>
        <form>
            <div>
                <label className='form-label'>Your Full Name:</label>
                <input type="text" className='form-control' placeholder='enter your full name'/>     
            </div>
            <div className='form-group'>
                <label className='form-label'> Enter your currency type:</label>
                <input type="text" className='form-control' placeholder='enter currency type'/>
            </div>
            <div className='form-group'>
                <label className='form-label'> Enter your mobile number:</label>
                <input type="text" className='form-control' placeholder='enter mobile number'/>
            </div>
            <div className='form-group'>
                <label className='form-label'> Enter your current addess:</label>
                <textarea type="text" className='form-control' placeholder='enter adress'/>
            </div>
            
            
        </form>
    </div>
  )
}

export default Dealer