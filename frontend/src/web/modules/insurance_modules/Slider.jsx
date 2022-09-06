import React from 'react'

function Slider() {
    const src1=require('../../../assets/loan_currency.png')
    const src2=require('../../../assets/loan.png')
    const src3=require('../../../assets/vanner.png')
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src={src1} alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={src2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={src3} alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
  )
}

export default Slider