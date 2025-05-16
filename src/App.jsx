import React, { useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import { useAppContext } from "./context/AppContext.jsx";
import Login from "./components/Login.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import SellerLogin from "./components/admin/SellerLogin.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import AddProduct from "./pages/admin/AddProduct.jsx";
import ProductList from "./pages/admin/ProductList.jsx";
import Orders from "./pages/admin/Orders.jsx";
import Contact from "./pages/Contact.jsx";
import Loading from "./components/Loading.jsx";
import OverlayAd from "./components/OverlayAd.jsx";
import {assets} from "./assets/assets.js";
// Import the CSS file (you need to create this file in your src directory)
import './components/animations.css'
const App = () => {
    const isSellerPath = useLocation().pathname.includes("admin");
    const { showUserLogin, isSeller, isSellerLoading, fetchSellers } = useAppContext();

    useEffect(() => {
        // Check authentication status only once when app loads
        if (isSellerLoading) {
            fetchSellers();
        }

        // Simple scroll animation without custom components
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.scroll-animate');

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('animate-visible');
                }
            });
        };

        // Initial check
        setTimeout(animateOnScroll, 100);

        // Add scroll listener
        window.addEventListener('scroll', animateOnScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', animateOnScroll);
        };
    }, [isSellerLoading, fetchSellers]);

    // Protected route component for admin routes
    const ProtectedAdminRoute = ({ children }) => {
        // If still checking authentication status, show a loading spinner
        if (isSellerLoading) {
            return <div className="flex items-center justify-center h-screen">Loading...</div>;
        }

        // If not authenticated, redirect to login
        if (!isSeller) {
            return <Navigate to="/admin/login" />;
        }

        // If authenticated, render the children
        return children;
    };

    return (
        <div className="text-default min-h-screen text-gray-700 bg-white">
            {isSellerPath ? null : <Navbar />}
            {showUserLogin ? <Login /> : null}

            {/* Add the OverlayAd component with custom props */}
            {!isSellerPath && (
                <OverlayAd
                    imageUrl={assets.ad_image}
                    link="/products/special-offer"
                    position="bottom-right"
                    width={320}
                    scrollThreshold={300}
                    showOnce={false}
                    delay={500}
                />
            )}

            <Toaster />
            <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/products/:category' element={<ProductCategory />} />
                    <Route path='/products/:category/:id' element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/add-address" element={<AddAddress />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/loader" element={<Loading />} />

                    {/* Admin routes */}
                    <Route path="/admin/login" element={<SellerLogin />} />
                    <Route path="/admin" element={
                        <ProtectedAdminRoute>
                            <AdminLayout />
                        </ProtectedAdminRoute>
                    }>
                        <Route index element={<AddProduct />} />
                        <Route path="product-list" element={<ProductList />} />
                        <Route path="orders" element={<Orders />} />
                    </Route>
                </Routes>
            </div>
            {!isSellerPath && <Footer />}
        </div>
    );
};

export default App;