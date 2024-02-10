import './App.css'
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import ToursDetails from "./components/tours-details/ToursDetails.jsx";
import Card from "./components/cards/Card.jsx";
import Footer from './bot/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx';


function App() {

  return (
    <>  
      <Navbar/>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/tours/:type' element={<ToursDetails/>}/>
            <Route path='/tours/:type/:day' element={<Card/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App