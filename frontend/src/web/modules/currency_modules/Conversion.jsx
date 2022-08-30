import React,{useState,useEffect} from 'react'
import Data from '../../../extra/Types'
import axios from 'axios'

const Conversion=()=> {
    const [nationals,setNationals]=useState([]);

    useEffect(()=>{
       //getDataFromApi();
    },[])
    const getDataFromApi = async ()=>{
        axios.request(Data.optionOne).then(function (response) {
            console.log(response.data);
            setNationals(response.data);

        }).catch(function (error) {
            console.error(error);
        });
    }

    
  return (<>
            <div className='row col-md-12'>
            {/* <a href='http://www.indexmundi.com/xrates/graph.aspx?c1=USD&c2=EUR&days=30&lastday=20080220'><img alt='US Dollar to Euro Exchange Rate Graph - Jul 29, 2022 to Aug 26, 2022' src='http://www.indexmundi.com/xrates/image.aspx?c1=USD&c2=EUR&days=30&lastday=20080220' className='embeded' title='Click to play with this data at IndexMundi' /></a>
             */}</div>
            <div className=' d-flex justify-content-center'>
                <form>
                    <div className='Form-group col-md-12 '>
                        <label>Select your currency</label>
                        <select className='col-md-2  form-control' name="cars" id="cars" placeholder='select here'>
                            <option value={""}>Select Your Nationals click here</option>
                            {nationals.map(key=>{

                                return(
                                    
                                    <option value={key}>{key}</option>
                            )
                            })} 
                        </select>
                    </div>
                    <div className='form-group col-md-12'>
                         <label>Enter Your amount:</label>
                         <input type={'text'} className="form-control" placeholder='Enter your amout'/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <h1>To</h1>
                    </div>
                    <div className='Form-group col-md-12'>
                        <label>Select your currency</label>
                        <select className='col-md-2 form-control' name="cars" id="cars" placeholder='select here'>
                            <option value={""}>Select Your Nationals click here</option>
                            {nationals.map(key=>{

                                return(
                                    
                                    <option value={key}>{key}</option>
                            )
                            })} 
                        </select>
                    </div>
                    <br></br>
                    <button className='btn btn-primary'>Calculate</button> <label>Calculated Amount : 1.25 </label>

                </form>
            </div>
        </>
  )
}

export default Conversion