import './tours.css'
import { useNavigate } from "react-router-dom";

const Tours = () => {
    const navigate = useNavigate()

    const data = [
        {
            name: 'transport'
        },
        {
            name: 'horse'
        },
        {
            name: 'onfoot'
        },
        {
            name: 'ski'
        }
    ]

    return (
        <div className='tours' id='tours'>
            <h2>Tours</h2>
            <div className="tours_cards">
                {
                    data.map(type => (
                        <div className="card" key={type.name} onClick={() => navigate(`/tours/${type.name}`)}></div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tours;