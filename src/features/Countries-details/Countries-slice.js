import { createSlice, nanoid } from "@reduxjs/toolkit";
import c_1_1  from './images/транс/2  Exploration of the Sacred Landscapes of Kyrgyzstan through Off-Road Adventures 10 days/img1.jpg'
import c_1_2  from './images/транс/2  Exploration of the Sacred Landscapes of Kyrgyzstan through Off-Road Adventures 10 days/img2.jpg'
import c_1_3  from './images/транс/2  Exploration of the Sacred Landscapes of Kyrgyzstan through Off-Road Adventures 10 days/img3.jpg'

import c_2_1 from './images/транс/1  Kyrgyz off road Adventure 8 nights9 days/img1.jpg'
import c_2_2 from './images/транс/1  Kyrgyz off road Adventure 8 nights9 days/bg.webp'
import c_2_3 from './images/транс/1  Kyrgyz off road Adventure 8 nights9 days/img3.jpg'

import c_3_1 from './images/транс/3 Scenic adventure around Issyk-Kul lake. 3 days/img1.jpg'
import c_3_2 from './images/транс/3 Scenic adventure around Issyk-Kul lake. 3 days/img2.jpg'
import c_3_3 from './images/транс/3 Scenic adventure around Issyk-Kul lake. 3 days/img3.jpg'

import c_4_1 from './images/транс/2 The optimal single-day tour showcasing the scenic beauty of Issyk-Kul Lake/img1.jpg'
import c_4_2 from './images/транс/2 The optimal single-day tour showcasing the scenic beauty of Issyk-Kul Lake/img2.jpg'
import c_4_3 from './images/транс/2 The optimal single-day tour showcasing the scenic beauty of Issyk-Kul Lake/img3.jpg'

import h_1_1 from './images/ат/1  Nomadic Horse Ridding adventure in Song-Kul 4 nights5 days/img1.webp'
import h_1_2 from './images/ат/1  Nomadic Horse Ridding adventure in Song-Kul 4 nights5 days/img2.webp'
import h_1_3 from './images/ат/1  Nomadic Horse Ridding adventure in Song-Kul 4 nights5 days/img3.webp'

import f_1_1 from './images/Пешком/4 Five day`s tour plan Ош/img1.jpg'
import f_1_2 from './images/Пешком/4 Five day`s tour plan Ош/img2.jpg'
import f_1_3 from './images/Пешком/4 Five day`s tour plan Ош/img3.jpg'

import f_2_1 from './images/Пешком/1  Explore both Ala-Archa National Park and Bishkek city in a single day/img1.jpg'
import f_2_2 from './images/Пешком/1  Explore both Ala-Archa National Park and Bishkek city in a single day/img2.jpg'
import f_2_3 from './images/Пешком/1  Explore both Ala-Archa National Park and Bishkek city in a single day/img3.jpg'

import f_3_1 from './images/Пешком/5 One day`s tour plan in Osh/img1.jpg'
import f_3_2 from './images/Пешком/5 One day`s tour plan in Osh/img2.jpg'
import f_3_3 from './images/Пешком/5 One day`s tour plan in Osh/img3.jpg'

import s_1_1 from './images/лыжа/Freestyle skiing and Ski excursions in Kyrgyzstan/img1.jpg'
import s_1_2 from './images/лыжа/Freestyle skiing and Ski excursions in Kyrgyzstan/img2.jpg'
import s_1_3 from './images/лыжа/Freestyle skiing and Ski excursions in Kyrgyzstan/img3.jpg'


import uzb_1 from './images/uzb/uzb-1.avif'
import uzb_2 from './images/uzb/uzb-2.avif'
import uzb_3 from './images/uzb/uzb-3.avif'

import uzb_4 from './images/uzb/uzb-4.avif'
import uzb_5 from './images/uzb/uzb-5.avif'
import uzb_6 from './images/uzb/uzb-6.webp'

