import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const loan_currency = require('../../../assets/loan_currency.png');

function LoanCurrency() {
    const Navigate=useNavigate();
    const clickHandle=()=>{
        Navigate('/register')
    }

  return (
    <div className='hcard'>
    <img onClick={clickHandle}src={loan_currency} ></img>
    </div>
  )
}

export default LoanCurrency