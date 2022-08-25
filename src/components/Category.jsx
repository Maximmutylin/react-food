import React from 'react'
import { useSearchParams } from 'react-router-dom';
import CategoryItem from './CategoryItem'
import Search from './Search'

const Category = ({ catalog = [], }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const params = searchParams.toString().substring(0, searchParams.toString().length - 1);

    return (
        <>
            <Search searchParams={searchParams} setSearchParams={setSearchParams} />
            <div className='grid'>
                {
                    catalog.filter(el => el.strCategory.toLowerCase().includes(params)).length > 0 ?
                        (catalog.filter(el => el.strCategory.toLowerCase().includes(params))
                            .map(el => (
                                <CategoryItem
                                    key={el.idCategory} {...el}
                                />
                            ))) : <h4>Nothing found</h4>
                }
            </div>
        </>
    )
}

export default Category