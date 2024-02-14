export const ToursTypeSelector = (type) => {
    switch(type){
        case 'transport': {
            return {
                url: 'https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'tours_t_title',
                description: 'tours_t_description'
            }
        }
        case 'horse': {
            return {
                url: 'https://images.unsplash.com/photo-1588883717936-811f2b0d0a10?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'tours_h_title',
                description: 'tours_h_description'
            }
        }
        case 'onfoot': {
            return {
                url: 'https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'tours_f_title',
                description: 'tours_f_description'
            }
        }
        case 'ski': {
            return {
                url: 'https://plus.unsplash.com/premium_photo-1661868371660-eac62d15361f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'tours_s_title',
                description: 'tours_s_description'
            }
        }
        default: return {
            url: 'https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'tours_t_tittle',
            description: 'tours_t_description'
        }
    }
}