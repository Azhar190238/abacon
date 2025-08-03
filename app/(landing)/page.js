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
    <div className=' flex flex-col'>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <div className='my-5 md:my-8 xl:my-10'>
        <ServicesSection />
      </div>
      <Free_Consultation />
      <ProcessSection />
      <Gallery />
      <Free_Initial />
      <div className='mt-5 md:mt-8 xl:mt-10'>
        <TextSection />
      </div>
    </div>
  )
}