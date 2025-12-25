import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                {/* Logo */}
                <div className="loader">
                    <span className="font-bold">We Sell</span>
                    <div className="words">
                        <span className="word">Mobiles</span>
                        <span className="word">Laptops</span>
                        <span className="word">Accessories</span>
                        <span className="word">Tablets</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">Mobiles</li>
                    <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>

                {/* Desktop Button */}
                <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                    Shop Now
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none z-50"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-7 h-7 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-7 h-7 text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu (Fixed) */}
            <div
                className={`${open ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300 md:hidden bg-white shadow-md`}
            >
                <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">Mobiles</li>
                    <li className="hover:text-blue-600 cursor-pointer">Laptops</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>

                <div className="p-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700">
                        Shop Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
