import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
     <Hero />
    <div className='container min-h-screen mx-auto px-6 pt-20'>
      <About />
      <Services />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
    </>
  )
}

export default Home