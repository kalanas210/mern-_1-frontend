import React from 'react';
import ProductCard from "./ProductCard.jsx";
import {useAppContext} from "../context/AppContext.jsx";

const BestItems = () => {
    const {products} = useAppContext();
    console.log(products);

    return (
        <div className='mt-8 md:mt-16 px-2 md:px-0'>
            <p className='text-xl md:text-2xl lg:text-3xl font-medium'>Best Items</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-6 mt-4 md:mt-6'>
                {products.filter((product)=>product.inStock).slice(0,5).map((product,index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestItems;