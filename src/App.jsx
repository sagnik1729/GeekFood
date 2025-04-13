import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App;
