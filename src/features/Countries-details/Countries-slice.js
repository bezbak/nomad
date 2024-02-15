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
                {
                    q: '1_f_3_q',
                    a: '1_f_3_a'
                },
                {
                    q: '1_f_4_q',
                    a: '1_f_4_a'
                },
                {
                    q: '1_f_5_q',
                    a: '1_f_5_a'
                },
                {
                    q: '1_f_6_q',
                    a: '1_f_6_a'
                },
                {
                    q: '1_f_7_q',
                    a: '1_f_7_a'
                },
                {
                    q: '1_f_8_q',
                    a: '1_f_8_a'
                },
                {
                    q: '1_f_9_q',
                    a: '1_f_9_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '11',
        title: '2_t',
        sub_title: '2_s_t',
        bg_img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/7c/10/lenin-peak-7134m.jpg?w=1200&h=-1&s=1',
        card_details: {
            c_title: '2_c_t',
            c_sub_title: '2_c_s_t',
            c_description: '2_c_d',
            c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            faq: [
                {
                    q: '2_f_1_q',
                    a: '2_f_1_a'
                },
                {
                    q: '2_f_2_q',
                    a: '2_f_2_a'
                },
                {
                    q: '2_f_3_q',
                    a: '2_f_3_a'
                },
                {
                    q: '2_f_4_q',
                    a: '2_f_4_a'
                },
                {
                    q: '2_f_5_q',
                    a: '2_f_5_a'
                },
                {
                    q: '2_f_6_q',
                    a: '2_f_6_a'
                },
                {
                    q: '2_f_7_q',
                    a: '2_f_7_a'
                },
                {
                    q: '2_f_8_q',
                    a: '2_f_8_a'
                },
                {
                    q: '2_f_9_q',
                    a: '2_f_9_a'
                },
                {
                    q: '2_f_10_q',
                    a: '2_f_10_a'
                },
                {
                    q: '2_f_11_q',
                    a: '2_f_11_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'horse',
        day: '5',
        title: '3_t',
        sub_title: '3_s_t',
        bg_img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/7c/10/lenin-peak-7134m.jpg?w=1200&h=-1&s=1',
        card_details: {
            c_title: '3_c_t',
            c_sub_title: '3_c_s_t',
            c_description: '3_c_d',
            c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            faq: [
                {
                    q: '3_f_1_q',
                    a: '3_f_1_a'
                },
                {
                    q: '3_f_2_q',
                    a: '3_f_2_a'
                },
                {
                    q: '3_f_3_q',
                    a: '3_f_3_a'
                },
                {
                    q: '3_f_4_q',
                    a: '3_f_4_a'
                },
                {
                    q: '3_f_5_q',
                    a: '3_f_5_a'
                }
            ]
        }
    },
]

const countries = createSlice({
    name: '@@countries',
    initialState,
})

export const countriesReducer = countries.reducer