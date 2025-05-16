import React, { useEffect, useState } from 'react';
import { useAppContext } from "../../context/AppContext.jsx";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
    const { currency } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const { data } = await axios.get('/api/order/admin');
            if (data.success) {
                setOrders(data.orders);
            } else {
                setError(data.message || "Failed to fetch orders");
                toast.error(data.message || "Failed to fetch orders");
            }
        } catch (error) {
            console.log(error);
            setError(error.message || "Something went wrong");
            toast.error(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
            <div className="md:p-10 p-4 space-y-4">
                <h2 className="text-lg font-medium">Orders List</h2>

                {isLoading ? (
                    <div className="text-center py-8">
                        <p>Loading orders...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-8 border border-gray-300 rounded-lg">
                        <p className="text-red-500">{error}</p>
                        <button
                            onClick={fetchOrders}
                            className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
                        >
                            Try Again
                        </button>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="text-center py-8 border border-gray-300 rounded-lg">
                        <p>No orders found</p>
                    </div>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300">
                            <div className="flex gap-5 max-w-80">
                                <img className="w-12 h-12 object-cover" src={assets.box_icon || "/box-icon.png"} alt="Order Box" />
                                <div>
                                    {order.items && order.items.length > 0 ? (
                                        order.items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <p className="font-medium">
                                                    {item.product?.name || "Product"}{" "}
                                                    <span className="text-primary">x {item.quantity || 1}</span>
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="font-medium">No items in this order</p>
                                    )}
                                </div>
                            </div>

                            {order.address ? (
                                <div className="text-sm md:text-base text-black/60">
                                    <p className='text-black/80'>
                                        {order.address.firstName || ""} {order.address.lastName || ""}
                                    </p>
                                    <p>
                                        {order.address.street || ""}, {order.address.city || ""}
                                    </p>
                                    <p>
                                        {order.address.state || ""}, {order.address.zipcode || ""}, {order.address.country || ""}
                                    </p>
                                    <p>{order.address.phone || ""}</p>
                                </div>
                            ) : (
                                <div className="text-sm md:text-base text-black/60">
                                    <p>No address information</p>
                                </div>
                            )}

                            <p className="font-medium text-lg my-auto text-black/70">
                                {currency}{order.amount || 0}
                            </p>

                            <div className="flex flex-col text-sm md:text-base text-black/60">
                                <p>Method: {order.paymentType || "N/A"}</p>
                                <p>Date: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}</p>
                                <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                                <p>Status: {order.status || "Processing"}</p>

                                {/* Add status update functionality if needed */}
                                {/* <select
                                    className="mt-2 border border-gray-300 rounded p-1"
                                    value={order.status || "Processing"}
                                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;