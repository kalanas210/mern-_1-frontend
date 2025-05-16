import React from 'react';
import MainBanner from "../components/MainBanner.jsx";
import Categories from "../components/Categories.jsx";
import BestItems from "../components/BestItems.jsx";
import BottomBanner from "../components/BottomBanner.jsx";
import Newsletter from "../components/Newsletter.jsx";
import AnimateSection from "../components/AnimateSection.jsx";
import NewItems from "../components/NewItems.jsx";

const Home = () => {
    return (
        <div className='mt-10'>
            <MainBanner />

            <AnimateSection type="fade-up" delay={100}>
                <Categories />
            </AnimateSection>

            <AnimateSection type="fade-up" delay={200}>
                <BestItems />
            </AnimateSection>

            <AnimateSection type="zoom-in" delay={200}>
                <NewItems />
            </AnimateSection>

            <AnimateSection type="fade-up" delay={100}>
                <BottomBanner />
            </AnimateSection>

            <AnimateSection type="zoom-in" delay={100}>
                <Newsletter />
            </AnimateSection>
        </div>
    );
};

export default Home;