import { useParams, useNavigate } from "react-router-dom";
import FiltersCountry from "../../features/Filters/Filters-country.jsx";
import { useSelector } from "react-redux";
import { CountrySelectors } from "../../features/Countries-details/Countries-selector.js";
import FilterDays from "../../features/Filter-days/Filter-days.jsx";
import { Link } from "react-router-dom";
import { FilterCountriesDaySelector } from "../../features/Filter-days/Filter-countries-day-selector.js";
import './toursDetails.css'
import {ToursTypeSelector} from "../../features/Tours/Tours-selector.js";
import {useTranslation} from "react-i18next";

const ToursDetails = () => {
    const { type } = useParams()
    const countriesArr = useSelector(state => state.countriesReducer)
    const activeFilterCountry = useSelector(state => state.filterReducer)
    const activeFilterDay = useSelector(state => state.filterDayReducer)
    const filteredCountries = FilterCountriesDaySelector(countriesArr, activeFilterCountry, type)
    const countries = CountrySelectors(filteredCountries, activeFilterDay)
    const {url, title, description} = ToursTypeSelector(type)
    const {t} = useTranslation()
    const navigate = useNavigate()
 
    return (
        <>
            <div className='details_header' style={{ backgroundImage: `url(${url})` }}>
                <div className="dedais__header-content">
                <h2>{t(title)}</h2>
                {/* <p>{t(description)}</p> */}
                </div>
            </div>
            <FiltersCountry />
            <FilterDays />
            <div className="tours_con">
            {
                countries.length === 0
                ?
                <h2>{t('soon')}...</h2>
                :
                    countries.map(country =>
                        <Link key={country.id} className='cardDetails' to={`${country.day}`} state={{data: country.card_details}}> 
    
                        <img src={country.bg_img} alt="" />
                        <div className="cardDetails-content">
                       <h2>{t(country.title)}</h2>
                        <h3>{t(country.sub_title)}</h3>
                        <button className="btn">{t('tours_more_btn')}</button>
                       </div>
                
                    </Link>
                )
            }
            </div>
        </>
    );
};

export default ToursDetails;