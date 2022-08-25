import React from 'react'
import Meal from './Meal'

const MealsList = ({ meals }) => {
    return (
        <div className='grid'>
            {meals.map(el => (
                <Meal
                    key={el.idMeal}
                    {...el}
                />
            ))}
        </div>
    )
}

export default MealsList