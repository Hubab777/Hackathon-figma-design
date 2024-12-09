"use client"

import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsHeadset } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Services() {
  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col text-center w-full wrapper">
        <h1 className="text-2xl sm:text-3xl font-bold font-sans title-font text-[#111C85]">
          What Shopex Offer!
        </h1>
      </div>

      {/* Services Boxes */}
      <div className="w-full flex justify-center items-center wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-[80%] mt-8">
          {/* Box1 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-md">
            <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
              <CiDeliveryTruck className="text-3xl text-slate-400" />
            </div>
            <h1 className="mt-4 text-lg font-bold text-[#111C85]">24/7 Support</h1>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Box2 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-md">
            <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
              <FaPhoneAlt className="text-3xl text-slate-400" />
            </div>
            <h1 className="mt-4 text-lg font-bold text-[#111C85]">Quick Response</h1>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Box3 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-md">
            <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
              <BsHeadset className="text-3xl text-slate-400" />
            </div>
            <h1 className="mt-4 text-lg font-bold text-[#111C85]">Customer Support</h1>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Box4 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-md">
            <div className="w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
              <FaCheckToSlot className="text-3xl text-slate-400" />
            </div>
            <h1 className="mt-4 text-lg font-bold text-[#111C85]">Verified Services</h1>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
