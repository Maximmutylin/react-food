import React, { useEffect, useState } from 'react'
import { getAllCategory } from '../api'
import Category from '../components/Category';
import Preloader from '../components/Preloader';
import Search from "../components/Search";

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategory()
      .then(data => {
        setCatalog(data.categories)
      }
      )
  }, [])

  return (
    <>
      {!catalog.length ? <Preloader /> : (
        <Category catalog={catalog} />
      )}
    </>
  )
}

export default Home