"use client" ;

import React, { useState } from "react";
import { FaTh, FaList, FaSearchPlus, FaShoppingCart, FaHeart } from "react-icons/fa"; 


const Shop: React.FC = () => {
  const products = [
    { name: "Vel elit euismod", price: "$450", image: "/images/sh-grid-1.png" },
    { name: "Ultricies condimentum imperdict", price: "$500", image: "/images/sh-grid-2.png" },
    { name: "Vitae suspendisse sed", price: "$100", image: "/images/sh-grid-3.png" },
    { name: "Sed at fermentum", price: "$700", image: "/images/sh-grid-4.png" },
    { name: "Fusce pellentesque", price: "$450", image: "/images/sh-grid-5.png" },
    { name: "Vestibulum magna laoreet", price: "$500", image: "/images/sh-grid-6.png" },
    { name: "Sollicitudin amet orci", price: "$100", image: "/images/sh-grid-7.png" },
    { name: "Ultrices mauris sit", price: "$700", image: "/images/sh-grid-8.png" },
    { name: "Pellentesque condimentum ac", price: "$450", image: "/images/sh-grid-9.png" },
    { name: "Cras scelerisque velit", price: "$500", image: "/images/sh-grid-10.png" },
    { name: "Lectus vulputate faucibus", price: "$100", image: "/images/sh-grid-11.png" },
    { name: "Purus risus ut", price: "$700", image: "/images/sh-grid-4.png" },
  ]

  const [viewStyle, setViewStyle] = useState("grid");

  return (
    <>
    
    <div className="bg-gray-50 min-h-screen wrapper">
      {/* Jumbotron Header */}
      <header className="bg-purple-100 py-6 sm:py-8 md:py-12 bg-cover bg-center relative">
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Shop Grid Default
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Home . Pages  <span className="text-pink-500">. Shop Grid Default</span>
          </p>
        </div>
      </header>

      {/* Main Section (Below Jumbotron) */}
      <main className="container mx-auto px-6 py-16">
        {/* Original Header Content Moved Below Jumbotron */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6">
          <div>
            <h1 className="text-1xl sm:text-3xl md:text-2xl font-bold text-blue-900 mb-4">
              Ecommerce Accessories and Fashion Items
            </h1>
            <p className="text-sm sm:text-base text-gray-500">About 9630 Results</p>
          </div>

          {/* Right Side Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            {/* Per Page Input */}
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-600">Per page:</label>
              <input
                type="number"
                min="1"
                className="p-2 border rounded-md text-sm w-full sm:w-32"
                defaultValue="12"
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select className="p-2 border rounded-md text-sm w-full sm:w-32">
                <option value="relevance">Best Match</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* View and Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setViewStyle("grid")}
                className={`p-2 rounded-md ${viewStyle === "grid" ? "bg-gray-200" : "bg-transparent"}`}
              >
                <FaTh className="text-gray-600" />
              </button>
              <button
                onClick={() => setViewStyle("list")}
                className={`p-2 rounded-md ${viewStyle === "list" ? "bg-gray-200" : "bg-transparent"}`}
              >
                <FaList className="text-gray-600" />
              </button>

              {/* Small Input Field */}
              <input
                type="text"
                className="p-2 border rounded-md text-sm w-full sm:w-32"
              />
            </div>
          </div>
        </div>

        {/* Product Grid or List */}
        <div
          className={`grid ${
            viewStyle === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          } gap-8 p-4`}
        >
          {products.map((product, index) => (
            <div 
            
              key={index}
              className="bg-gray-100 w-full h-80 border rounded-xl flex flex-col shadow-md p-4 text-center relative group overflow-hidden transition-all duration-300 hover:bg-purple-100"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className=" object-contain mx-auto my-auto mb-3 group-hover:scale-110 transition-all duration-300"
              />

              {/* Product Name (Left Bottom) */}
<h3 className="bottom-3 left-4 text-lg font-bold text-[#111C85] group-hover:text-purple ml-6 transition-all duration-300 ">
  {product.name}
</h3>
<div className="flex space-x-2 mt-1 mb-1 justify-center place-items-center">
   <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
   <span className="w-4 h-4 rounded-full bg-red-500"></span>
   <span className="w-4 h-4 rounded-full bg-blue-500"></span>
 </div>
{/* Price and Sale Percentage (Right Bottom) */}
<div className=" text-sm text-gray-600 group-hover:text-purple transition-all duration-300 sm:mt-0 mt-12">
  <span>{product.price}</span> <span className="text-red-500">-15%</span>
</div>

              {/* Icons in Bottom Left on Hover */}
              <div className="absolute bottom-4 left-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                  <FaSearchPlus />
                </button>
                <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                  <FaShoppingCart />
                </button>
                <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:text-pink-500">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center h-[200px] bg-gray-50 mt-10">
   <img
     src="/shop-list-bottom.png"
     alt="Centered Illustration"
     className="w-96 h-96 object-contain"
   />
 </div>
 
      </main>
    </div>
    
    </>
  );
};

export default Shop;