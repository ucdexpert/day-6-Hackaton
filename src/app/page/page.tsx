
import React from 'react';

export default function Page() {
  return (
    <div>
      {/* Product Details Section */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmkkN5OLlfkNRvwbxVLGKWBr-AhFcT0_F5CRQaCQerRmCbHZqG"
            />
            {/* Product Info */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">
                Library Stool <br /> Chair
              </h1>
              <span className="inline-block text-white bg-[#029FAE] rounded-full py-2 px-5 text-lg">
                $58.00
              </span>
              <p className="leading-relaxed mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
                adipiscing.
              </p>
              <button className="mt-6 bg-[#029FAE] text-white py-2 px-7 rounded hover:bg-[#027d85] transition">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="bg-gray-100 py-12">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
            Featured Products
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card */}
            {[
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQml8OpRhvppIJSDDxNrDii1ZfCIEh3wZhde5dsP1b5HeRWyXF9",
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc2eR_xv1pL2vM-ZUNn1V5Jv66I9XaTkiSOtyf3E0hS0r9oRAh",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDNWI2zjyz3iFt6ZrbwhWvIPriSLtLVPl_iYC9RLY_UViYzJBG",
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRnValaAso3JIzMNSQSplKF7yl441XsJkzOpfrcV--yK-W270R",
            ].map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 transition-all"
              >
                <div className="w-full h-[210px] mx-auto overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                  Library Stool Chair
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