const initialState = [
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '9',
        title: '1_t',
        sub_title: '1_s_t',
        bg_img: c_2_2,
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
            c_img_1: c_2_1,
            c_img_2: c_2_2,
            c_img_3: c_2_3,
            c_w_note: 'w_note',
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
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '11',
        title: '2_t',
        sub_title: '2_s_t',
        bg_img: c_1_1,
        card_details: {
            c_title: '2_t',
            c_sub_title: '2_c_s_t',
            c_description: '2_c_d',
            c_category: '2_c_c',
            c_time: '2_c_t',
            c_acc: '2_c_a',
            c_d: '2_s_t',
            c_operate: '2_c_o',
            c_tour_op: '2_c_t_o',
            c_age: '2_c_age',
            c_size: '2_c_s',
            c_img_1: c_1_1,
            c_img_2: c_1_2,
            c_img_3: c_1_3,
            c_w_note: 'w_note',
            faq: [
                {
                    ac: '2_f_1_ac',
                    meals: '2_f_1_m',
                    q: '2_f_1_q',
                    a: '2_f_1_a'
                },
                {
                    ac: '2_f_2_ac',
                    meals: '2_f_2_m',
                    q: '2_f_2_q',
                    a: '2_f_2_a'
                },
                {
                    ac: '2_f_3_ac',
                    meals: '2_f_3_m',
                    q: '2_f_3_q',
                    a: '2_f_3_a'
                },
                {
                    ac: '2_f_4_ac',
                    meals: '2_f_4_m',
                    q: '2_f_4_q',
                    a: '2_f_4_a'
                },
                {
                    ac: '2_f_5_ac',
                    meals: '2_f_5_m',
                    q: '2_f_5_q',
                    a: '2_f_5_a'
                },
                {
                    ac: '2_f_6_ac',
                    meals: '2_f_6_m',
                    q: '2_f_6_q',
                    a: '2_f_6_a'
                },
                {
                    ac: '2_f_7_ac',
                    meals: '2_f_7_m',
                    q: '2_f_7_q',
                    a: '2_f_7_a'
                },
                {
                    ac: '2_f_8_ac',
                    meals: '2_f_8_m',
                    q: '2_f_8_q',
                    a: '2_f_8_a'
                },
                {
                    ac: '2_f_9_ac',
                    meals: '2_f_9_m',
                    q: '2_f_9_q',
                    a: '2_f_9_a'
                },
                {
                    ac: '2_f_10_ac',
                    meals: '2_f_10_m',
                    q: '2_f_10_q',
                    a: '2_f_10_a'
                },
                {
                    ac: '2_f_11_ac',
                    meals: '2_f_11_m',
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
        bg_img: h_1_1,
        card_details: {
            c_title: '3_t',
            c_sub_title: '3_c_s_t',
            c_description: '3_c_d',
            c_category: '3_c_c',
            c_time: '3_c_t',
            c_acc: '3_c_a',
            c_d: '3_s_t',
            c_operate: '3_c_o',
            c_tour_op: '3_c_t_o',
            c_age: '3_c_age',
            c_size: '3_c_s',
            c_img_1: h_1_1,
            c_img_2: h_1_2,
            c_img_3: h_1_3,
            faq: [
                {
                    ac: '3_f_1_ac',
                    meals: '3_f_1_m',
                    q: '3_f_1_q',
                    a: '3_f_1_a'
                },
                {
                    ac: '3_f_2_ac',
                    meals: '3_f_2_m',
                    q: '3_f_2_q',
                    a: '3_f_2_a'
                },
                {
                    ac: '3_f_3_ac',
                    meals: '3_f_3_m',
                    q: '3_f_3_q',
                    a: '3_f_3_a'
                },
                {
                    ac: '3_f_4_ac',
                    meals: '3_f_4_m',
                    q: '3_f_4_q',
                    a: '3_f_4_a'
                },
                {
                    ac: '3_f_5_ac',
                    meals: '3_f_5_m',
                    q: '3_f_5_q',
                    a: '3_f_5_a'
                },
            ]
        }
    },  
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '3',
        title: '4_t',
        sub_title: '4_s_t',
        bg_img: c_3_1,
        card_details: {
            c_title: '4_t',
            c_sub_title: '4_c_s_t',
            c_description: '4_c_d',
            c_category: '4_c_c',
            c_time: '4_c_t',
            c_acc: '4_c_a',
            c_d: '4_s_t',
            c_operate: '4_c_o',
            c_tour_op: '4_c_t_o',
            c_age: '4_c_age',
            c_size: '4_c_s',
            c_img_1: c_3_1 ,
            c_img_2: c_3_2,
            c_img_3: c_3_3,

            faq: [
                {
                    ac: '4_f_1_ac',
                    meals: '4_f_1_m',
                    q: '4_f_1_q',
                    a: '4_f_1_a'
                },
                {
                    ac: '4_f_2_ac',
                    meals: '4_f_2_m',
                    q: '4_f_2_q',
                    a: '4_f_2_a'
                },
                {
                    ac: '4_f_3_ac',
                    meals: '4_f_3_m',
                    q: '4_f_3_q',
                    a: '4_f_3_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '7',
        title: '5_t',
        sub_title: '5_s_t',
        bg_img: c_2_3,
        card_details: {
            c_title: '5_t',
            c_sub_title: '5_c_s_t',
            c_description: '5_c_d',
            c_category: '5_c_c',
            c_time: '5_c_t',
            c_acc: '5_c_a',
            c_d: '5_s_t',
            c_operate: '5_c_o',
            c_tour_op: '5_c_t_o',
            c_age: '5_c_age',
            c_size: '5_c_s',
            c_img_1: c_1_1,
            c_img_2:c_3_3,
            c_img_3: c_3_2,
            faq: [
                {
                    ac: '5_f_1_ac',
                    meals: '5_f_1_m',
                    q: '5_f_1_q',
                    a: '5_f_1_a'
                },
                {
                    ac: '5_f_2_ac',
                    meals: '5_f_2_m',
                    q: '5_f_2_q',
                    a: '5_f_2_a'
                },
                {
                    ac: '5_f_3_ac',
                    meals: '5_f_3_m',
                    q: '5_f_3_q',
                    a: '5_f_3_a'
                },
                {
                    ac: '5_f_4_ac',
                    meals: '5_f_4_m',
                    q: '5_f_4_q',
                    a: '5_f_4_a'
                },
                {
                    ac: '5_f_5_ac',
                    meals: '5_f_5_m',
                    q: '5_f_5_q',
                    a: '5_f_5_a'
                },
                {
                    ac: '5_f_6_ac',
                    meals: '5_f_6_m',
                    q: '5_f_6_q',
                    a: '5_f_6_a'
                },
                {
                    ac: '5_f_7_ac',
                    meals: '5_f_7_m',
                    q: '5_f_7_q',
                    a: '5_f_7_a'
                },

            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'onfoot',
        day: '4',
        title: '6_t',
        sub_title: '6_s_t',
        bg_img: f_1_1,
        card_details: {
            c_title: '6_t',
            c_sub_title: '6_c_s_t',
            c_description: '6_c_d',
            c_category: '6_c_c',
            c_time: '6_c_t',
            c_acc: '6_c_a',
            c_d: '6_s_t',
            c_operate: '6_c_o',
            c_tour_op: '6_c_t_o',
            c_age: '6_c_age',
            c_size: '6_c_s',
            c_img_1: f_1_1,
            c_img_2: f_1_2,
            c_img_3: f_1_3,
            faq: [
                {
                    ac: '6_f_1_ac',
                    meals: '6_f_1_m',
                    q: '6_f_1_q',
                    a: '6_f_1_a'
                },
                {
                    ac: '6_f_2_ac',
                    meals: '6_f_2_m',
                    q: '6_f_2_q',
                    a: '6_f_2_a'
                },
                {
                    ac: '6_f_3_ac',
                    meals: '6_f_3_m',
                    q: '6_f_3_q',
                    a: '6_f_3_a'
                },
                {
                    ac: '6_f_4_ac',
                    meals: '6_f_4_m',
                    q: '6_f_4_q',
                    a: '6_f_4_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'kg',
        type: 'onfoot',
        day: '5',
        title: '7_t',
        sub_title: '7_s_t',
        bg_img: f_1_1,
        card_details: {
            c_title: '7_t',
            c_sub_title: '7_c_s_t',
            c_description: '7_c_d',
            c_category: '7_c_c',
            c_time: '7_c_t',
            c_acc: '7_c_a',
            c_d: '7_s_t',
            c_operate: '7_c_o',
            c_tour_op: '7_c_t_o',
            c_age: '7_c_age',
            c_size: '7_c_s',
            c_img_1: f_1_1,
            c_img_2:f_1_2,
            c_img_3: f_1_3,
            faq: [
                {
                    ac: '7_f_1_ac',
                    meals: '7_f_1_m',
                    q: '7_f_1_q',
                    a: '7_f_1_a'
                },
                {
                    ac: '7_f_2_ac',
                    meals: '7_f_2_m',
                    q: '7_f_2_q',
                    a: '7_f_2_a'
                },
                {
                    ac: '7_f_3_ac',
                    meals: '7_f_3_m',
                    q: '7_f_3_q',
                    a: '7_f_3_a'
                },
                {
                    ac: '7_f_4_ac',
                    meals: '7_f_4_m',
                    q: '7_f_4_q',
                    a: '7_f_4_a'
                },
                {
                    ac: '7_f_5_ac',
                    meals: '7_f_5_m',
                    q: '7_f_5_q',
                    a: '7_f_5_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'kg',
        type: 'onfoot',
        day: '1',
        title: '8_t',
        sub_title: '8_s_t',
        bg_img:f_2_2,
        card_details: {
            c_title: '8_t',
            c_sub_title: '8_c_s_t',
            c_description: '8_c_d',
            c_category: '8_c_c',
            c_time: '8_c_t',
            c_acc: '8_c_a',
            c_d: '8_s_t',
            c_operate: '8_c_o',
            c_tour_op: '8_c_t_o',
            c_age: '8_c_age',
            c_size: '8_c_s',
            c_img_1: f_2_1,
            c_img_2:f_2_2,
            c_img_3: f_2_3,
            faq: [
                {
                    ac: '8_f_1_ac',
                    meals: '8_f_1_m',
                    q: '8_f_1_q',
                    a: '8_f_1_a'
                },
                {
                    ac: '8_f_2_ac',
                    meals: '8_f_2_m',
                    q: '8_f_2_q',
                    a: '8_f_2_a'
                },
                {
                    ac: '8_f_3_ac',
                    meals: '8_f_3_m',
                    q: '8_f_3_q',
                    a: '8_f_3_a'
                },
                {
                    ac: '8_f_4_ac',
                    meals: '8_f_4_m',
                    q: '8_f_4_q',
                    a: '8_f_4_a'
                },
                {
                    ac: '8_f_5_ac',
                    meals: '8_f_5_m',
                    q: '8_f_5_q',
                    a: '8_f_5_a'
                },
                {
                    ac: '8_f_6_ac',
                    meals: '8_f_6_m',
                    q: '8_f_6_q',
                    a: '8_f_6_a'
                },
                {
                    ac: '8_f_7_ac',
                    meals: '8_f_7_m',
                    q: '8_f_7_q',
                    a: '8_f_7_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'kg',
        type: 'transport',
        day: '1',
        title: '9_t',
        sub_title: '9_s_t',
        bg_img: c_4_1,
        card_details: {
            c_title: '9_t',
            c_sub_title: '9_c_s_t',
            c_description: '9_c_d',
            c_category: '9_c_c',
            c_time: '9_c_t',
            c_acc: '9_c_a',
            c_d: '9_s_t',
            c_operate: '9_c_o',
            c_tour_op: '9_c_t_o',
            c_age: '9_c_age',
            c_size: '9_c_s',
            c_img_1: c_4_1,
            c_img_2: c_4_2,
            c_img_3: c_4_3,
            faq: [
                {
                    ac: '9_f_1_ac',
                    meals: '9_f_1_m',
                    q: '9_f_1_q',
                    a: '9_f_1_a'
                },
                {
                    ac: '9_f_2_ac',
                    meals: '9_f_2_m',
                    q: '9_f_2_q',
                    a: '9_f_2_a'
                },
                {
                    ac: '9_f_3_ac',
                    meals: '9_f_3_m',
                    q: '9_f_3_q',
                    a: '9_f_3_a'
                },
                {
                    ac: '9_f_4_ac',
                    meals: '9_f_4_m',
                    q: '9_f_4_q',
                    a: '9_f_4_a'
                },
                {
                    ac: '9_f_5_ac',
                    meals: '9_f_5_m',
                    q: '9_f_5_q',
                    a: '9_f_5_a'
                },
                {
                    ac: '9_f_6_ac',
                    meals: '9_f_6_m',
                    q: '9_f_6_q',
                    a: '9_f_6_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'onfoot',
        day: '1',
        title: '10_t',
        sub_title: '10_s_t',
        bg_img: f_3_1,
        card_details: {
            c_title: '10_t',
            c_sub_title: '10_c_s_t',
            c_description: '10_c_d',
            c_category: '10_c_c',
            c_time: '10_c_t',
            c_acc: '10_c_a',
            c_d: '10_s_t',
            c_operate: '10_c_o',
            c_tour_op: '10_c_t_o',
            c_age: '10_c_age',
            c_size: '10_c_s',
            c_img_1: f_3_1,
            c_img_2: f_3_2,
            c_img_3: f_3_3,
            faq: [
                {
                    ac: '10_f_1_ac',
                    meals: '10_f_1_m',
                    q: '10_f_1_q',
                    a: '10_f_1_a'
                },
                {
                    ac: '10_f_2_ac',
                    meals: '10_f_2_m',
                    q: '10_f_2_q',
                    a: '10_f_2_a'
                },
                {
                    ac: '10_f_3_ac',
                    meals: '10_f_3_m',
                    q: '10_f_3_q',
                    a: '10_f_3_a'
                },
                {
                    ac: '10_f_4_ac',
                    meals: '10_f_4_m',
                    q: '10_f_4_q',
                    a: '10_f_4_a'
                },
                {
                    ac: '10_f_5_ac',
                    meals: '10_f_5_m',
                    q: '10_f_5_q',
                    a: '10_f_5_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'onfoot',
        day: '1',
        title: '11_t',
        sub_title: '11_s_t',
        bg_img:f_3_2,
        card_details: {
            c_title: '11_t',
            c_sub_title: '11_c_s_t',
            c_description: '11_c_d',
            c_category: '11_c_c',
            c_time: '11_c_t',
            c_acc: '11_c_a',
            c_d: '11_s_t',
            c_operate: '11_c_o',
            c_tour_op: '11_c_t_o',
            c_age: '11_c_age',
            c_size: '11_c_s',
            c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            c_img_3: f_3_2,
            faq: [
                {
                    ac: '11_f_1_ac',
                    meals: '11_f_1_m',
                    q: '11_f_1_q',
                    a: '11_f_1_a'
                },
                {
                    ac: '11_f_2_ac',
                    meals: '11_f_2_m',
                    q: '11_f_2_q',
                    a: '11_f_2_a'
                },
                {
                    ac: '11_f_3_ac',
                    meals: '11_f_3_m',
                    q: '11_f_3_q',
                    a: '11_f_3_a'
                },
                {
                    ac: '11_f_4_ac',
                    meals: '11_f_4_m',
                    q: '11_f_4_q',
                    a: '11_f_4_a'
                },
                {
                    ac: '11_f_5_ac',
                    meals: '11_f_5_m',
                    q: '11_f_5_q',
                    a: '11_f_5_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'onfoot',
        day: '1',
        title: '12_t',
        sub_title: '12_s_t',
        bg_img:'https://kyrtag.kg/upload/iblock/ea1/ea175f765416d9153b4efaf7b4338e24.jpg',
        card_details: {
            c_title: '12_t',
            c_sub_title: '12_c_s_t',
            c_description: '12_c_d',
            c_category: '12_c_c',
            c_time: '12_c_t',
            c_acc: '12_c_a',
            c_d: '12_s_t',
            c_operate: '12_c_o',
            c_tour_op: '12_c_t_o',
            c_age: '12_c_age',
            c_size: '12_c_s',
            c_img_1: f_3_1,
            c_img_2: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/14/f7/1f/8d/snacks-at-jayma-bazaar.jpg',
            c_img_3: 'https://central-asia.guide/wp-content/uploads/2021/10/osh_park_main_square-1024x682.jpg',
            faq: [
                {
                    ac: '12_f_1_ac',
                    meals: '12_f_1_m',
                    q: '12_f_1_q',
                    a: '12_f_1_a'
                },
                {
                    ac: '12_f_2_ac',
                    meals: '12_f_2_m',
                    q: '12_f_2_q',
                    a: '12_f_2_a'
                },
                {
                    ac: '12_f_3_ac',
                    meals: '12_f_3_m',
                    q: '12_f_3_q',
                    a: '12_f_3_a'
                },
                {
                    ac: '12_f_4_ac',
                    meals: '12_f_4_m',
                    q: '12_f_4_q',
                    a: '12_f_4_a'
                },
                {
                    ac: '12_f_5_ac',
                    meals: '12_f_5_m',
                    q: '12_f_5_q',
                    a: '12_f_5_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'kg',
        type: 'ski',
        day: '7',
        title: '13_t',
        sub_title: '13_s_t',
        bg_img: s_1_1,
        card_details: {
            c_title: '13_t',
            c_sub_title: '13_c_s_t',
            c_description: '13_c_d',
            c_category: '13_c_c',
            c_time: '13_c_t',
            c_acc: '13_c_a',
            c_d: '13_s_t',
            c_operate: '13_c_o',
            c_tour_op: '13_c_t_o',
            c_age: '13_c_age',
            c_size: '13_c_s',
            c_img_1: s_1_1,
            c_img_2: s_1_2,
            c_img_3:s_1_3,
            faq: [
                {
                    ac: '13_f_1_ac',
                    meals: '13_f_1_m',
                    q: '13_f_1_q',
                    a: '13_f_1_a'
                },
                {
                    ac: '13_f_2_ac',
                    meals: '13_f_2_m',
                    q: '13_f_2_q',
                    a: '13_f_2_a'
                },
                {
                    ac: '13_f_3_ac',
                    meals: '13_f_3_m',
                    q: '13_f_3_q',
                    a: '13_f_3_a'
                },
                {
                    ac: '13_f_4_ac',
                    meals: '13_f_4_m',
                    q: '13_f_4_q',
                    a: '13_f_4_a'
                },
                {
                    ac: '13_f_5_ac',
                    meals: '13_f_5_m',
                    q: '13_f_5_q',
                    a: '13_f_5_a'
                },
                {
                    ac: '13_f_6_ac',
                    meals: '13_f_6_m',
                    q: '13_f_6_q',
                    a: '13_f_6_a'
                },
            ]
        }
    },



    {
        id: nanoid(),
        name: 'uz',
        type: 'transport',
        day: '8',
        title: '14_t',
        sub_title: '14_s_t',
        bg_img: uzb_1,
        card_details: {
            c_title: '14_t',
            c_sub_title: '14_c_s_t',
            c_description: '14_c_d',
            c_category: '14_c_c',
            c_time: '14_c_t',
            c_acc: '14_c_a',
            c_d: '14_s_t',
            c_operate: '14_c_o',
            c_tour_op: '14_c_t_o',
            c_age: '14_c_age',
            c_size: '14_c_s',
            c_img_1: uzb_1,
            c_img_2: uzb_2,
            c_img_3:uzb_3,
            faq: [
                {
                    ac: '14_f_1_ac',
                    meals: '14_f_1_m',
                    q: '14_f_1_q',
                    a: '14_f_1_a'
                },
                {
                    ac: '14_f_2_ac',
                    meals: '14_f_2_m',
                    q: '14_f_2_q',
                    a: '14_f_2_a'
                },
                {
                    ac: '14_f_3_ac',
                    meals: '14_f_3_m',
                    q: '14_f_3_q',
                    a: '14_f_3_a'
                },
                {
                    ac: '14_f_4_ac',
                    meals: '14_f_4_m',
                    q: '14_f_4_q',
                    a: '14_f_4_a'
                },
                {
                    ac: '14_f_5_ac',
                    meals: '14_f_5_m',
                    q: '14_f_5_q',
                    a: '14_f_5_a'
                },
                {
                    ac: '14_f_6_ac',
                    meals: '14_f_6_m',
                    q: '14_f_6_q',
                    a: '14_f_6_a'
                },
                {
                    ac: '14_f_7_ac',
                    meals: '14_f_7_m',
                    q: '14_f_7_q',
                    a: '14_f_7_a'
                },
                {
                    ac: '14_f_8_ac',
                    meals: '14_f_8_m',
                    q: '14_f_8_q',
                    a: '14_f_8_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'uz',
        type: 'onfoot',
        day: '8',
        title: '14_t',
        sub_title: '14_s_t',
        bg_img: uzb_1,
        card_details: {
            c_title: '14_t',
            c_sub_title: '14_c_s_t',
            c_description: '14_c_d',
            c_category: '14_c_c',
            c_time: '14_c_t',
            c_acc: '14_c_a',
            c_d: '14_s_t',
            c_operate: '14_c_o',
            c_tour_op: '14_c_t_o',
            c_age: '14_c_age',
            c_size: '14_c_s',
            c_img_1: uzb_2,
            c_img_2: uzb_1,
            c_img_3: uzb_3,
            faq: [
                {
                    ac: '14_f_1_ac',
                    meals: '14_f_1_m',
                    q: '14_f_1_q',
                    a: '14_f_1_a'
                },
                {
                    ac: '14_f_2_ac',
                    meals: '14_f_2_m',
                    q: '14_f_2_q',
                    a: '14_f_2_a'
                },
                {
                    ac: '14_f_3_ac',
                    meals: '14_f_3_m',
                    q: '14_f_3_q',
                    a: '14_f_3_a'
                },
                {
                    ac: '14_f_4_ac',
                    meals: '14_f_4_m',
                    q: '14_f_4_q',
                    a: '14_f_4_a'
                },
                {
                    ac: '14_f_5_ac',
                    meals: '14_f_5_m',
                    q: '14_f_5_q',
                    a: '14_f_5_a'
                },
                {
                    ac: '14_f_6_ac',
                    meals: '14_f_6_m',
                    q: '14_f_6_q',
                    a: '14_f_6_a'
                },
                {
                    ac: '14_f_7_ac',
                    meals: '14_f_7_m',
                    q: '14_f_7_q',
                    a: '14_f_7_a'
                },
                {
                    ac: '14_f_8_ac',
                    meals: '14_f_8_m',
                    q: '14_f_8_q',
                    a: '14_f_8_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'uz',
        type: 'horse',
        day: '8',
        title: '14_t',
        sub_title: '14_s_t',
        bg_img: uzb_1,
        card_details: {
            c_title: '14_t',
            c_sub_title: '14_c_s_t',
            c_description: '14_c_d',
            c_category: '14_c_c',
            c_time: '14_c_t',
            c_acc: '14_c_a',
            c_d: '14_s_t',
            c_operate: '14_c_o',
            c_tour_op: '14_c_t_o',
            c_age: '14_c_age',
            c_size: '14_c_s',
            c_img_1: uzb_1,
            c_img_2: uzb_2,
            c_img_3: uzb_3,
            faq: [
                {
                    ac: '14_f_1_ac',
                    meals: '14_f_1_m',
                    q: '14_f_1_q',
                    a: '14_f_1_a'
                },
                {
                    ac: '14_f_2_ac',
                    meals: '14_f_2_m',
                    q: '14_f_2_q',
                    a: '14_f_2_a'
                },
                {
                    ac: '14_f_3_ac',
                    meals: '14_f_3_m',
                    q: '14_f_3_q',
                    a: '14_f_3_a'
                },
                {
                    ac: '14_f_4_ac',
                    meals: '14_f_4_m',
                    q: '14_f_4_q',
                    a: '14_f_4_a'
                },
                {
                    ac: '14_f_5_ac',
                    meals: '14_f_5_m',
                    q: '14_f_5_q',
                    a: '14_f_5_a'
                },
                {
                    ac: '14_f_6_ac',
                    meals: '14_f_6_m',
                    q: '14_f_6_q',
                    a: '14_f_6_a'
                },
                {
                    ac: '14_f_7_ac',
                    meals: '14_f_7_m',
                    q: '14_f_7_q',
                    a: '14_f_7_a'
                },
                {
                    ac: '14_f_8_ac',
                    meals: '14_f_8_m',
                    q: '14_f_8_q',
                    a: '14_f_8_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'uz',
        type: 'ski',
        day: '8',
        title: '14_t',
        sub_title: '14_s_t',
        bg_img: uzb_1,
        card_details: {
            c_title: '14_t',
            c_sub_title: '14_c_s_t',
            c_description: '14_c_d',
            c_category: '14_c_c',
            c_time: '14_c_t',
            c_acc: '14_c_a',
            c_d: '14_s_t',
            c_operate: '14_c_o',
            c_tour_op: '14_c_t_o',
            c_age: '14_c_age',
            c_size: '14_c_s',
            c_img_1: uzb_3,
            c_img_2: uzb_2,
            c_img_3: uzb_1,
            faq: [
                {
                    ac: '14_f_1_ac',
                    meals: '14_f_1_m',
                    q: '14_f_1_q',
                    a: '14_f_1_a'
                },
                {
                    ac: '14_f_2_ac',
                    meals: '14_f_2_m',
                    q: '14_f_2_q',
                    a: '14_f_2_a'
                },
                {
                    ac: '14_f_3_ac',
                    meals: '14_f_3_m',
                    q: '14_f_3_q',
                    a: '14_f_3_a'
                },
                {
                    ac: '14_f_4_ac',
                    meals: '14_f_4_m',
                    q: '14_f_4_q',
                    a: '14_f_4_a'
                },
                {
                    ac: '14_f_5_ac',
                    meals: '14_f_5_m',
                    q: '14_f_5_q',
                    a: '14_f_5_a'
                },
                {
                    ac: '14_f_6_ac',
                    meals: '14_f_6_m',
                    q: '14_f_6_q',
                    a: '14_f_6_a'
                },
                {
                    ac: '14_f_7_ac',
                    meals: '14_f_7_m',
                    q: '14_f_7_q',
                    a: '14_f_7_a'
                },
                {
                    ac: '14_f_8_ac',
                    meals: '14_f_8_m',
                    q: '14_f_8_q',
                    a: '14_f_8_a'
                },
            ]
        }
    },

    {
        id: nanoid(),
        name: 'uz',
        type: 'transport',
        day: '6',
        title: '15_t',
        sub_title: '15_s_t',
        bg_img: uzb_4,
        card_details: {
            c_title: '15_t',
            c_sub_title: '15_c_s_t',
            c_description: '15_c_d',
            c_category: '15_c_c',
            c_time: '15_c_t',
            c_acc: '15_c_a',
            c_d: '15_s_t',
            c_operate: '15_c_o',
            c_tour_op: '15_c_t_o',
            c_age: '15_c_age',
            c_size: '15_c_s',
            c_img_1: uzb_4,
            c_img_2: uzb_5,
            c_img_3: uzb_6,
            faq: [
                {
                    ac: '15_f_1_ac',
                    meals: '15_f_1_m',
                    q: '15_f_1_q',
                    a: '15_f_1_a'
                },
                {
                    ac: '15_f_2_ac',
                    meals: '15_f_2_m',
                    q: '15_f_2_q',
                    a: '15_f_2_a'
                },
                {
                    ac: '15_f_3_ac',
                    meals: '15_f_3_m',
                    q: '15_f_3_q',
                    a: '15_f_3_a'
                },
                {
                    ac: '15_f_4_ac',
                    meals: '15_f_4_m',
                    q: '15_f_4_q',
                    a: '15_f_4_a'
                },
                {
                    ac: '15_f_5_ac',
                    meals: '15_f_5_m',
                    q: '15_f_5_q',
                    a: '15_f_5_a'
                },
                {
                    ac: '15_f_6_ac',
                    meals: '15_f_6_m',
                    q: '15_f_6_q',
                    a: '15_f_6_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'uz',
        type: 'onfoot',
        day: '6',
        title: '15_t',
        sub_title: '15_s_t',
        bg_img: uzb_4,
        card_details: {
            c_title: '15_t',
            c_sub_title: '15_c_s_t',
            c_description: '15_c_d',
            c_category: '15_c_c',
            c_time: '15_c_t',
            c_acc: '15_c_a',
            c_d: '15_s_t',
            c_operate: '15_c_o',
            c_tour_op: '15_c_t_o',
            c_age: '15_c_age',
            c_size: '15_c_s',
            c_img_1: uzb_4,
            c_img_2: uzb_5,
            c_img_3: uzb_6,
            faq: [
                {
                    ac: '15_f_1_ac',
                    meals: '15_f_1_m',
                    q: '15_f_1_q',
                    a: '15_f_1_a'
                },
                {
                    ac: '15_f_2_ac',
                    meals: '15_f_2_m',
                    q: '15_f_2_q',
                    a: '15_f_2_a'
                },
                {
                    ac: '15_f_3_ac',
                    meals: '15_f_3_m',
                    q: '15_f_3_q',
                    a: '15_f_3_a'
                },
                {
                    ac: '15_f_4_ac',
                    meals: '15_f_4_m',
                    q: '15_f_4_q',
                    a: '15_f_4_a'
                },
                {
                    ac: '15_f_5_ac',
                    meals: '15_f_5_m',
                    q: '15_f_5_q',
                    a: '15_f_5_a'
                },
                {
                    ac: '15_f_6_ac',
                    meals: '15_f_6_m',
                    q: '15_f_6_q',
                    a: '15_f_6_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'uz',
        type: 'horse',
        day: '6',
        title: '15_t',
        sub_title: '15_s_t',
        bg_img: uzb_4,
        card_details: {
            c_title: '15_t',
            c_sub_title: '15_c_s_t',
            c_description: '15_c_d',
            c_category: '15_c_c',
            c_time: '15_c_t',
            c_acc: '15_c_a',
            c_d: '15_s_t',
            c_operate: '15_c_o',
            c_tour_op: '15_c_t_o',
            c_age: '15_c_age',
            c_size: '15_c_s',
            c_img_1: uzb_4,
            c_img_2: uzb_5,
            c_img_3: uzb_6,
            faq: [
                {
                    ac: '15_f_1_ac',
                    meals: '15_f_1_m',
                    q: '15_f_1_q',
                    a: '15_f_1_a'
                },
                {
                    ac: '15_f_2_ac',
                    meals: '15_f_2_m',
                    q: '15_f_2_q',
                    a: '15_f_2_a'
                },
                {
                    ac: '15_f_3_ac',
                    meals: '15_f_3_m',
                    q: '15_f_3_q',
                    a: '15_f_3_a'
                },
                {
                    ac: '15_f_4_ac',
                    meals: '15_f_4_m',
                    q: '15_f_4_q',
                    a: '15_f_4_a'
                },
                {
                    ac: '15_f_5_ac',
                    meals: '15_f_5_m',
                    q: '15_f_5_q',
                    a: '15_f_5_a'
                },
                {
                    ac: '15_f_6_ac',
                    meals: '15_f_6_m',
                    q: '15_f_6_q',
                    a: '15_f_6_a'
                },
            ]
        }
    },
    {
        id: nanoid(),
        name: 'uz',
        type: 'ski',
        day: '6',
        title: '15_t',
        sub_title: '15_s_t',
        bg_img: uzb_4,
        card_details: {
            c_title: '15_t',
            c_sub_title: '15_c_s_t',
            c_description: '15_c_d',
            c_category: '15_c_c',
            c_time: '15_c_t',
            c_acc: '15_c_a',
            c_d: '15_s_t',
            c_operate: '15_c_o',
            c_tour_op: '15_c_t_o',
            c_age: '15_c_age',
            c_size: '15_c_s',
            c_img_1: uzb_4,
            c_img_2: uzb_5,
            c_img_3: uzb_6,
            faq: [
                {
                    ac: '15_f_1_ac',
                    meals: '15_f_1_m',
                    q: '15_f_1_q',
                    a: '15_f_1_a'
                },
                {
                    ac: '15_f_2_ac',
                    meals: '15_f_2_m',
                    q: '15_f_2_q',
                    a: '15_f_2_a'
                },
                {
                    ac: '15_f_3_ac',
                    meals: '15_f_3_m',
                    q: '15_f_3_q',
                    a: '15_f_3_a'
                },
                {
                    ac: '15_f_4_ac',
                    meals: '15_f_4_m',
                    q: '15_f_4_q',
                    a: '15_f_4_a'
                },
                {
                    ac: '15_f_5_ac',
                    meals: '15_f_5_m',
                    q: '15_f_5_q',
                    a: '15_f_5_a'
                },
                {
                    ac: '15_f_6_ac',
                    meals: '15_f_6_m',
                    q: '15_f_6_q',
                    a: '15_f_6_a'
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