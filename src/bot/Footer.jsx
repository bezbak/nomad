import './css.css'
import whats from './icons/you.png'
import you from './icons/Vector.png'
import inst from './icons/inst.png'
import face from './icons/face.png'
import it from './icons/it.png'
import {useTranslation} from "react-i18next";

export default function Footer() {

    const {t} = useTranslation()

    return (
        <footer className='footer'>
            <div className="footer__items">
                <div className="footer__flex">
                    <div className="footer__items-cols">
                        <h2>{t('footer_menu')}</h2>
                        <a>{t('nav_main')}</a>
                        <a>{t('nav_tours')}</a>
                        <a>{t('nav_aboutUs')}</a>
                        <a>{t('nav_contacts')}</a>
                    </div>
                    <div className="footer__items-cols">
                        <h2>{t('nav_contacts')}</h2>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                    </div>
                    <div className="footer__items-cols">
                        <h2>{t('footer_social')}</h2>
                        <div className="footer-icons">
                            <a href="#"><img src={face} alt="" /></a>
                            <a href="#"><img src={you} alt="" /></a>
                            <a href="#"><img src={inst} alt="" /></a>
                            <a href="#"><img src={whats} alt="" /></a>
                        </div>
                        <h2>{t('footer_partners')}</h2>
                    </div>
                </div>
                <a className='itPark' href="https://www.instagram.com/itpark_osh/?igsh=MXFsbjg4bmxidDltOQ%3D%3D">
                    <span>{t('footer_dev')} It Park</span>
                    <img src={it} alt="" />
                </a>
            </div>

            <div className="footer__items footer-right">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1155.3272747970643!2d72.8003063932269!3d40.521704642047396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1707725420345!5m2!1sru!2skg"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
    )
}
