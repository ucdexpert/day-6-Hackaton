
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import React from "react";

export default function Cart() {
  return (
    <div className="font-sans mx-auto bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Section */}
        <div className="md:col-span-2 bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-6" />

          <div className="space-y-6">
            {/* Cart Item */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
              <div className="flex items-center gap-4 col-span-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white p-2 rounded-md">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctB0BUXmojUyrVXuyewgIEuSTshHWdRQTUff0gfyhSA5vqaw"
                    className="w-full h-full object-contain"
                    alt="Product Image"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Library Stool Chair
                  </h3>
                  <p className="text-xs text-red-500 mt-1">Ashen Slate / Size L</p>
                  <div className="flex gap-3 mt-4 text-gray-600">
                    <RiDeleteBin6Line className="cursor-pointer" />
                    <CiHeart className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h4 className="text-base font-bold text-gray-800">MRP: $99</h4>
              </div>
            </div>

            {/* Another Cart Item */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
              <div className="flex items-center gap-4 col-span-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white p-2 rounded-md">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwT9oKXUEa00bTvSBpA2--R7nI0heAl5yTRTa2qX9L34Oea0WR"
                    className="w-full h-full object-contain"
                    alt="Product Image"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    Library Stool Chair
                  </h3>
                  <p className="text-xs text-red-500 mt-1">Ashen Slate / Size L</p>
                  <div className="flex gap-3 mt-4 text-gray-600">
                    <RiDeleteBin6Line className="cursor-pointer" />
                    <CiHeart className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <h4 className="text-base font-bold text-gray-800">MRP: $99</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-100 rounded-md p-6">
          <h2 className="text-xl font-bold text-gray-800">Summary</h2>
          <ul className="text-gray-800 mt-6 space-y-4">
            <li className="flex justify-between text-base">
              Subtotal <span className="font-bold">$198.00</span>
            </li>
            <li className="flex justify-between text-base">
              Estimated Delivery <span className="font-bold">Free</span>
            </li>
            <li className="flex justify-between text-lg font-bold">
              Total <span>$198.00</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 w-full py-2.5 bg-[#029FAE] text-white text-sm font-semibold rounded-full hover:bg-[#027d85] transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
