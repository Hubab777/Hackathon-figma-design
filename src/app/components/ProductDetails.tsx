"use client";
import Image from "next/image";

export default function ProductDetailsPage() {
  const relatedProducts = [
    {
      id: 1,
      title: "Mens Fashion Wear",
      price: "$43.00",
      rating: 4,
      image: "/images/rp-1.png",
    },
    {
      id: 2,
      title: "Women's Fashion",
      price: "$67.00",
      rating: 5,
      image: "/images/rp-2.png",
    },
    {
      id: 3,
      title: "Walk Dummy Fashion",
      price: "$67.00",
      rating: 4,
      image: "/images/rp-3.png",
    },
    {
      id: 4,
      title: "Top Wall Digital Clock",
      price: "$51.00",
      rating: 3,
      image: "/images/rp-4.png",
    },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-50 wrapper">
      {/* Header */}
      <header className="bg-purple-100 text-center pl-0 py-8">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-left pl-20 text-[#111C85]">
            Product Details
          </h1>
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 text-left pl-20 mt-2">
            <span className="text-[#727272]">Home .</span>

            <span className="text-[#727272]">Pages</span>

            <span className="text-pink-500 font-semibold">
              {" "}
              .Product Details
            </span>
          </p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto my-16 py-4">
        {/* Product Details Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex mb-12">
          {/* Left Images Section */}
          <div className="md:w-1/5 p-4">
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-col">
              <Image
                src="/images/pd-2.png"
                alt="Image 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <Image
                src="/images/pd-3.png"
                alt="Image 2"
                width={200}
                height={200}
                className="rounded-md"
              />
              <Image
                src="/images/pd-4.png"
                alt="Image 3"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="md:w-2/5 p-4  flex justify-center items-center">
            <Image
              src="/images/pd-1.png"
              alt="Main Product"
              width={700}
              height={700}
              className="rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-2/5 p-6 py-20">
            <h2 className="text-3xl font-bold mb-2 text-[#111C85]">
              Playwood Arm Chair
            </h2>
            <div className="text-yellow-500 flex items-center mb-2">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="ml-2 text-[#111C85] text-sm">(22)</span>
            </div>
            <div className="text-xl text-gray-700 mb-4">
              <span className="line-through text-[#111C85]">$32.00</span>
              <span className="ml-2 text-pink-500">$12.00</span>
            </div>
            <p className="text-[#111C85] text-sm">
              <strong>Color:</strong>
            </p>
            <p className="text-gray-600 mb-4 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <button className="bg-stone-50 text-[#111C85] px-4 py-2  text-center rounded hover:bg-purple-50">
              Add to Cart <span>❤️</span>
            </button>

            <div className="mt-6">
              <p className="text-[#111C85] text-sm">
                <strong>Categories:</strong> Furniture
              </p>
              <p className="text-[#111C85] text-sm mt-2">
                <strong>Tags:</strong> Chair, Home Decor
              </p>
              <p className="text-[#111C85] text-sm mt-2">
                <strong>Share:</strong>
                <span className="inline-block ml-2 text-blue-500">
                  🔗 🖤 📸
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-purple-50 p-6 shadow-md rounded-lg mb-12">
          <div className="flex border-b mb-6 gap-10">
            <button className="px-4 py-2  text-[#111C85] border-b-2 border-pink-500 font-medium">
              Description
            </button>
            <button className="px-4 py-2  text-[#111C85] hover:text-pink-500">
              Additional Info
            </button>
            <button className="px-4 py-2  text-[#111C85] hover:text-pink-500">
              Reviews
            </button>
            <button className="px-4 py-2  text-[#111C85] hover:text-pink-500">
              Video
            </button>
          </div>

          <div className="text-gray-600">
            <h3 className="text-lg font-medium mb-4 text-[#111C85]">
              Various tempor.
            </h3>
            <p className="mb-4">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed at eleifend habitasse amet.
            </p>
            <h4 className="text-md font-medium mb-2  text-[#111C85] ">
              More Details:
            </h4>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Faucibus dolor ornare faucibus vel sed at eleifend.</li>
              <li>Nulla lobortis justo arcu.</li>
              <li>Eu in fringilla vulputate nunc nec.</li>
            </ul>
          </div>
        </div>

        {/* Related Products Section */}
        <h2 className="text-xl md:text-2xl font-bold text-[#111C85] mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#111C85]">
                  {product.title}
                </h3>
                <p className="text-blue-600 font-semibold">{product.price}</p>
                <div className="text-yellow-500 flex items-center mt-2">
                  {"⭐".repeat(product.rating)}
                  {product.rating < 5 && (
                    <span className="text-gray-400">
                      {"⭐".repeat(5 - product.rating)}
                    </span>
                  )}
                </div>
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
      </div>
    </div>
  );
}
