import React from 'react';
import About from './components/About';
import SpecialOffer from './components/SpecialOffer';
import Testimonial from './components/Testimonial';
import BlogSection from './components/BlogSection';

const Home = () => {
    return (
        <div>
            <About />

            <SpecialOffer />

            <Testimonial />

            <BlogSection />
        </div>
    );
};

export default Home;