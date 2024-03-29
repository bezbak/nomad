import samalet from './icons/samalet.png'
import avtobus from './icons/avtobus.png'
import chemodan from './icons/chemodan.png'
import lyja from './icons/lyja.png'
import search from './icons/search.png'
import at from './icons/at.png'
import kg from './img/kg.png'
import {useTranslation} from "react-i18next";
 
export default function AboutUs() {

    const {t} = useTranslation()

    return (
        <>
            <div className="icons">
                <h2>{t('choose_title')}</h2>
                <div className="icons__flex">
                    <div className="icons__flex-items">
                        <img src={samalet} alt="IT PARK" />
                        <p>{t('choose_1')}
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={avtobus} alt="IT PARK" />
                        <p>{t('choose_2')}
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={chemodan} alt="IT PARK" />
                        <p>{t('choose_3')}
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={search} alt="IT PARK" />
                        <p>{t('choose_4')}
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={at} alt="IT PARK" />
                        <p>{t('choose_5')}
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={lyja} alt="IT PARK" />
                        <p>{t('choose_6')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="about" id='about'>
                <h2>{t('about_us_title')}</h2>
                <div className="about__flex">
                    <div className="about__flex-items items-left">
                       <p>
                           {t('about_us_desc')}
                       </p>
                    </div>
                    <div className="about__flex-items items-right">
                        <img src={kg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
