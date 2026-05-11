import React from 'react'
import MainSlider from './MainSlider'
import CategorySection from './CategorySection'
import DiscountProducts from './DiscountProducts'

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <DiscountProducts/>
      <CategorySection/>
    </div>
  )
}
