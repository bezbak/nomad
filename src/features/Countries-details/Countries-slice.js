import { createSlice, nanoid } from "@reduxjs/toolkit";

const countries = createSlice({
    name: '@@countries',
    initialState: [
        {
            id: nanoid(),
            name: 'kg',
            title: 'Kyrgyzstan transport',
            type: 'transport',
            day: '1',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
        {
            id: nanoid(),
            name: 'kg',
            title: 'Kyrgyzstan 2 Horse',
            type: 'horse',
            day: '2',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
        {
            id: nanoid(),
            name: 'kg',
            title: 'Kyrgyzstan 3 horse',
            type: 'horse',
            day: '1',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
        {
            id: nanoid(),
            name: 'kz',
            title: 'Kazakhstan ski',
            type: 'ski',
            day: '1',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
        {
            id: nanoid(),
            name: 'uz',
            title: 'Uzbekistan transport',
            type: 'transport',
            day: '1',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
        {
            id: nanoid(),
            name: 'kg',
            title: 'Kyrgyzstan ski',
            type: 'ski',
            day: '1',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
        {
            id: nanoid(),
            name: 'kg',
            title: 'Kyrgyzstan ski',
            type: 'ski',
            day: '3',
            bgImg: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            video: 'https://www.youtube.com/embed/gnqXfK-ESoY?si=GsApbx9CBXEREGjw',
        },
    ]
})


export const countriesReducer = countries.reducer