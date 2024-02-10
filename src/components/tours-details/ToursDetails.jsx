import { useParams } from "react-router-dom";
import FiltersCountry from "../../features/Filters/Filters-country.jsx";
import { useSelector } from "react-redux";
import {CountrySelectors} from "../../features/Countries-details/Countries-selector.js";
import FilterDays from "../../features/Filter-days/Filter-days.jsx";
import { Link } from "react-router-dom";
import {FilterCountriesDaySelector} from "../../features/Filter-days/Filter-countries-day-selector.js";
import './toursDetails.css'
import {ToursTypeSelector} from "../../features/Tours/Tours-selector.js";

const ToursDetails = () => {
    const { type } = useParams()

    const countriesArr = useSelector(state => state.countriesReducer)
    const activeFilterCountry = useSelector(state => state.filterReducer)
    const activeFilterDay = useSelector(state => state.filterDayReducer)
    const filteredCountries = FilterCountriesDaySelector(countriesArr, activeFilterCountry, type)
    const countries = CountrySelectors(filteredCountries, activeFilterDay)
    const bg = ToursTypeSelector(type)

    return (
        <div>
            <div className='details_header' style={{backgroundImage: `url(${bg})`}}></div>
            <FiltersCountry/>
            <FilterDays/>
            {
                countries.length === 0
                ?
                <h2>Скоро...</h2>
                :
                    countries.map(country =>
                    <div key={country.id} className='cardDetails' style={{backgroundImage: `url(${country.bg_img})`}}>
                        <h2>{country.title}</h2>
                        <h3>{country.sub_title}</h3>
                        <Link className='btn' to={`${country.day}`} state={{data: country.card_details}}>More</Link>
                    </div>
                )
            }
        </div>
    );
};

export default ToursDetails;