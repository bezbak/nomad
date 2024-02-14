import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '5',
        title: '1_t',
        sub_title: '1_s_t',
        bg_img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/7c/10/lenin-peak-7134m.jpg?w=1200&h=-1&s=1',
        card_details: {
            c_title: '1_c_t',
            c_sub_title: '1_c_s_t',
            c_description: '1_c_d',
            c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            faq: [
                {
                    q: '1_f_1_q',
                    a: '1_f_1_a'
                },
                {
                    q: '1_f_2_q',
                    a: '1_f_2_a'
                },
            ]
        }
    },
]

const countries = createSlice({
    name: '@@countries',
    initialState,
})

export const countriesReducer = countries.reducer