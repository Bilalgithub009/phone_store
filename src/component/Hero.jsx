export function Hero() {
    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center w-full">
                <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between md:justify-between px-0">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-10 mt-10 md:mt-0">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                            Latest <span className="text-blue-600">Smartphones</span> &
                            Premium <span className="text-blue-600">Laptops</span>
                        </h1>

                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                            Discover the best tech with powerful performance, sleek designs, and unbeatable prices.
                        </p>

                        {/* Buttons ALWAYS center on mobile */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <a
                                href="#products"
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Shop Now
                            </a>

                            <a
                                href="#latest"
                                className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-xl font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                            >
                                Explore Deals
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 px-0">
                        <img
                            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200"
                            alt="Mobile and Laptop"
                            className="w-full max-w-md md:max-w-full rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                </div>
            </section>

        </>
    );
}

export default Hero;
