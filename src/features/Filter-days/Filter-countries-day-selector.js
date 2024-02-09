export const FilterCountriesDaySelector = (state, filter, type) => {
    switch(filter){
        case 'kg': {
            return state.filter(country => country.name === filter && country.type === type)
        }
        case 'kz': {
            return state.filter(country => country.name === filter && country.type === type)
        }
        case 'uz': {
            return state.filter(country => country.name === filter && country.type === type)
        }
        default: return state.filter(country => country.name === filter && country.type === type)
    }
}