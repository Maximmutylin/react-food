import React from 'react'
import { Link } from 'react-router-dom';

const Meal = (props) => {

    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div>
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={`${strMealThumb}`} alt={`${strMeal}`} />
                        <div className="card-title card-title--modification">{strMeal}</div>
                    </div>

                    <div className='card-action'>
                        <Link to={`meal/${idMeal}`} className='btn'>Watch recipe</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meal