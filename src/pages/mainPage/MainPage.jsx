
import Header from "../../components/header/Header.jsx";
import Tours from "../../components/tours/Tours.jsx";
import Numbers from '../../bot/Numbers'
import AboutUs from '../../bot/AboutUs'
const MainPage = () => {
    return (
        <div>
            <Header/>
            <Tours/>
            <Numbers/>
            <AboutUs/>
            
        </div>
    );
};

export default MainPage;