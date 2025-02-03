"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

function Navbar1() {
  const [open, setOpen] = useState(false); // State for mobile menu toggle
  const [pagesOpen, setPagesOpen] = useState(false); // State for "Pages" dropdown
  const [shopOpen, setShopOpen] = useState(false); // State for "Shop" dropdown
  
  const toggle = () => setOpen(!open);
  const togglePages = () => setPagesOpen(!pagesOpen);
  const toggleShop = () => setShopOpen(!shopOpen); // Toggle function for Shop dropdown
  
  return (
    <main className="2xl:w-[1920px] w-[100%] border-b-2 bg-neutral-100 wrapper">
      <div className="flex items-center justify-center bg-white h-[70px]">
        {/* Main content container */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <Image src="/hekto.png" width={98} height={34} alt="logo" />

          {/* nav links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-indigo-100 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black">
              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/">Home</Link>
              </li>

              {/* Pages Dropdown */}
              <li className="relative group">
                <button
                  onClick={togglePages}
                  className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4 focus:outline-none flex items-center"
                >
                  Pages
                  <span className="ml-1">▼</span>
                </button>

                {/* Dropdown menu */}
                <div
                  className={`${
                    pagesOpen ? "block" : "hidden"
                  } absolute left-0 top-12 bg-white shadow-md rounded-md w-[200px] text-left z-50`}
                >
                  <ul className="text-sm">
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/account">Account Page</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/error-page">Error page</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
               <Link href="/products">Products</Link>
               </li>


              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/blog">Blog</Link>
              </li>

              {/* Shop Dropdown */}
              <li className="relative group">
                <button
                  onClick={toggleShop}
                  className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4 focus:outline-none flex items-center"
                >
                  Shop
                  <span className="ml-1">▼</span>
                </button>

                {/* Shop Dropdown Menu */}
                <div
                  className={`${
                    shopOpen ? "block" : "hidden"
                  } absolute left-0 top-12 bg-white shadow-md rounded-md w-[200px] text-left z-50`}
                >
                  <ul className="text-sm">
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop-list">ShopList</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop-grid">ShopGrid</Link>
                    </li>
                    <li className="p-2 hover:bg-gray-200">
                      <Link href="/shop-cart">Shopping Cart</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="p-4 text-[#0D0E43] hover:underline hover:text-[#FB2E86] underline-offset-4">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Search and toggle button */}
          <div className="flex gap-x-4 items-center">
            {/* Search bar for lg screens */}
            <div className="hidden lg:flex w-[317px] bg-gray-200 rounded-md items-center">
              <input
                className="w-[270px] h-8 p-1 bg-white border-2 border-[#E7E6EF] outline-none"
                type="search"
                placeholder="Search"
              />
              <CiSearch className="text-xl w-[48px] h-[30px] bg-[#FB2E86] text-[#F3F9FF]" />
            </div>

            <button
              className="text-black text-3xl md:hidden ml-32 sm:block z-50"
              onClick={toggle}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navbar1;
