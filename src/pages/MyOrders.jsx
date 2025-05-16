import React, {useEffect, useState} from 'react';
import {useAppContext} from "../context/AppContext.jsx";
import axios from "axios";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {currency, user} = useAppContext();

    const fetchMyOrders = async () => {
        setIsLoading(true);
        setError(null);
        try{
            const { data } = await axios.get('/api/order/user')
            if(data.success){
                setMyOrders(data.orders);
            } else {
                setError(data.message || "Failed to fetch orders");
            }
        } catch (error) {
            console.log(error);
            setError(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(user){
            fetchMyOrders();
        } else {
            setIsLoading(false);
        }
    },[user]);

    if (!user) {
        return (
            <div className="mt-12 pb-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-end mb-4 w-max">
                    <p className="text-2xl font-medium uppercase">My Orders</p>
                    <div className="w-16 h-0.5 bg-primary rounded-full"></div>
                </div>
                <div className="text-center py-8 border border-gray-300 rounded-lg">
                    <p>Please log in to view your orders</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-12 pb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-end mb-4 w-max">
                <p className="text-2xl font-medium uppercase">My Orders</p>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>

            {isLoading ? (
                <div className="text-center py-8">
                    <p>Loading your orders...</p>
                </div>
            ) : error ? (
                <div className="text-center py-8 border border-gray-300 rounded-lg">
                    <p className="text-red-500">{error}</p>
                </div>
            ) : myOrders.length === 0 ? (
                <div className="text-center py-8 border border-gray-300 rounded-lg">
                    <p>You don't have any orders yet</p>
                </div>
            ) : (
                myOrders.map((order,index) => (
                    <div key={index} className="border border-gray-300 rounded-lg mb-4 p-2 max-w-4xl">
                        <p className="flex justify-between md:items-center text-gray-400 text-sm md:font-medium max-md:flex-col mb-2">
                            <span>Order ID : {order._id}</span>
                            <span>Payment : {order.paymentType}</span>
                            <span>Total Amount : {currency}{order.amount}</span>
                        </p>
                        {order.items && order.items.length > 0 ? (
                            order.items.map((item, index) => (
                                <div key={index} className={
                                    `relative bg-white text-gray-500/70 ${order.items.length !== index +1 && "border-b"}
                                    border-gray-300 flex flex-col md:flex-row md:items-center justify-between py-2 px-2 md:gap-6 w-full max-w-4xl`
                                }>
                                    <div className="flex items-center mb-1 md:mb-0">
                                        <div className="bg-primary/10 p-1.5 rounded-lg">
                                            <img
                                                src={item.product?.image?.[0] || "/placeholder-image.png"}
                                                alt={item.product?.name || "Product"}
                                                className="w-10 h-10 object-cover"
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <h2 className="text-base font-medium text-gray-800">{item.product?.name || "Product"}</h2>
                                            <p className="text-sm">Category : {item.product?.category || "N/A"}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                                        <p>Quantity : {item.quantity || "1"}</p>
                                        <p>Status : {order.status || "Processing"}</p>
                                        <p>Date : {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}</p>
                                    </div>
                                    <p className="text-black text-sm font-medium">
                                        Amount : {currency}{(item.product?.offerPrice || 0) * (item.quantity || 1)}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="py-4 text-center text-gray-500">No items in this order</div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default MyOrders;