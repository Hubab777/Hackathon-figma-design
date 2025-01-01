"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Top Categories Section */}
      <section className="py-16 bg-white wrapper">
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-10">
          Top Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {/* Card 1 with Button */}
          <div className="w-56 h-56 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full shadow-lg hover:scale-105 transition transform flex flex-col items-center justify-center relative">
            <div className="relative w-24 h-24">
              <Image
                src="/images/categ1.png"
                alt="Mini LCW Chair 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Mini LCW Chair 1</h3>
              <p className="text-[#151875] font-medium">$56.00</p>
            </div>
            <div className="absolute bottom-4">
              <button className="bg-green-500 text-white text-sm font-medium px-6 py-2 rounded-lg hover:bg-green-600 transition">
                View Shop
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-56 h-56 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full shadow-lg hover:scale-105 transition transform flex flex-col items-center justify-center">
            <div className="relative w-24 h-24">
              <Image
                src="/images/categ2.png"
                alt="Mini LCW Chair 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Mini LCW Chair 2</h3>
              <p className="text-[#151875] font-medium">$65.00</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-56 h-56 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full shadow-lg hover:scale-105 transition transform flex flex-col items-center justify-center">
            <div className="relative w-24 h-24">
              <Image
                src="/images/categ3.png"
                alt="Mini LCW Chair 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Mini LCW Chair 3</h3>
              <p className="text-[#151875] font-medium">$75.00</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-56 h-56 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full shadow-lg hover:scale-105 transition transform flex flex-col items-center justify-center">
            <div className="relative w-24 h-24">
              <Image
                src="/images/categ4.png"
                alt="Mini LCW Chair 4"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Mini LCW Chair 4</h3>
              <p className="text-[#151875] font-medium">$85.00</p>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
        <br/>
        {/* Newsletter section */}
        <section className="py-16 bg-gray-50 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#151875] mb-4">
              Get Latest Update By Subscribe Our Newsletter
            </h2>
            <button className="bg-pink-500 text-white text-lg font-medium px-6 py-2 rounded-lg hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
          <div className="absolute inset-0 opacity-50">
            <Image
              src="/images/newsletter.png"
              alt="Newsletter Background"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <div className="flex justify-center items-center h-[200px] bg-gray-50 mt-10">
          <img
            src="/shop-list-bottom.png"
            alt="Centered Illustration"
            className="w-96 h-96 object-contain"
          />
        </div>
      </section>
    </div>
  );
}

