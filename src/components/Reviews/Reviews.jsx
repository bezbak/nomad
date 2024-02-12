import Slider from "react-slick";
import './Reviews.css'
import {useTranslation} from "react-i18next";

function PauseOnHover() {

    const {t} = useTranslation()

    var settings = {
        className: 'slider-box',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <>
           <h1 className="otzyv">{t('reviews_title')}</h1>
            <div className="slider-container">



                <Slider {...settings}>
                    <div className='carousel-cards'>
                        {/*<iframe width="914" height="514" src="https://www.youtube.com/embed/pG_jOgIFZxE"*/}
                        {/*        title="Scenic views of Osh region | Kyrgyzstan 🇰🇬 #nomadpeaks#travel #tour #adventure #kyrgyzstan"*/}
                        {/*        // frameBorder="0"*/}
                        {/*        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                        {/*        allowFullScreen></iframe>*/}
                    </div>
                    <div className='carousel-cards'>
                        {/*<iframe className="youtube" src="https://www.youtube.com/embed/jYx1gFS_4SA?si=uDjqAh3bm9SCvgM0"*/}

                        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                        {/*    allowFullScreen></iframe>*/}
                    </div>
                    <div className='carousel-cards'>
                        {/*<iframe className="youtube" src="https://www.youtube.com/embed/ouIyFUp6dMw?si=C1pOgS42HSmyBHWy"*/}

                        {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                        {/*    allowFullScreen></iframe>*/}
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default PauseOnHover;