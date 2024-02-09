import './Accordion.css'
import { useState } from "react";
import AccordionItem from "./AccordionItem.jsx";
import PropTypes from 'prop-types';

const Accordion = ({faq}) => {

    const [openId, setId] = useState(null)
    return (
        <ul className='accardion'>
            {faq.map((faqItem, id) => {
                return(
                    <AccordionItem
                        onClick={() => id===openId ? setId(null) : setId(id)}
                        faqItem={faqItem}
                        isOpen={id === openId}
                        key={id}/>
                )
            })}
        </ul>
    );
};

Accordion.propTypes = {
    faq: PropTypes.any,
};

export default Accordion;