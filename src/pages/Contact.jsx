import React from 'react';

const Contact = () => {
    return (
        <div className='mt-16'>
            <form className="flex flex-col items-center text-sm">
                <p className="text-lg text-primary font-medium pb-2">Contact Us</p>
                <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
                <p className="text-sm text-gray-500 text-center pb-10">Reach out to our dedicated team for any inquiries, assistance, or information you need.</p>

                <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                    <div className="w-full">
                        <label className="text-black/70" htmlFor="name">Your Name</label>
                        <input
                            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary/70"
                            type="text" required/>
                    </div>
                    <div className="w-full">
                        <label className="text-black/70" htmlFor="name">Your Email</label>
                        <input
                            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary/70"
                            type="email" required/>
                    </div>
                </div>

                <div className="mt-6 w-[350px] md:w-[700px]">
                    <label className="text-black/70" htmlFor="name">Message</label>
                    <textarea
                        className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-primary/70"
                        required></textarea>
                </div>

                <button type="submit"
                        className="mt-5 bg-primary text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send
                    Message
                </button>
            </form>
        </div>
    );
};

export default Contact;