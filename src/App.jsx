import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import {useAppContext} from "./context/AppContext.jsx";
import Login from "./components/Login.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import AddAddress from "./pages/AddAddress.jsx";

const App = () => {

    const isSellerPath = useLocation().pathname.includes("seller");
    const {showUserLogin} = useAppContext();

    return (
        <div>
            {isSellerPath ? null : <Navbar />}
            {showUserLogin ? <Login /> : null}

            <Toaster />
            <div className={`${isSellerPath ? "":  "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path='/products/:category' element={<ProductCategory />} />
                    <Route path='/products/:category/:id' element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/add-address" element={<AddAddress />} />

                </Routes>
            </div>
            {!isSellerPath && <Footer />}
        </div>
    )
}
export default App;