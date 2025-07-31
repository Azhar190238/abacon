import React from 'react'
import HeroSection from '../components/landing/home/hero'
import TextSection from '../components/landing/home/text'
import AboutSection from '../components/landing/home/about'
import BenefitsSection from '../components/landing/home/benefits'
import ServicesSection from '../components/landing/home/services'
import Free_Consultation from '../components/landing/home/free_consulation'
import ProcessSection from '../components/landing/home/process'
import Gallery from '../components/landing/home/gallery'
import Free_Initial from '../components/landing/home/free_initial'
export default async function Home() {

  return (
    <div className=' flex flex-col space-y-6'>
       <HeroSection/>
       <BenefitsSection/>
       <AboutSection/>
       <ServicesSection/>
       <Free_Consultation/>
       <ProcessSection/>
       <Gallery/>
       <Free_Initial/>
       <TextSection />
    </div>
  )
}