"use client";
import React, { useState } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "/images/sh-cart-1.png",
      price: 32.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      image: "/images/sh-cart-2.png",
      price: 45.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      image: "/images/sh-cart-3.png",
      price: 25.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Product 4",
      image: "/images/sh-cart-4.png",
      price: 65.0,
      quantity: 1,
    },
    {
      id: 5,
      name: "Product 5",
      image: "/images/sh-cart-5.png",
      price: 55.0,
      quantity: 1,
    },
  ]);

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Update the quantity of a specific item
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    }
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-8 flex flex-col justify-center items-center wrapper">
        
        <header className="bg-purple-100 text-center w-full py-8">
          <div className="container mx-auto px-4">
            {/* Title */}
            <h1 className="text-3xl font-bold text-left pl-20 text-[#111C85]">Shopping Cart</h1>
            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 text-left pl-20 mt-2">
              <span className="text-[#727272]">Home .</span>
              <span className="text-[#727272]">Pages</span>
              <span className="text-pink-500 font-semibold"> .Shopping cart</span>
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-8 gap-8 mt-4 mx-auto">
          {/* Cart Table */}
          <div className="lg:col-span-2 lg:w-2/3">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-indigo-100 text-[#111C85]">
                  <th className="p-4 border border-gray-200">Product</th>
                  <th className="p-4 border border-gray-200">Price</th>
                  <th className="p-4 border border-gray-200">Quantity</th>
                  <th className="p-4 border border-gray-200">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-gray-50">
                    <td className="p-4 border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover border rounded"
                        />
                        <div>
                          <p className="font-semibold text-blue-900">{item.name}</p>
                          <p className="text-sm text-gray-500">Color: Brown</p>
                          <p className="text-sm text-gray-500">Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 border border-gray-200">${item.price.toFixed(2)}</td>
                    <td className="p-4 border border-gray-200">
                      <div className="flex items-center justify-center space-x-2">
                        {/* <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button> */}
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-16 p-2 border rounded text-center"
                          min="0"
                        />
                        {/* <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button> */}
                      </div>
                    </td>
                    <td className="p-4 border border-gray-200">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button 
                className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
                onClick={() => alert("Cart updated")}
              >
                Update Cart
              </button>
              <button 
                className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3 space-y-8">
            <div className="p-6 bg-white rounded shadow">
              <h2 className="text-lg font-bold text-[#111C85]">Cart Totals</h2>
              <div className="flex justify-between text-[#111C85] mt-4">
                <p>Subtotal:</p>
                <p>${calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-[#111C85] mt-2">
                <p>Total:</p>
                <p>${calculateTotal().toFixed(2)}</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-green-500 text-white px-6 py-2 mt-4 rounded hover:bg-green-600">
                Proceed To Checkout
              </button>
            </div>

            {/* Shipping Calculation */}
            <div className="p-6 bg-white rounded shadow">
              <h2 className="text-lg font-bold text-[#111C85]">
                Calculate Shipping
              </h2>
              <div className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full p-2 border rounded"
                />
              </div>
              <button className="w-full bg-pink-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-900">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
