import React, { useEffect } from 'react';
import { useAppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate, axios, isSellerLoading } = useAppContext();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const onsubmitHandler = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);

            const { data } = await axios.post('/api/admin/login', { email, password });

            if (data.success) {
                setIsSeller(true);
                toast.success("Login successful!");
                navigate('/admin');
            } else {
                toast.error(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(error.response?.data?.message || error.message || "Login failed");
        } finally {
            setIsLoading(false);
        }
    }

    // Redirect if already logged in
    useEffect(() => {
        if (isSeller && !isSellerLoading) {
            navigate("/admin");
        }
    }, [isSeller, isSellerLoading, navigate]);

    // Don't render login form if still checking auth status or already logged in
    if (isSellerLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600">Loading...</p>
        </div>;
    }

    if (isSeller) {
        return null;
    }

    return (
        <form onSubmit={onsubmitHandler} className="min-h-screen flex items-center text-sm text-gray-600">
            <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">
                        Admin {" "}
                    </span>
                    Login
                </p>

                <div className="w-full">
                    <p>E-mail</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Your E-mail"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="w-full">
                    <p>Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        required
                        disabled={isLoading}
                    />
                </div>

                <button
                    className={`bg-primary text-white w-full py-2 rounded-md ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </div>
        </form>
    );
};

export default SellerLogin;