import React from 'react';
import MainBanner from "../components/MainBanner.jsx";
import Categories from "../components/Categories.jsx";
import BestItems from "../components/BestItems.jsx";
import BottomBanner from "../components/BottomBanner.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className='mt-10'>
            <MainBanner />
            <Categories />
            <BestItems />
            <BottomBanner />
            <Newsletter />
        </div>
    );
};

export default Home;