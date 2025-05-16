import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});

    //add to cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId]+=1;
        } else {
            cartData[itemId]=1;
        }
        setCartItems(cartData);
        toast.success("Added to cart!");
    }

    //update cart items
    const updateCartItems = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("cart updated!");
    }

    // remove products from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            delete cartData[itemId];
            setCartItems(cartData);
            toast.success("Removed from cart !");
        }
    }

    // update cart item count
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            totalCount += cartItems[items];
        }
        return totalCount;
    }

    // get cart total amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if(itemInfo && cartItems[items]>0){
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount*100)/100;
    }

    // fetch admin authentication status - only check if we're not already authenticated
    const fetchSellers = async () => {
        try {
            const {data} = await axios.get("/api/admin/is-auth");
            if(data && data.success) {
                setIsSeller(true);
            } else {
                setIsSeller(false);
            }
        } catch (error) {
            console.error("Authentication check failed:", error);
            setIsSeller(false);
        } finally {
            setIsSellerLoading(false);
        }
    }

    //fetch user Auth Status / user data and cart items

    const fetchUser = async () => {
        try{
            const {data} = await axios.get("/api/user/is-auth");
            if(data.success){
                setUser(data.user);
                setCartItems(data.user.cartItems)
            }
        } catch (error) {
            setUser(null);
            toast.error(error.message);
        }
    }


    // fetch all products
    const fetchProducts = async () => {
        try{
            const {data} = await axios.get("/api/product/list");
            if(data.success){
                setProducts(data.products);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
               toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchUser();
        fetchProducts();
        fetchSellers();
    }, []);

    // update cart

    useEffect(() =>{
        const updateCart = async () => {
            try{
                const {data} = await axios.post("/api/cart/update",{cartItems});
                if(!data.success){
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }

        }
        if(user){
            updateCart();
        }
    },[cartItems])

    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        isSellerLoading,
        setIsSellerLoading,
        showUserLogin,
        setShowUserLogin,
        products,
        axios,
        currency,
        addToCart,
        updateCartItems,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery,
        getCartAmount,
        getCartCount,
        fetchSellers,
        fetchProducts,
        setCartItems
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}

export const useAppContext = () => {
    return useContext(AppContext);
}