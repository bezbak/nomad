import React from 'react'
import './css.css'
import whats from './icons/you.png'
import you from './icons/Vector.png'
import inst from './icons/inst.png'
import face from './icons/face.png'
import it from './icons/it.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__items">
                <div className="footer__flex">
                    <div className="footer__items-cols">
                        <h2>Меню</h2>
                        <a>Главное</a>
                        <a>Туры</a>
                        <a>О нас</a>
                        <a>Контакты</a>
                    </div>
                    <div className="footer__items-cols">
                        <h2>Контакты</h2>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                        <a href="tel:+996 777 77 77 77">+996 777 77 77 77</a>
                    </div>
                    <div className="footer__items-cols">
                        <h2>Соц сети</h2>
                        <div className="footer-icons">
                            <a href="#"><img src={face} alt="" /></a>
                            <a href="#"><img src={you} alt="" /></a>
                            <a href="#"><img src={inst} alt="" /></a>
                            <a href="#"><img src={whats} alt="" /></a>
                        </div>
                        <h2>Партнеры</h2>

                    </div>
                </div>
                <a className='itPark' href="https://www.instagram.com/itpark_osh/?igsh=MXFsbjg4bmxidDltOQ%3D%3D">
                    <span>Сайт разработан компанией Itpark</span>
                    <img src={it} alt="" />
                </a>
            </div>

            <div className="footer__items footer-right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d538.9010454926546!2d72.79972270175912!3d40.52176011575297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1707485524141!5m2!1sru!2skg"></iframe>            </div>
        </footer>
    )
}
