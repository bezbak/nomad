import './tours.css'
import { useNavigate } from "react-router-dom";

const Tours = () => {
    const navigate = useNavigate()

    const data = [
        {
            title:'TRANSORT TOURS',
            name: 'transport',
            open:'MORE'
        },
        {
            title:"HORSE RIDING TOURS",
            name: 'horse',
            open:'MORE'
        },
        {
            title:"WALKING TOURS",
            name: 'onfoot',
            open:'MORE'
        },
        {
            title:"SKI TOURS",
            name: 'ski',
            open:'MORE'
        }
    ]

    return (
        <div className='tours' id='tours'>
            <h2>Tours</h2>
            <div className="tours_cards">
                {
                    data.map(type => (
                        <div className="card" key={type.name} onClick={() => navigate(`/tours/${type.name}`)}>
                            <div className="card-bot">
                            <h3>{type.title}</h3>
                            <h3 className='text-pop-up-left' >{type.open}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tours;