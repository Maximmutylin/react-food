import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';
import CategoryPage from '../pages/CategoryPage';
import Recipe from '../pages/Recipe';


const Main = () => {

    return (
        <div className='main-content'>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path='category/:name' element={<CategoryPage />} />
                <Route path='category/:name/meal/:id' element={<Recipe />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Main