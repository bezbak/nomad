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
        c_category,
        c_time,
        c_acc,
        c_operate,
        c_tour_op,
        c_age,
        c_size,
        c_d,
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
                    <h3>{t('category')}: {t(c_category)}</h3>
                    <h3>{t('itinerary')}: {t(c_sub_title)}</h3>
                    <h3>{t('time_o_y')}: {t(c_time)} </h3>
                    <h3>{t('duration')}: {t(c_d)}</h3>
                    <h3>{t('accomodation')}: {t(c_acc)}</h3>
                    <h3>{t('operated')}: {t(c_operate)}</h3>
                    <h3>{t('tour_op')}: {t(c_tour_op)}</h3>
                    <h3>{t('age')}: {t(c_age)}</h3>
                    <h3>{t('size')}: {t(c_size)}</h3>
                    <a href="https://chat.whatsapp.com/Df7YmMPMd6t9cDTqPniPgd">{t('type_wa')}</a>
                </div>
            </div>
            <h2></h2><p>{t(c_description)}</p>
            <Accordion faq={faq}/>
        </div>
    );
};
``

export default Card;