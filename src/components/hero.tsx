
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-4/5 font-sans">
        <div className="grid lg:grid-cols-2 items-center gap-y-6 bg-[#F0F2F3] py-8 px-4 sm:px-8 lg:px-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-[#272343] text-base font-medium">
              Welcome to Chairy
            </p>
            <h2 className="text-[#272343] lg:text-5xl text-3xl font-bold leading-snug mt-4">
              Best Furniture Collection for your interior.
            </h2>
            <button
              type="button"
              className="bg-[#029FAE] mt-8 px-8 py-3 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              Shop Now <FaArrowRightLong className="text-lg" />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center lg:h-[480px]">
            <img
              src="https://img.freepik.com/free-photo/beautiful-shot-modern-black-grey-chair-isolated-white_181624-22598.jpg?t=st=1733639842~exp=1733643442~hmac=7d9c0b548d39aa30e8a9c9f7c75653a45341d87032e034b29529522ef97e45a3&w=360"
              className="max-w-full lg:w-[434px] h-auto object-contain rounded-lg shadow-lg"
              alt="Modern Black and Grey Chair"
            />
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 border-t-2 pt-6">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8xgcF0Bje1mTIeNyLnzwEJHlpXgOEqVRFmagcdMVVyKAIMGw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQti7Jy4jjbhEy4HiuXoa5ykwCxsbzCzOPwlFWVbStPSPPlYnaL",
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEjMq6vPeNzKRSbFavs09QVr556bac37eez1Gfgmvn2849FbQ-",
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnECrsNMcvq95fH4-ZIAc2NUW6xDeeFutKLdQDjaUf5Zdf139Q",
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzdgHPKNyxeprnI5liMAXTCRlh93mKvARtyHP6CPgCUOLLDbTG",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NuYUnzzHnCE2Qilbo7zArPqDehtBcHX5ZBxeVgcYSx9TRKuJ",
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuDMpMofgUkXc9h8lmq9QRVSpVgXOGjWiLsTtdyGTzln1uLKiE",
          ].map((src, index) => (
            <img
              key={index}
              className="w-[85px] h-[87px] object-contain rounded-md shadow-md hover:scale-105 transition-transform"
              src={src}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

