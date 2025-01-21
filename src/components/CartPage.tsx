'use clien'
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

export default function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart: Product[] = location.state?.cart || [];

  return (
    <div className="p-4 mx-auto max-w-[1200px]">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-100 rounded p-3 mb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain mr-4"
                />
                <span className="font-semibold">{item.title}</span>
              </div>
              <span className="text-gray-600">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => navigate("/")}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Back to Products
      </button>
    </div>
  );
}
