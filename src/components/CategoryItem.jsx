import React from 'react'
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const { idCategory: id, strCategory: name, strCategoryThumb: image, strCategoryDescription: description } = props;



    return (

        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src={`${image}`} alt={`${id}`} />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>{description.slice(0, 250)}  ...</p>
                </div>
                <div className='card-action'>
                    <Link to={`category/${name}`} className='btn'>Watch category</Link>
                </div>
            </div>
        </div>

    )
}

export default CategoryItem