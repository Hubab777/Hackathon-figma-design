"use client"
"use client";
import React from "react";

const products = [
  {
    id: 1,
    name: "Comfort Handy Craft",
    price: "$42.00",
    oldPrice: "$65.00",
    img: "/latest-1.png",
  },
  {
    id: 2,
    name: "Stylish Cantilever Chair",
    price: "$58.00",
    oldPrice: "$75.00",
    img: "/latest-2.png",
  },
  {
    id: 3,
    name: "Elegant Wood Frame Chair",
    price: "$62.00",
    oldPrice: "$90.00",
    img: "/latest-3.png",
  },
  {
    id: 4,
    name: "Classic Dining Chair",
    price: "$50.00",
    oldPrice: "$80.00",
    img: "/latest-4.png",
  },
  {
    id: 5,
    name: "Premium Lounge Chair",
    price: "$75.00",
    oldPrice: "$120.00",
    img: "/latest-5.png",
  },
  {
    id: 6,
    name: "Modern Office Chair",
    price: "$55.00",
    oldPrice: "$85.00",
    img: "/latest-6.png",
  },
];

function LatestProduct() {
  return (
    <section className="text-gray-600 body-font py-12 px-4 sm:px-6 lg:px-8 wrapper">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111C85]">
            Latest Products
          </h1>
          <ul className="flex justify-center gap-4 mt-4 h-auto list-none">
            <li className="text-pink-500 underline cursor-pointer">New Arrival</li>
            <li className="text-[#111C85] cursor-pointer">Best Seller</li>
            <li className="text-[#111C85] cursor-pointer">Featured</li>
            <li className="text-[#111C85] cursor-pointer">Special Offers</li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg w-full h-64 object-cover bg-gray-100 mb-4"
                />
                <h2 className="text-[#151875] font-medium text-base sm:text-lg mb-2">
                  {product.name}
                </h2>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>{product.price}</span>
                  <span className="line-through text-[#FB2E86]">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestProduct;
