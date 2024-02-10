import './navbar.css'
import logo from '../../img/logo.svg'
import i18next, { use } from "i18next";
import {useTranslation} from "react-i18next";
import { useState, useEffect } from 'react'
import eng from './eng.png'
import rus from './rus.png'
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const nav = useNavigate()  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsHidden(prevScrollPos < currentScrollPos && currentScrollPos > 0);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  

    const [ state, setState ] = useState(1)
    const [span, setSpan] = useState(false)

    const { t } = useTranslation()

    const languages = [
        {
            code: 'en',
            name: eng
        },
        {
            code: 'ru',
            name: rus
        }
    ]

    const handleClick = () => {
        setState(prev => prev === 1 ? prev = 0 : prev = 1)
        i18next.changeLanguage(languages[state].code)
    }

    return (
        <nav className={`navigation-bar ${isHidden ? 'hidden' : ''}`}>
            <img src={logo} alt="" onClick={()=>nav('/')}/>
            <div className={span === false?"dark":"dark dark-active"} onClick={()=>{span===false?setSpan(true):setSpan(false)}}></div>     
            <ul className={span === false?"nav__menu":"nav__menu nav__menu-active"}>
                <li><a href="#">{t('nav_main')}</a></li>
                <li><a href="#tours">{t('nav_tours')}</a></li>
                <li><a href="#">{t('nav_aboutUs')}</a></li>
                <li><a href="#">{t('nav_contacts')}</a></li>
                <button className='nav_lng' key={languages[state].code} onClick={handleClick}>
                    <img src={languages[state].name} alt="" />
            </button>
            </ul>    
            <button className="burger" onClick={()=>{span===false?setSpan(true):setSpan(false)}}>
                <span className={span === false?"top":"top top-active"}></span>
                <span className={span === false?"mid":"mid mid-active"}></span>
                <span className={span === false?"bot":"bot bot-active"}></span>
            </button>  
        </nav>
    );
};

export default Navbar;