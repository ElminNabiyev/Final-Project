import React from 'react'
import HeroSection from "../components/Home/HeroSection";
import "../components/Home/HeroSection.scss";
import SliderSection from '../components/Home/SliderSection';
import DiscountSection from '../components/Home/DiscountSection';
import DealsOfWeek from '../components/Home/DealsOfWeek';
import FreeSection from '../components/Home/FreeSection';
function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <SliderSection></SliderSection>
      <DiscountSection></DiscountSection>
      <DealsOfWeek></DealsOfWeek>
      <FreeSection></FreeSection>
    </main>
  )
}

export default Home
