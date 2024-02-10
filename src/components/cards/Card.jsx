import { useLocation } from "react-router-dom";
import './Card.css'
import Accordion from "../accardion/Accordion.jsx";

const Card = () => {
    const location = useLocation()
    const { data } = location.state

    const {
        c_title,
        c_sub_title,
        c_description,
        c_video,
        c_img_1,
        c_img_2,
        c_img_3,
        faq
    } = data;

    return (
        <div >
            <div className='card_con'>
                <iframe width="914" height="514"
                        src={c_video}
                        title="Gorillaz - Clint Eastwood (Official Video)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
                <div className='card_imgs'>
                    <img src={c_img_1} alt="img_1"/>
                    <img src={c_img_2} alt="img_2"/>
                    <img src={c_img_3} alt="img_3"/>
                </div>
                <div className='card_desc'>
                    <h2>{c_title}</h2>
                    <h3>{c_sub_title}</h3>
                    <p>{c_description}</p>
                    <a href="https://wa.me/+996755888905">Написать в WhatsApp</a>
                </div>
            </div>
            <Accordion faq={faq}/>
        </div>
    );
};

export default Card;