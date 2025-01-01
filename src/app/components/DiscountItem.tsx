"use client"
import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
function Discountitem() {
  return (
    <div className="flex items-center justify-center wrapper">
      <section className="text-gray-600 body-font ">
        <h2 className="text-center text-3xl font-bold mt-4 mb-8 text-[#111C85] ">
          Discounted Items
        </h2>
        <div className="flex justify-center gap-5 mt-4 h-[22px] list-none ">
          <li className="text-pink-500 underline">Wood Chair</li>
          <li className="text-[#111C85]">Plastic Chair</li>
          <li className="text-[#111C85]">Sofa Collection</li>
        </div>
        
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center text-center min-h-screen place-items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-center text-[#111C85]">
              20% Discount Of All Products
              <br className="hidden lg:inline-block" />
              <p className="text-base mt-3 font-bold text-pink-600">
                Eams Sofa Compact
              </p>
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <p className="mt-5 mb-4 leading-relaxed flex items-center">
              <FaCheck className="text-[#7569B2] mr-2" />
              Material expose like metals
              <FaCheck className="text-[#7569B2] mr-2 ml-6" />
              Clear lines and geometric figures
            </p>

            <p className="mt-5 mb-4 leading-relaxed flex items-center">
              <FaCheck className="text-[#7569B2] mr-2" />
              Simple neutral colors
              <FaCheck className="text-[#7569B2] mr-2 ml-6" />
              Material expose like metals
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-[#FB2E91] rounded text-lg">
                Shop Now
              </button>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center items-center mr-[80px]  relative">
            <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full mr-10  shadow-xl mt-5 mx-auto">
              <Image
                src={"/discount-item.png"}
                alt="Furniture Chair"
                width={800}
                height={500}
                className="object-contain w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discountitem;
