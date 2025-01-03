"use client"
import React from 'react'

const FeaturedProducts = () => {
  return (
    
      <div
        className="relative wrapper"
        style={{
          width: '100%',
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-[#111C85] ">Featured Products</h2>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          style={{ width: '90%', margin: '0 auto' }}
        >
          {/* Product 1 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/latest-3.png"
              alt="Product 1"
              className="w-full h-48 md:h-60 object-contain bg-gray-100 mb-3"
            />
            <h3 className="text-lg font-semibold mb-2 text-pink-500">Cantilever chair</h3>
            <p className="text-sm text-[#111C58]">Code - Y523201</p>
            <p className="text-sm text-[#111C58] mt-2">$42.00</p>
          </div>

          {/* Product 2 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/fp-2.png"
              alt="Product 2"
              className="w-full h-48 md:h-60 object-contain bg-gray-100 mb-3"
            />
            <div className='bg-blue-800'>
            <h3 className="text-lg font-semibold mb-2 text-white">Cantilever chair</h3>
            <p className="text-sm text-white">Code - Y523201</p>
            <p className="text-sm text-white mt-2">$42.00</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/fp-3.png"
              alt="Product 3"
              className="w-full h-48 md:h-60 object-contain bg-gray-100 mb-3"
            />
            <h3 className="text-lg font-semibold mb-2 text-pink-500">Cantilever chair</h3>
            <p className="text-sm text-[#111C58]">Code - Y523201</p>
            <p className="text-sm text-[#111C58] mt-2">$42.00</p>
          </div>

          {/* Product 4 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/fp-4.png"
              alt="Product 4"
              className="w-full h-48 bg-gray-100 md:h-60 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold mb-2 text-pink-500">Cantilever chair</h3>
            <p className="text-sm text-[#111C58]">Code - Y523201</p>
            <p className="text-sm text-[#111C58] mt-2">$42.00</p>
          </div>
        </div>
      </div>
  )
}

export default FeaturedProducts
