import './header.css'
import Slider from "react-slick";
import {useTranslation} from "react-i18next";

function Header() {

    const { t } = useTranslation()

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        speed: 3000,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='header header_bg_1'>
                </div>
                <div className='header header_bg_2'>
                </div>
                <div className='header header_bg_3'>
                </div>
            </Slider>
            <h2 className='header_title'>{t('header_title_1')} <b>{t('header_service_1')}</b></h2>
            <div className='overlay-image'></div>
        </div>
    );
}

export default Header;
