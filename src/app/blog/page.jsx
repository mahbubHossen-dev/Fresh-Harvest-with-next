import React from 'react'
import About from '../Home/components/About'
import SpecialOffer from '../Home/components/SpecialOffer'
import Testimonial from '../Home/components/Testimonial'
import BlogSection from '../Home/components/BlogSection'

export default function page() {
  return (
    <div>
            <About />

            <SpecialOffer/>

            <Testimonial />

            <BlogSection />
        </div>
  )
}
