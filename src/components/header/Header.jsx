
import './header.css'
import HeaderSlider from "./Header-slider.jsx";

const Header = () => {
    return (
        <div className='header'>

            <h2>Самый лучший и самый надежный <b>Сервис</b></h2>
            <div className="header__slider">
                <div className="header__slider-cont">
                <HeaderSlider />
                </div>
            </div>
        </div>
    );
};

export default Header;