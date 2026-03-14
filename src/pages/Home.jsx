import React from 'react'
import Hero from '../Components/Hero'
import WeeklyRecipe from '../Components/WeeklyRecipe'
import Categories from '../Components/Categories'
import AppleStore from '../Components/AppleStore'
import Chefs from '../Components/Chefs'
import Info from '../Components/Info'
import Subscribe from '../Components/Subscribe'
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <>
        <Hero/>
        <WeeklyRecipe/>
        <Categories/>
        <AppleStore/>
        <Chefs/>
        <Info/>
        <Subscribe/>
        <Reviews/>
    </>
  )
}

export default Home
