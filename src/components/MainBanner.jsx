import React from 'react';
import {Link} from "react-router-dom";

const MainBanner = () => {
    return (
        <div className='relative'>
            <img className="w-full hidden md:block" src='../assets/main_banner_bg.png' alt="main banner bg" />
            <img className="w-full  md:hidden" src='../assets/main_banner_bg_sm.png' alt="main banner bg sm" />
            <div className='absolute flex flex-col items-center inset-0 md:items-start justify-end
            md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                <h1
                  className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105
                  leading-tight lg:leading-15'
                >Tech You Can Trust, Deals You'll Love!</h1>

            <div className='flex items-center mt-6 font-medium'>

                <Link to={'/products'}  className='group flex items-center gap-2 px-7 md:px-9 py-3
                bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>Shop Now</Link>
                <img className='md:hidden transition group-focus:translate-x-1' src='../assets/white_arrow_icon.svg' alt="arrow" />

                <Link to={'/products'}  className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>Explore Offers </Link>
                <img className='transition group-hover:translate-x-1' src='../assets/black_arrow_icon.svg' alt="arrow" />

            </div>
            </div>
        </div>
    );
};

export default MainBanner;