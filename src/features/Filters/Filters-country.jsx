import {setFilter} from "./Filter-slice.js";
import {useDispatch, useSelector} from "react-redux";
import '../features.css'
import {useTranslation} from "react-i18next";

const FiltersCountry = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    const activeFilter = useSelector(state => state.filterReducer)

    return (
        <div>
            <div className="buttons">
                <button className={ activeFilter === 'kg' ? 'countryes countryes-active' : 'countryes '}
                        onClick={() => dispatch(setFilter('kg'))}> {t('kgz')}
                </button>
                <button className={ activeFilter === 'kz' ? 'countryes countryes-active' : 'countryes '}
                        onClick={() => dispatch(setFilter('kz'))}> {t('kaz')}
                </button>
                <button className={ activeFilter === 'uz' ? 'countryes countryes-active' : 'countryes '}
                        onClick={() => dispatch(setFilter('uz'))}> {t('uzb')}
                </button>
            </div>
        </div>
    );
};

export default FiltersCountry;