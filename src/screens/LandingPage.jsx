import React from 'react'
import LndingpageHero from '../components/LndingpageHero'
import Features from '../components/Features'
import TargetAudience from '../components/TargetAudience'
import Footer from '../components/Footer'
const LandingPage = () => {
  return (
    <div className=' bg-black'>
      <LndingpageHero/>
      <Features/>
      <TargetAudience/>
      <Footer/>

    </div>

  )
}

export default LandingPage