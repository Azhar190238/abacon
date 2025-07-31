import React from 'react'
import HeroSection from '../components/landing/home/hero'
import TextSection from '../components/landing/home/text'
export default async function Home() {

  return (
    <div>
       <HeroSection/>
      <h3 className='text-2xl text-primary'>Home</h3>
      <TextSection />
    </div>
  )
}