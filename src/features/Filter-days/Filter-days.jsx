import {setFilterDay} from "./Filter-day-slice.js";
import {useDispatch, useSelector} from "react-redux";
import {DaySelectors} from "./Filter-day-selectors.js";
import {useParams} from "react-router-dom";
import {FilterCountriesDaySelector} from "./Filter-countries-day-selector.js";
import { useEffect } from "react";


const FiltersCountry = () => {
    const { type } = useParams()
    const dispatch = useDispatch()
    const countriesArr = useSelector(state => state.countriesReducer)
    const activeFilter = useSelector(state => state.filterDayReducer)
    const activeFilterCountry = useSelector(state => state.filterReducer)
    const filteredCountries = FilterCountriesDaySelector(countriesArr, activeFilterCountry, type)
    const days = Object.keys(DaySelectors(filteredCountries))

    useEffect(() => {
        days.length === 0 ? null : dispatch(setFilterDay(days[0]))
    }, [activeFilterCountry]);

    return (
        <div>
            <div className="buttons">
                {
                    days.map(num => (
                        <button key={num} style={{color: activeFilter === num ? 'red' : 'black'}}
                                onClick={() => dispatch(setFilterDay(num))}>{num} day
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default FiltersCountry;