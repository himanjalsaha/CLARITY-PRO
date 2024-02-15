import React from 'react'
import LndingpageHero from '../components/LndingpageHero'
import Features from '../components/Features'
import TargetAudience from '../components/TargetAudience'
import { Footer } from '../components/Footer'
import { Mail } from '../components/Mail'
const LandingPage = () => {
  return (
    <div className=' bg-black'>
      <LndingpageHero/>
      <Features/>
      <TargetAudience/>
      <Mail/>
      <Footer/>

    </div>

  )
}

export default LandingPage