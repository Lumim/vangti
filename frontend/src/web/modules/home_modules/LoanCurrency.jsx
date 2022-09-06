import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const loan_currency = require('../../../assets/loan_currency.png');

function LoanCurrency() {
    const Navigate=useNavigate();
    const clickHandle=()=>{
        Navigate('/register')
    }

  return (
    <div id='hcard' className='card'>
    <img id='Vbanner' onClick={clickHandle}src={loan_currency} ></img>
    </div>
  )
}

export default LoanCurrency