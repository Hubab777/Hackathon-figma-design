"use client"
import React from "react"
import Link from 'next/link';
import { LuSearch } from "react-icons/lu";

export const Header = () => {
    return (
        <div className='flex flex-col md:flex-row w-full   md:w-[1170px] mt-[30px] px-4 md:px-16 items-center max-w-screen-xl mx-auto  '>
            <h2 className='font-bold mr-16  font-[josefin sans] text-[#000000] text-center md:text-left  text-3xl md:text-[24px]  md:w-auto'>
                Hekto
            </h2>
            
            <ul className='flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-4 md:gap-[48px] text-[#000000]'>
                <Link href={"/"} className='font-poppins text-[16px] text-[#FB2E86] font-bold text-center md:text-left w-[48px] h-[24px] '>
                <select name='' id='' className='  text-center mr-10 '>
                <option value=""> Home</option>
            </select>
                </Link>
                <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[66px] h-[24px] '>Pages</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Product</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Blog</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Shop</Link>
                <Link href={"/"} className='font-poppins text-[16px] font-bold text-center md:text-left w-[61px] h-[24px] '>Contact</Link>
  
            </ul>
  
            <div className='flex gap-3 mt-4 md:mt-0'>
                <button className='flex items-center w-full ml-14 mr-11 md:w-[180px] h-[38px] rounded-[4px] pl-[20px] pt-[7px] pb-[7px] pr-[12px] 
  [7px] bg-white'>
                    <input 
                        type='text' 
                        className='font-poppins text-[13px] font-normal w-[130px] h-[18px] opacity-[50%] border-2 border-red-500 text-[#000000]' /> 
                    <LuSearch className='w-[20px] h-[16px]'/>
                </button>
                
               
            </div>
        </div>
    )
  }
  