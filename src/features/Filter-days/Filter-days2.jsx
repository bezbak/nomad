import {setFilterDay} from "./Filter-day-slice.js";
import {useDispatch, useSelector} from "react-redux";
import {DaySelectors} from "./Filter-day-selectors.js";
import {useParams} from "react-router-dom";
import {FilterCountriesDaySelector} from "./Filter-countries-day-selector.js";
import { useEffect } from "react";
import '../features.css'
import {useTranslation} from "react-i18next";

const FiltersCountry = () => {
    const { type } = useParams()
    const dispatch = useDispatch()
    const countriesArr = useSelector(state => state.countriesReducer)
    const activeFilter = useSelector(state => state.filterDayReducer)
    const activeFilterCountry = useSelector(state => state.filterReducer)
    const filteredCountries = FilterCountriesDaySelector(countriesArr, activeFilterCountry, type)
    const days = Object.keys(DaySelectors(filteredCountries))

    const {t} = useTranslation()

    useEffect(() => {
        days.length === 0 ? null : dispatch(setFilterDay(days[0]))
    }, [activeFilterCountry]);

    return (
       
            <div className="buttonsDays computer">
                {
                    days.map(num => (
                        <button key={num} className={ activeFilter === num ? 'btnDay btnDay-active' : 'btnDay'}
                                onClick={() => dispatch(setFilterDay(num))}>{num} {t('day')}
                        </button>
                    ))
                }
            </div>
       
    );
};

export default FiltersCountry;