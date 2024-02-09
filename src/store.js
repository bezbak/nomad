import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { countriesReducer } from './features/Countries-details/Countries-slice.js'
import { filterReducer } from './features/Filters/Filter-slice.js'
import { filterDayReducer } from "./features/Filter-days/Filter-day-slice.js";

const rootReducer = combineReducers({
    countriesReducer,
    filterReducer,
    filterDayReducer
})

export const store = configureStore({
    reducer: rootReducer
})