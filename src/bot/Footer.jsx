import './css.css'
import whats from './icons/you.png'
import you from './icons/Vector.png'
import inst from './icons/inst.png'
import face from './icons/face.png'
import it from './icons/it.png'
import oppa from './icons/oppa.png'
import standof from './icons/standoff.png'
import turan from './icons/turan.png'
import {useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom'


export default function Footer() {
    const navigate = useNavigate()
    const {t} = useTranslation()

    return (
        <footer className='footer' id='contacts'>
            <div className="footer__items">
                <div className="footer__flex">
                    <div className="footer__items-cols">
                        <h2>{t('footer_menu')}</h2>
                        <a href='#main' onClick={()=>navigate('/')} >{t('nav_main')}</a>
                        <a href='#tours' onClick={()=>navigate('/')} > {t('nav_tours')}</a>
                        <a href='#about' onClick={()=>navigate('/')} >{t('nav_aboutUs')}</a>
                        <a href='#contacts'>{t('nav_contacts')}</a>
                    </div>
                    <div className="footer__items-cols">
                        <h2>{t('nav_contacts')}</h2>
                        <a href="tel:++996 558 88 30 24">+996 558 88 30 24</a>
                        <a href="tel:++996 502 23 06 98">+996 502 23 06 98</a>
                    </div>
                    <div className="footer__items-cols">
                        <h2>{t('footer_social')}</h2>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/profile.php?id=61555421665774" target='https://www.facebook.com/profile.php?id=61555421665774'><img src={face} alt="" /></a>
                            <a href="https://youtube.com/@NomadPeaks?si=Z1X9Xop8Xuv7Tk09" target='https://youtube.com/@NomadPeaks?si=Z1X9Xop8Xuv7Tk09'><img src={you} alt="" /></a>
                            <a href="https://www.instagram.com/nomadpeaks.kg?igsh=N2I5YWJhYzV5ajd4&utm_source=qr" target='https://www.instagram.com/nomadpeaks.kg?igsh=N2I5YWJhYzV5ajd4&utm_source=qr' ><img src={inst} alt="" /></a>
                            <a href="https://wa.me/+996558883024" target='https://wa.me/+996558883024' ><img src={whats} alt="" /></a>
                        </div>
                      
                    </div>
                    <div className="footer__items-cols">
                    <h2>{t('footer_partners')}</h2>
                        <div className="footer-iconss">
                            <a href="https://www.oppa.kg/"><img src={oppa} alt="" /></a>
                            <a href="https://www.instagram.com/stanford_academkg?igsh=MWE2NG83a21taTlvYg=="><img src={standof} alt="" /></a>
                            <a href="https://www.instagram.com/turan_karakol?igsh=MWtxdmNoa21kMmQ0NA=="><img src={turan} alt="" /></a>
                        </div>
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
