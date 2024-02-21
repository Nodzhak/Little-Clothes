import React from 'react' 
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Meet from './components/Meet/Meet.jsx'
import OurCare from './components/OurCare/OurCare.jsx';
import Collection from './components/Collection/Collection.jsx';
import Akcio from './components/Akcio/Akcio.jsx'
import Slider from './components/Slider/Slider.jsx'
import Trust from './components/Trust/Trust.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Meet />
    <OurCare />
    <Collection />
    <Akcio />
    <Slider />
    <Trust />
    <Footer />
    </>
  )
}

export default App