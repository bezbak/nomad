import { createSlice } from '@reduxjs/toolkit'

const filter = createSlice({
    name: '@@filter',
    initialState: 'kg',
    reducers: {
        setFilter: ( _, action) => {
            return action.payload
        }
    }
})

export const filterReducer = filter.reducer
export const { setFilter } = filter.actions