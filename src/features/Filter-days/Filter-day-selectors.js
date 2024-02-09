export const DaySelectors = (arr) => {
    const grouped = {}

    arr.forEach(s => {
        if(!grouped[s.day]){
            grouped[s.day] = [s]
        }else{
            grouped[s.day].push(s)
        }
    })

    return grouped
}