import { useEffect, useState } from "react";

export default function Card() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const urls = [
                    "https://dummyjson.com/products/category/smartphones",
                    "https://dummyjson.com/products/category/laptops",
                    "https://dummyjson.com/products/category/mobile-accessories"
                ];

                const allData = await Promise.all(
                    urls.map(url => fetch(url).then(res => res.json()))
                );

                const combinedProducts = [
                    ...allData[0].products,
                    ...allData[1].products,
                    ...allData[2].products
                ];

                setProducts(combinedProducts);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        loadData();
    }, []);

    if (loading) {
        return (
            <p className="text-center text-lg font-semibold mt-14">
                Loading products...
            </p>
        );
    }

    return (
        <>
            {/* Section Heading */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-14 mb-8
               bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
               bg-clip-text text-transparent">
                Hot Selling Products
            </h1>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm overflow-hidden
                            hover:shadow-xl transition duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-full object-contain sm:object-cover
                                    group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-3 sm:p-4">
                                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                    Rs {item.price}
                                </h2>

                                <p className="text-sm sm:text-base text-gray-800 font-medium mt-1 line-clamp-2">
                                    {item.title}
                                </p>

                                <div className="mt-3 flex items-center justify-between text-sm font-semibold text-gray-600">
                                    <span className="truncate">{item.brand}</span>
                                    <span className="text-yellow-500">
                                        {"★".repeat(Math.floor(item.rating || 4))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}