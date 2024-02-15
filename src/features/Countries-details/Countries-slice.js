import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '9',
        title: '1_t',
        sub_title: '1_s_t',
        bg_img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/7c/10/lenin-peak-7134m.jpg?w=1200&h=-1&s=1',
        card_details: {
            c_title: '1_t',
            c_sub_title: '1_c_s_t',
            c_description: '1_c_d',
            c_category: '1_c_c',
            c_time: '1_c_t',
            c_acc: '1_c_a',
            c_d: '1_s_t',
            c_operate: '1_c_o',
            c_tour_op: '1_c_t_o',
            c_age: '1_c_age',
            c_size: '1_c_s',
            c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            faq: [
                {
                    ac: '1_f_1_ac',
                    meals: '1_f_1_m',
                    q: '1_f_1_q',
                    a: '1_f_1_a'
                },
                {
                    ac: '1_f_2_ac',
                    meals: '1_f_2_m',
                    q: '1_f_2_q',
                    a: '1_f_2_a'
                },
                {
                    ac: '1_f_3_ac',
                    meals: '1_f_3_m',
                    q: '1_f_3_q',
                    a: '1_f_3_a'
                },
                {
                    ac: '1_f_4_ac',
                    meals: '1_f_4_m',
                    q: '1_f_4_q',
                    a: '1_f_4_a'
                },
                {
                    ac: '1_f_5_ac',
                    meals: '1_f_5_m',
                    q: '1_f_5_q',
                    a: '1_f_5_a'
                },
                {
                    ac: '1_f_6_ac',
                    meals: '1_f_6_m',
                    q: '1_f_6_q',
                    a: '1_f_6_a'
                },
                {
                    ac: '1_f_7_ac',
                    meals: '1_f_7_m',
                    q: '1_f_7_q',
                    a: '1_f_7_a'
                },
                {
                    ac: '1_f_8_ac',
                    meals: '1_f_8_m',
                    q: '1_f_8_q',
                    a: '1_f_8_a'
                },
                {
                    ac: '1_f_9_ac',
                    meals: '1_f_9_m',
                    q: '1_f_9_q',
                    a: '1_f_9_a'
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