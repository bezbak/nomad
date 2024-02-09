import {setFilter} from "./Filter-slice.js";
import {useDispatch, useSelector} from "react-redux";

const FiltersCountry = () => {

    const dispatch = useDispatch()
    const activeFilter = useSelector(state => state.filterReducer)

    return (
        <div>
            <div className="buttons">
                <button style={{color: activeFilter === 'kg' ? 'red' : 'black'}}
                        onClick={() => dispatch(setFilter('kg'))}>Kyrgyzstan
                </button>
                <button style={{color: activeFilter === 'kz' ? 'red' : 'black'}}
                        onClick={() => dispatch(setFilter('kz'))}>Kazakhstan
                </button>
                <button style={{color: activeFilter === 'uz' ? 'red' : 'black'}}
                        onClick={() => dispatch(setFilter('uz'))}>Uzbekistan
                </button>
            </div>
        </div>
    );
};

export default FiltersCountry;