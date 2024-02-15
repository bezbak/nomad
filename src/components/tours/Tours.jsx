import './tours.css'
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";

const Tours = () => {
    const navigate = useNavigate()
    const {t} = useTranslation()

    const data = [
        {
            title: t('tours_tr_title'),
            name: 'transport', 
        },
        {
            title: t('tours_hr_title'),
            name: 'horse',
        },
        {
            title: t('tours_ft_title'),
            name: 'onfoot',
        },
        {
            title:t('tours_ski_title'),
            name: 'ski',
        }
    ]

    return (
        <div className='tours' id='tours'>
            <h2>{t('tours_title')}</h2>
            <div className="tours_cards">
                {
                    data.map(type => (
                        <div className="card" key={type.name} onClick={() => navigate(`/tours/${type.name}`)}>
                             <div className="overlay-title">
                                    <h3>
                                    {type.title}
                                    </h3>
                                </div>
                            <div className="card-bot">
                               
                                {/* <h3>{type.title}</h3> */}
                                  <h3 className='text-pop-up-left' >{t('tours_more_btn')}</h3>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tours;