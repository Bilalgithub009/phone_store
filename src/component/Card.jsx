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

                const allData = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));

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
        return <p className="text-center text-lg font-semibold mt-10">Loading products...</p>;
    }

    return (
        <>
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-10 mb-6 
               bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
               bg-clip-text text-transparent tracking-wide">
                Hot Selling Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 max-w-7xl mx-auto mb-10">

                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >

                        <div className="aspect-square w-full overflow-hidden bg-gray-200">
                            <img
                                className="w-full h-full object-cover object-center"
                                src={item.thumbnail}
                                alt={item.title}
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800">Rs {item.price}</h2>

                            <p className="text-black font-bold capitalize mt-2 line-clamp-2">{item.title}</p>

                            <div className="mt-4 flex justify-between items-center font-semibold">
                                <span>{item.brand}</span>
                                <span className="text-yellow-500">
                                    {"★".repeat(Math.floor(item.rating || 4))}
                                </span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </>
    );
}
