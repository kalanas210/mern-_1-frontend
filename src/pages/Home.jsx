import React from 'react';
import MainBanner from "../components/MainBanner.jsx";
import Categories from "../components/Categories.jsx";
import BestItems from "../components/BestItems.jsx";

const Home = () => {
    return (
        <div className='mt-10'>
            <MainBanner />
            <Categories />
            <BestItems />
        </div>
    );
};

export default Home;