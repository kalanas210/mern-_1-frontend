import React, {useEffect, useState} from 'react';
import {useAppContext} from "../context/AppContext.jsx";
import toast from "react-hot-toast";
import {assets} from "../assets/assets.js";

const InputField = ({type, placeholder, name, handleChange, address, className}) => (
    <div className={className}>
        <input
            className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none focus:border-primary text-gray-500'
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            value={address[name]}
            required
        />
    </div>
);
const AddAddress = () => {

    const { axios,navigate,user } = useAppContext();

    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phoneNumber: "",
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/address/add',{address});

            if(data.success){
                toast.success(data.message);

                // Add your address submission logic here
                navigate('/cart');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
                toast.error(error.message)
        }
    };

    useEffect(() => {
        if(!user){
            navigate('/cart');
        }
    },[])

    return (
        <div className="mt-16 pb-16">
            <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className="flex-1 max-w-md">
                    <form onSubmit={onSubmitHandler} className='space-y-4 mt-6'>
                        <div className="flex gap-4">
                            <InputField handleChange={handleChange} address={address} name='firstName' type='text' placeholder='First Name' className="w-1/2" />
                            <InputField handleChange={handleChange} address={address} name='lastName' type='text' placeholder='Last Name' className="w-1/2" />
                        </div>

                        <InputField handleChange={handleChange} address={address} name='email' type='email' placeholder='Email Address' />

                        <div className="flex gap-4">
                            <InputField handleChange={handleChange} address={address} name='street' type='text' placeholder='Street Address' className="w-2/3" />
                            <InputField handleChange={handleChange} address={address} name='city' type='text' placeholder='City' className="w-1/3" />
                        </div>

                        <InputField handleChange={handleChange} address={address} name='state' type='text' placeholder='State' />

                        <div className="flex gap-4">
                            <InputField handleChange={handleChange} address={address} name='zipcode' type='text' placeholder='ZIP Code' className="w-1/2" />
                            <InputField handleChange={handleChange} address={address} name='country' type='text' placeholder='Country' className="w-1/2" />
                        </div>

                        <InputField handleChange={handleChange} address={address} name='phoneNumber' type='tel' placeholder='Phone Number' />

                        <div className="flex gap-4 mt-6">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="px-6 py-2 border border-gray-300 rounded text-gray-500 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90"
                            >
                                Save Address
                            </button>
                        </div>
                    </form>
                </div>
                <img className="w-1/3 h-1/2 md:mr-16 mb-16 md:mb-0" src={assets.add_address_image} alt='add address' />
            </div>
        </div>
    );
};

export default AddAddress;