import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <ServicesSection />
                <TestimonialSlider />
            </main>
            <Footer />
        </>
    );
};

export default Home;
