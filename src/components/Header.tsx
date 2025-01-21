
"use client"

import { TbVectorBezier } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { TbCircleNumber2 } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  return (
    <div>
      <header className="border-b font-sans tracking-wide relative z-50 ">
        {/* Top Bar */}
        <section className="py-3 bg-[#272343] text-white px-5 lg:px-10">
          <div className="flex justify-between items-center">
            <p className="text-sm">Free shipping on all orders over $50</p>
            <div className="flex items-center gap-6 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <p>Eng</p>
                <IoChevronDown />
              </div>
              <Link href="/faqs">
                <p>Faqs</p>
              </Link>
              <div className="flex items-center gap-2">
                <CiCircleAlert className="w-4 h-4" />
                <p>Need Help</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logo and Cart Section */}
        <section className="bg-[#F0F2F3] py-4">
          <div className="container mx-auto flex justify-between items-center px-5 lg:px-10">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <TbVectorBezier className="w-10 h-10 text-[#272343]" />
              <p className="text-xl font-semibold text-[#272343]">Copforty</p>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-white w-28 h-12 rounded-lg shadow-sm justify-center"
            >
              <PiShoppingCartSimple />
              <p>Cart</p>
              <TbCircleNumber2 className="text-[#007580]" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center px-5 lg:px-10">
            <ul className="hidden lg:flex gap-8 text-sm font-semibold text-[#333] p-4">
              <li>
                <Link href="/" className="hover:text-[#007bff]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#007bff]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#007bff]">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/page" className="hover:text-[#007bff]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#007bff]">
                  About
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(true)} // Show menu on click
            >
              <svg
                className="w-6 h-6"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && ( // Conditional rendering of mobile menu
          <div className="fixed inset-0 bg-white z-40">
            <div className="flex justify-end p-5">
              <button
                className="text-2xl"
                onClick={() => setMenuOpen(false)} // Hide menu on click
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col items-center gap-4 text-lg font-semibold text-[#333]">
              <li>
                <Link href="/" className="hover:text-[#007bff]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#007bff]">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#007bff]">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/page" className="hover:text-[#007bff]">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#007bff]">
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
