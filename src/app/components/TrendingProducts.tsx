
"use client"
import Image from "next/image";

export default function Trendingproducts() {
  return (
    <div className="py-10 wrapper">
      {/* Grid Layout for 4 Cards */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Trending Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/tren1.png" 
              alt="Image 1"
              fill
               className="bg-gray-100 object-contain "
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/tren2.png" 
              alt="Image 2"
              fill
               className="bg-gray-100 object-contain"
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/tren3.png" 
              alt="Image 3"
              fill
              className="bg-gray-100 object-contain"
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/tren4.png" 
              alt="Image 4"
              fill
              className="bg-gray-100 object-contain"
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}