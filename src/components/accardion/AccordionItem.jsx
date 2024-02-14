import { useRef } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg'

const AccordionItem = ({faqItem, onClick, isOpen}) => {
    const itemRef = useRef(null)
    return (
        <li className='accardion-item'>
            <button className='accardion-header' onClick={() => onClick()}>
                <h4>{faqItem.q}</h4>
                   <ArrowIcon className={`accardion-arrow ${isOpen ? 'active' : ''}`}/>
             
            </button>
            <div className='accardion-collapse'
                style={
                    isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}
                }
            >
                <div className='accardion-body' ref={itemRef}>{faqItem.a}</div>
            </div>
        </li>
    )
};

AccordionItem.propTypes = {
    faqItem: PropTypes.any,
    onClick: PropTypes.any,
    isOpen: PropTypes.any,
};

export default AccordionItem;