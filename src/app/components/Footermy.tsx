"use client"
import React from "react";
import {FaGithub} from 'react-icons/fa'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'
import Link from "next/link";

export default function FooterMy() {
    return (
      <footer className="bg-[#EEEFFB] border-t border-gray-200 py-8 h-[479px] wrapper">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16">
          {/* Left Section */}
          <div>
            <h2 className=" font-semibold text-gray-800 font-[josefin-sans] text-4xl leading-[44.53px] text-left decoration-none">
                Hekto</h2>
            <form className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="px-8 py-0 bg-pink-500 flex text-sm text-white rounded-md hover:bg-pink-600"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Contact Info:
              <br />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
  
          {/* Categories Section */}
          <div>
            <h3 className=" font-semibold text-gray-800 font-[josefin-sans] text-[22px]">Categories</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
  
          {/* Customer Care Section */}
          <div>
            <h3 className="font-[josefin-sans] text-[22px] font-semibold text-gray-800">Customer Care</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
  
          {/* Pages Section */}
          <div>
            <h3 className="font-[josefin-sans] text-[22px] font-semibold text-gray-800">Pages</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom Section */}

        <div className="bg-[#E7E4F8] h-[53px]" >
    <div className="container px-2 py-6 sm:mx-[377px] flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 w-[220px]">
        ©Webecy — All Rights Reserved
      </p>
      <span className="inline-flex sm:ml-96 sm:mt-0 mt-4 justify-center sm:justify-between">
      <Link 
      target='blank' href={"https://github.com/Hubab777"} className="text-gray-900">
      <FaGithub className='text-3xl ' />
      </Link>

      <Link
      target='blank' href={"https://vercel.com"} className="ml-3 text-gray-900">
      <IoLogoVercel className='text-3xl' />
      </Link>
      
      <Link
      target='blank' href={"https://www.linkedin.com/in/hubab-ikram-02b8741b4/"} className="ml-3 text-gray-900">
        <FaLinkedin className='text-3xl ' />
      </Link>
    </span>
    </div>
    </div>
      </footer>
    );
  }