import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
  }, [id])
  return (
    <>
      {recipe.length ? <Preloader /> : (
        <div className='recipe'>
          <img className='recipe-img' src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1 className='recipe-title'>Name meal: {recipe.strMeal}</h1>
          <h4 className='recipe-category'>Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h4 className='recipe-area'>Area: {recipe.strArea}</h4> : null}
          <p className='recipe-incstruction'>{recipe.strInstructions}</p>
          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video recipe</h5>
              <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}></iframe>
            </div>
          ) : null}
          <button className='btn' onClick={() => navigate(-1)}>Back</button>
        </div>


      )}

    </>
  )
}

export default Recipe 