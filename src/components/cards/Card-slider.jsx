import Slider from "react-slick";
import PropTypes from "prop-types";
import './Card.css'

function CardSlider({imgs}) {

    const {
        c_img_1,
        c_img_2,
        c_img_3
    } = imgs

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        pauseOnHover: true,
        arrows: false
    };
    return (
        <div className="card_slider_container">
            <Slider {...settings}>
                <div className='card_slider_img'>
                    <img src={c_img_1} alt="img"/>
                </div>
                <div className='card_slider_img'>
                    <img src={c_img_2} alt="img"/>
                </div>
                <div className='card_slider_img'>
                    <img src={c_img_3} alt="img"/>
                </div>
            </Slider>
        </div>
    );
}

CardSlider.propTypes = {
    imgs: PropTypes.any,
};

export default CardSlider;