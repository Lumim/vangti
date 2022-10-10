import React from 'react'

const LoanRequest=()=> {
  return (
    <>
    <div className='container'> 
      <h1> Request for a loan</h1>
   
    <div className='card'>
      <div className='card-title text-center'>
          <h2>Loan requested</h2>
      </div>
      <div className='card-body'>
        <ul>
          <li>
            1) bank loan
          </li>
        </ul>
      </div>
    </div>
      <div className='card container'>
        <div className='card-title'>
          <h3>Apply for loan</h3>
        </div>
        <div className='form-group col-md-3'>
        <label htmlFor="loan">Select Loan Type: </label>
        <select name="loan_type" id="" className='form-control'>
          <option value="">Select from here</option>
          <option value="car loan">Car loan</option>
          <option value="House loan">House loan</option>
          <option value="Business loan">business loan (SME)</option>
          <option value="Educational loan">Educational loan</option>
        </select>
                
          <label htmlFor="loan">Loan amount: </label>
          <input className='form-control ' type={'text'} placeholder="Enter amount"/>
        
        <button type='submit' className='btn btn-success'>Apply for loan</button>
        </div>

      </div>
    </div>

    </>
  )
}

export default LoanRequest