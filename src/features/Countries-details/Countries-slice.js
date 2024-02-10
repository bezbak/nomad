import { createSlice, nanoid } from "@reduxjs/toolkit";

const countries = createSlice({
    name: '@@countries',
    initialState: [
        {
            id: nanoid(),
            name: 'kg',
            type: 'onfoot',
            day: '1',
            title: 'One day Tour in Osh, Kyrgyzstan',
            sub_title: 'One day, One night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Osh - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'onfoot',
            day: '1',
            title: 'One day Tour in Bishkek, Kyrgyzstan',
            sub_title: 'One day, One night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Bishkek - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'onfoot',
            day: '4',
            title: 'Four day Tour in Osh, Kyrgyzstan',
            sub_title: 'Four day, Three night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Osh - Four day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'onfoot',
            day: '5',
            title: 'Five day Tour in Osh, Kyrgyzstan',
            sub_title: 'Five day, Four night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Osh - Five day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'transport',
            day: '9',
            title: 'Kyrgyzstan of Road Adventure in Bishkek, Kyrgyzstan',
            sub_title: 'Nine day, Eight night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Bishkek - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'transport',
            day: '11',
            title: 'Eleven day Tour in Bishkek, Kyrgyzstan',
            sub_title: '11 day, 10 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Bishkek - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'transport',
            day: '7',
            title: 'Seven day Tour in Bishkek, Kyrgyzstan',
            sub_title: '7 day, 6 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Bishkek - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'horse',
            day: '7',
            title: 'Seven day Tour in Sonkol, Naryn',
            sub_title: '11 day, 10 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Bishkek - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'horse',
            day: '5',
            title: 'Five day Tour in Bishkek, Kyrgyzstan',
            sub_title: '5 day, 4 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Naryn - 5 day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'uz',
            type: 'horse',
            day: '7',
            title: 'Seven day Tour in Uzbekistan',
            sub_title: '7 day, 6 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Uzbekistan',
                c_sub_title: 'Uzbekistan - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'uz',
            type: 'horse',
            day: '5',
            title: 'Five day Tour in Uzbekistan',
            sub_title: '5 day, 4 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Uzbekistan',
                c_sub_title: 'Uzbekistan - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
        {
            id: nanoid(),
            name: 'kg',
            type: 'ski',
            day: '7',
            title: 'Seven day Tour in Karakol, Kyrgyzstan',
            sub_title: '7 day, 6 night',
            bg_img: 'https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            card_details: {
                c_title: 'Kyrgyzstan',
                c_sub_title: 'Karakol - One day',
                c_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut corporis, eaque error excepturi inventore iste iure magnam mollitia nemo nesciunt numquam provident quo, rem rerum sit voluptate voluptatum.',
                c_video: 'https://www.youtube.com/embed/_SB-SOXerRQ?si=qC0iiAuKBWCffc6q',
                c_img_1: 'https://images.unsplash.com/photo-1606296672103-4783b174ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_2: 'https://images.unsplash.com/photo-1586795153158-22bf74b4f1c3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                c_img_3: 'https://images.unsplash.com/photo-1627628593424-5f197aebeaeb?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                faq: [
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                    {
                        q: 'Day 1:  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.',
                        a: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi expedita nisi temporibus voluptas, voluptate.'
                    },
                ]
            }
        },
    ]
})


export const countriesReducer = countries.reducer