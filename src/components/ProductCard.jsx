import React from "react";
import {assets} from "../assets/assets.js";
import {useAppContext} from "../context/AppContext.jsx";

const ProductCard = ({product}) => {
    const {currency,addToCart,removeFromCart,cartItems,navigate} = useAppContext();

    return product && (
        <div onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
            scrollTo(0,0)}
        } className="border border-gray-500/20 rounded-md px-1 sm:px-3 md:px-4 py-2 bg-white w-full">
            <div className="group cursor-pointer flex items-center justify-center h-18 sm:h-20 md:h-28 ">
                <img className="mt-10 mb-2 group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-xs sm:text-sm">
                <p className="text-xs truncate mb-0.5 mt-9">{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full mb-0.5">{product.name}</p>
                <div className="flex items-center gap-0.5 mb-3">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} className="md:w-3.5 w-3" src={i<4?assets.star_icon:assets.star_dull_icon} alt="rating star"/>
                    ))}
                    <p className="text-xs">4</p>
                </div>
                <div className="flex items-end justify-between mt-1 md:mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        {currency}{product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e)=>{e.stopPropagation();}} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center cursor-pointer justify-center gap-1 bg-primary/10 border border-primary/40 px-2 md:w-20 w-16 h-8.5 rounded" onClick={() => addToCart(product._id)} >
                                <img className="w-3.5" src={assets.cart_icon_2} alt="cart icon"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 bg-primary/25 rounded select-none">
                                <button onClick={() => removeFromCart(product._id)} className="cursor-pointer px-1 sm:px-2 h-full" >
                                    -
                                </button>
                                <span className="w-2 sm:w-4 md:w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() => addToCart(product._id)} className="cursor-pointer px-1 sm:px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;