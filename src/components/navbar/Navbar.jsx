import './navbar.css'
import logo from '../../img/logo.svg'
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import { useState } from 'react'

const Navbar = () => {

    const [ state, setState ] = useState(1)

    const { t } = useTranslation()

    const languages = [
        {
            code: 'en',
            name: 'English'
        },
        {
            code: 'ru',
            name: 'Русский'
        }
    ]

    const handleClick = () => {
        setState(prev => prev === 0 ? prev = 1 : prev = 0)
        i18next.changeLanguage(languages[state].code)
    }

    return (
        <nav className='nav'>
            <img src={logo} alt=""/>
            <ul>
                <li><a href="#">{t('nav_main')}</a></li>
                <li><a href="#tours">{t('nav_tours')}</a></li>
                <li><a href="#">{t('nav_aboutUs')}</a></li>
                <li><a href="#">{t('nav_contacts')}</a></li>
            </ul>
            <div className="nav_lng">
                        <button key={languages[state].code} onClick={handleClick}>
                            {languages[state].name}
                        </button>
            </div>
        </nav>
    );
};

export default Navbar;