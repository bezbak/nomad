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
        faq,
        c_w_note,
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
                    <h3><b>{t('category')}:</b> {t(c_category)}</h3>
                    <h3><b>{t('itinerary')}:</b> {t(c_sub_title)}</h3>
                    <h3><b>{t('time_o_y')}:</b> {t(c_time)} </h3>
                    <h3><b>{t('duration')}:</b> {t(c_d)}</h3>
                    <h3><b>{t('accomodation')}:</b> {t(c_acc)}</h3>
                    <h3><b>{t('operated')}:</b> {t(c_operate)}</h3>
                    <h3><b>{t('tour_op')}:</b> {t(c_tour_op)}</h3>
                    <h3><b>{t('age')}:</b> {t(c_age)}</h3>
                    <h3><b>{t('size')}:</b> {t(c_size)}</h3>
                    <a href="https://wa.me/+996558883024">{t('type_wa')}</a>
                </div>
            </div>
            <p className="c_description" >{t(c_description)}</p>
            <Accordion faq={faq}/>
            <div className="cards__bottom">
            <h3>{t('w_1')}</h3><br />
            <h3>{t('w_notes')}: {t('w_2')}</h3><br />
            <h3>{t('w_3')}</h3><br />
            <h3>{t('w_4')}</h3><br />
            <h3>{t('c_pay')}: {t('w_5')}</h3><br />
            {
                t(c_w_note).length === 0
                    ?
                    null
                    :
                    <h2>{t('c_w_p')}: {t(c_w_note)}</h2>
            }
            </div>
        </div>
    );
};
``

export default Card;