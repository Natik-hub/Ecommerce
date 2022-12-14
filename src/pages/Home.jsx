import React from 'react'
import Annoucement from '../components/Announcement'
import Categories from '../components/Catagories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
    <Annoucement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
    <Footer />
    </div>
   
  )
}

export default Home