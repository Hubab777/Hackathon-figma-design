// "use client"
// import React from "react";

// const ShopList = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <header className="bg-purple-50 py-6">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-bold text-purple-800">Shop List</h1>
//           <p className="text-sm text-gray-500 mt-2">
//             Home &gt; Pages &gt; Shop List
//           </p>
//         </div>
//       </header>

//       {/* Content */}
//       <main className="container mx-auto px-4 py-10">
//         {/* Section Title */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-lg font-semibold">
//             Ecommerce Accessories & Fashion Item
//           </h2>
//           <div className="flex gap-4 items-center">
//             <label className="text-sm text-gray-600">Per Page:</label>
//             <input
//               type="number"
//               className="w-16 border rounded-md px-2 py-1 text-sm"
//             />
//             <label className="text-sm text-gray-600">Sort By:</label>
//             <select className="border rounded-md px-2 py-1 text-sm">
//               <option>Best Match</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//             </select>
//             <label className="text-sm text-gray-600">View:</label>
//             <div className="flex gap-2">
//               <button className="w-8 h-8 border rounded-md flex items-center justify-center">
//                 🗂️
//               </button>
//               <button className="w-8 h-8 border rounded-md flex items-center justify-center">
//                 📄
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Product List */}
//         <div className="grid gap-6">
//           {[1, 2, 3].map((item) => (
//             <div
//               key={item}
//               className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 src={`/product-${item}.jpg`}
//                 alt="Product Image"
//                 className="w-full md:w-48 h-48 object-cover"
//               />
//               <div className="p-4 flex-1">
//                 <h3 className="text-lg font-bold">Accumsan tincidunt</h3>
//                 <div className="flex items-center text-yellow-500 mb-2">
//                   <span className="text-sm font-bold">$26.00</span>
//                   <span className="text-sm line-through text-gray-400 ml-2">
//                     $52.00
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-500">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Magna in est adipiscing in pharetra.
//                 </p>
//                 <div className="flex mt-4 space-x-4">
//                   <button className="text-gray-500 hover:text-purple-600">
//                     🛒
//                   </button>
//                   <button className="text-gray-500 hover:text-purple-600">
//                     🔍
//                   </button>
//                   <button className="text-gray-500 hover:text-purple-600">
//                     ❤️
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ShopList;
