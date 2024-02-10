import Numbers from "../../bot/Numbers.jsx";
import Reviews from '../../components/Reviews/Reviews.jsx'
import AboutUs from "../../bot/AboutUs.jsx";
import Header from "../../components/header/Header.jsx";
import Tours from "../../components/tours/Tours.jsx";

const MainPage = () => {
    return (
        <>
            <Header/>
            <Tours/>
            <Numbers/>
            <Reviews/>
            <AboutUs/>
        </>
    );
};

export default MainPage;