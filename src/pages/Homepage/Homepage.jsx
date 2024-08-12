import React from 'react'
import MainCarousel from '../../organism/Carousel/MainCarousel'
import HomeSectionCarousel from '../../organism/Carousel/HomeSectionCarousel'
import { mens_kurta } from '../../assets/Mens/Mens_Kurta'

export default function Homepage() {
  return (

    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shoes" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shirts" />
        <HomeSectionCarousel data={mens_kurta} sectionName="Women's Saree" />
        <HomeSectionCarousel data={mens_kurta} sectionName="women's Dress" />
      </div>
    </div>
  )
}
