import React from 'react'
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

import '../../../styles/Slider.css'


const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <Slider {...settings}>
        <div>
            <p className='review__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut tenetur atque ullam officiis aut suscipit debitis sint 
                corrupti cupiditate sed et accusantium libero ipsam in 
                ab nulla minus, magnam unde?
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt='avatar' className='rounded'/>
                <h6>Jhon Doe</h6>
            </div>
        </div>

        <div>
        <p className='review__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut tenetur atque ullam officiis aut suscipit debitis sint 
                corrupti cupiditate sed et accusantium libero ipsam in 
                ab nulla minus
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt='avatar' className='rounded'/>
                <h6>Mitchell Marsh</h6>
            </div>
        </div>

        <div>
        <p className='review__text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Cupiditate porro maxime sequi vel autem animi reiciendis 
                atque blanditiis accusantium eos sint numquam quisquam 
                architecto, deserunt est, fuga enim minima. Modi.
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava03} alt='avatar' className='rounded'/>
                <h6>Steven Crock</h6>
            </div>
        </div>
    </Slider>
  )
}

export default TestimonialSlider