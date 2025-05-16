import React from 'react';
import ProductCard from "./ProductCard.jsx";
import {useAppContext} from "../context/AppContext.jsx";

const NewItems = () => {
    const {products} = useAppContext();
    console.log(products);

    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>New Arrivals</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                {products.filter((product)=>product.inStock).slice(11,16).map((product,index) => (
                    <ProductCard key={index} product={product} />
                ))}

            </div>
        </div>
    );
};

export default NewItems;
