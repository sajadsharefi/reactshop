import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header/Header'
import Nav from './componentes/Header/Nav'
import Carousel from './componentes/Slider/Carousel'
import Infintey from './componentes/Slider/Infintey'
import BestSell from './componentes/Index/BestSell'
import SpecialSale from './componentes/Index/SpecialSale'
import BestWeek from './componentes/Index/BestWeek'
import Interset from './componentes/Index/Interset'
import Footer from './componentes/Footer/Footer'
import FooterMobile from './componentes/Footer/FooterMobile'

const courses = [
  {
    imageUrl: "/image/slider/banner1.jpg",
  },
  {
    imageUrl: "/image/slider/banner2.jpg",
  },
  {
    imageUrl: "/image/slider/banner5.webp",
  },
  {
    imageUrl: "/image/slider/banner6.webp",
  }
];


function App() {

  return (
    <div>
      <Header />
      <Nav />
      <Carousel >
        {courses.map((course) => (
          <img src={course.imageUrl} />
        ))}
      </Carousel>
      <Infintey />
      <div className='px-4'>
        <BestSell />
        <SpecialSale />
        <BestWeek />
        <Interset />
      </div>
      <div className='max-md:hidden'>
        <Footer />
      </div>
      <div className='hidden max-md:flex'>
        <FooterMobile />
      </div>
    </div>
  )
}

export default App
