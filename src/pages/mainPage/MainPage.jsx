import Numbers from "../../bot/Numbers.jsx";
import Reviews from '../../components/Reviews/Reviews.jsx'
import AboutUs from "../../bot/AboutUs.jsx";
import Header from "../../components/header/Header.jsx";
import Tours from "../../components/tours/Tours.jsx";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Tours/>
            <Numbers/>
            <Reviews/>
            <AboutUs/>
        </div>
    );
};

export default MainPage;