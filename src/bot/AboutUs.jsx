import React from 'react'
import samalet from './icons/samalet.png'
import avtobus from './icons/avtobus.png'
import chemodan from './icons/chemodan.png'
import lyja from './icons/lyja.png'
import search from './icons/search.png'
import at from './icons/at.png'
import kg from './img/kg.png'

export default function AboutUs() {
    return (
        <>
            <div className="icons">
                <h2>Почему выбирают нас?</h2>
                <div className="icons__flex">
                    <div className="icons__flex-items">
                        <img src={samalet} alt="IT PARK" />
                        <p><b>1. </b> 1000+ довольных клиентов по всей стране
                            которые  поделились со своими эмоциями
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={avtobus} alt="IT PARK" />
                        <p><b>2. </b> 1000+ довольных клиентов по всей стране
                            которые  поделились со своими эмоциями
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={chemodan} alt="IT PARK" />
                        <p><b>3. </b>1000+ довольных клиентов по всей стране
                            которые  поделились со своими эмоциями
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={search} alt="IT PARK" />
                        <p><b>4. </b>1000+ довольных клиентов по всей стране
                            которые  поделились со своими эмоциями
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={at} alt="IT PARK" />
                        <p><b>5. </b>1000+ довольных клиентов по всей стране
                            которые  поделились со своими эмоциями
                        </p>
                    </div>
                    <div className="icons__flex-items">
                        <img src={lyja} alt="IT PARK" />
                        <p><b>6.</b>1000+ довольных клиентов по всей стране
                            которые  поделились со своими эмоциями
                        </p>
                    </div>
                </div>
            </div>
            <div className="about">
                <h2>About us</h2>
                <div className="about__flex">
                    <div className="about__flex-items items-left">
                       <p>
                       Welcome to Nomad Peaks agency, specializing in adventure travel, cultural exploration, trekking, and hiking tours in Kyrgyzstan. Our Kyrgyzstan experiences are immersive, delving into local culture, cuisine, and community tourism. All our tours include knowledgeable local guides, comfortable transportation, and quality accommodation.
                        We prioritize sustainability and collaboration with local communities, ensuring mutual benefits for travelers and locals. Through training and support, we empower locals to earn income from tourism.
                        Embark on a journey with Nomad Peaks Travel to discover Kyrgyzstan's breathtaking nature while gaining insights into nomadic lifestyles along the ancient Silk Road routes through visits with local communities
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
