import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import WeeklyRecipe from './Components/WeeklyRecipe'
import Categories from './Components/Categories'
import AppleStore from './Components/AppleStore'
import Chefs from './Components/Chefs'
import Info from './Components/Info'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Subscribe from './Components/Subscribe'
import RecipeDetails from './pages/RecipeDetails'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/recipes/:id' element={<RecipeDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
