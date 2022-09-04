import React from 'react'

function Slider() {
    const src1=require('../../../assets/loan_currency.png')
    const src2=require('../../../assets/loan.png')
    const src3=require('../../../assets/vanner.png')
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src={src1} alt="First slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={src2} alt="Second slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={src3} alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  )
}

export default Slider