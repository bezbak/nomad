import { useLocation } from "react-router-dom";
import './Card.css'
import Accordion from "../accardion/Accordion.jsx";
import CardSlider from "./Card-slider.jsx";
import {useTranslation} from "react-i18next";

const Card = () => {
    const location = useLocation()
    const { data } = location.state
    const {t} = useTranslation()
    const {
        c_title,
        c_sub_title,
        c_description,
        c_img_1,
        c_img_2,
        c_img_3,
        faq
    } = data;


    const imgs = { c_img_1, c_img_2, c_img_3 }
    return (
        <div className="cards-linkDetailsexy">
            <div className='card_con'>
                <div className="card_con-items cardslider">
                <CardSlider imgs={imgs}/>
                </div>
                <div className='card_con-items  card_desc'>
                    <h2>{t(c_title)}</h2>
                    <h3>{t(c_sub_title)}</h3>
                    <p>{t(c_description)}</p>
                    <a href="https://wa.me/+996755888905">{t('type_wa')}</a>
                </div>
            </div>
            <Accordion faq={faq}/>
        </div>
    );
};

export default Card;