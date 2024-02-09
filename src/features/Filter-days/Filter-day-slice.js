import { createSlice } from '@reduxjs/toolkit'

const filterDay = createSlice({
    name: '@@filter-day',
    initialState: '1',
    reducers: {
        setFilterDay: ( _, action) => {
            return action.payload
        }
    }
})

export const filterDayReducer = filterDay.reducer
export const { setFilterDay } = filterDay.actions