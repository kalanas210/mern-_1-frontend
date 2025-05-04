import React from 'react';
import ProductCard from "./ProductCard.jsx";
import {useAppContext} from "../context/AppContext.jsx";

const BestItems = () => {
    const {products} = useAppContext();
    console.log(products);

    return (
        <div className='mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Items</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                {<ProductCard product={products[0]} />}
            </div>
        </div>
    );
};

export default BestItems;