import d1 from './tours-s-img/details-1.avif'
import d2 from './tours-s-img/details-2.avif'
import d3 from './tours-s-img/details-3.avif'
import d4 from './tours-s-img/details-4.avif'

export const ToursTypeSelector = (type) => {
    switch(type){
        case 'transport': {
            return {
                url: d1,
                title: 'tours_t_title',
                description: 'tours_t_description'
            }
        }
        case 'horse': {
            return {
                url: d2,
                title: 'tours_h_title',
                description: 'tours_h_description'
            }
        }
        case 'onfoot': {
            return {
                url: d3,
                title: 'tours_f_title',
                description: 'tours_f_description'
            }
        }
        case 'ski': {
            return {
                url: d4,
                title: 'tours_s_title',
                description: 'tours_s_description'
            }
        }
        default: return {
            url: d1,
            title: 'tours_t_tittle',
            description: 'tours_t_description'
        }
    }
}