import { useParams } from "react-router-dom";
import FiltersCountry from "../../features/Filters/Filters-country.jsx";
import { useSelector } from "react-redux";
import {CountrySelectors} from "../../features/Countries-details/Countries-selector.js";
import FilterDays from "../../features/Filter-days/Filter-days.jsx";
import { Link } from "react-router-dom";
import {FilterCountriesDaySelector} from "../../features/Filter-days/Filter-countries-day-selector.js";
import './toursDetails.css'

const ToursDetails = () => {
    const { type } = useParams()

    const countriesArr = useSelector(state => state.countriesReducer)
    const activeFilterCountry = useSelector(state => state.filterReducer)
    const activeFilterDay = useSelector(state => state.filterDayReducer)
    const filteredCountries = FilterCountriesDaySelector(countriesArr, activeFilterCountry, type)
    // const countries = CountrySelectors(countriesArr, activeFilterCountry, type, activeFilterDay)
    const countries = CountrySelectors(filteredCountries, activeFilterDay)

    return (
        <div>
            <div className='details_header'></div>
            <FiltersCountry/>
            <FilterDays/>
            {type}
            {
                countries.length === 0
                ?
                <h2>Скоро...</h2>
                :
                    countries.map(country =>
                    <div key={country.id} className='cardDetails' style={{backgroundImage: `url(${country.bgImg})`}}>
                        <h2>Name: {country.name}</h2>
                        <h3>{country.title}</h3>
                        <h3>Day: {country.day}</h3>
                        <Link className='btn' to={`${country.day}`} state={{data: country}}>More</Link>
                    </div>
                )
            }

        </div>
    );
};

export default ToursDetails;