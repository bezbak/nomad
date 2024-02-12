import './Header-slider.css'
import Slider from "react-slick"; 
import React from 'react';
function SimpleSlider() {
    const settings = {
        className: 'header_slider_box',
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };
    return (
        <div className="header_slider_con">
            <Slider {...settings}>
                <div className='header_slider_img'>
                    <img src="https://images.unsplash.com/photo-1510313420591-f06c361d1397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-c"/>
                </div>
                <div className='header_slider_img'>
                    <img src="https://images.unsplash.com/photo-1609779311020-db3879ad033a?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-c"/>
                </div>
                <div className='header_slider_img'>
                    <img src="https://plus.unsplash.com/premium_photo-1694475434330-2058f3323def?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-c"/>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;