import React from 'react'
import Hero from '../component/home/Hero'
import Services from '../component/home/Services'
import Display from '../component/home/Display'
import Sectionown from '../component/home/Sectionown'
import Sectiontow from '../component/home/Sectiontow'
import BayProduct from '../component/home/BayProduct'
import SectionX from '../component/home/SectionX'
import VideoSection from '../component/home/VideoSection'

const Home = () => {
  return (
    <div>      
        <Hero />
        <Services />
        <Display />
        <SectionX/>
        <VideoSection/>
        <BayProduct />
    </div>
  )
}

export default Home