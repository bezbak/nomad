
import './header.css'
import Navbar from "../navbar/Navbar.jsx";

const Header = () => {
    return (
        <div className='header'>
            <Navbar/>
            <div className="overlay-image"></div>
            <div className="container">
                <div className="header_title">
                    <h2>Самый лучший и самый надежный <span>Сервис</span></h2>
                </div>
                <div className="header_slider">
                    <div className='slider'></div>
                </div>
            </div>
        </div>
    );
};

export default Header;