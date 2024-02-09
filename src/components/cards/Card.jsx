import { useLocation } from "react-router-dom";
import './Card.css'

const Card = () => {
    const location = useLocation()
    const { data } = location.state

    const {
        name,
        title,
        type,
        day,
        video,

    } = data;

    return (
        <div >
            <div className='card_con'>
                <iframe width="914" height="514"
                        src={video}
                        title="Gorillaz - Clint Eastwood (Official Video)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
                <div className='card_desc'>
                    <h2>{name}</h2>
                    <h3>{title}</h3>
                    <h3>{day}</h3>
                    <h3>{type}</h3>
                    <a href="https://wa.me/+996755888905">Написать в WhatsApp</a>
                </div>
            </div>
            a
        </div>
    );
};

export default Card;