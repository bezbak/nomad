import {setFilter} from "./Filter-slice.js";
import {useDispatch, useSelector} from "react-redux";
import '../features.css'

const FiltersCountry = () => {

    const dispatch = useDispatch()
    const activeFilter = useSelector(state => state.filterReducer)

    return (
        <div>
            <div className="buttons">
                <button className={ activeFilter === 'kg' ? 'countryes countryes-active' : 'countryes '}
                        onClick={() => dispatch(setFilter('kg'))}>Kyrgyzstan
                </button>
                <button className={ activeFilter === 'kz' ? 'countryes countryes-active' : 'countryes '}
                        onClick={() => dispatch(setFilter('kz'))}>Kazakhstan
                </button>
                <button className={ activeFilter === 'uz' ? 'countryes countryes-active' : 'countryes '}
                        onClick={() => dispatch(setFilter('uz'))}>Uzbekistan
                </button>
            </div>
        </div>
    );
};

export default FiltersCountry;