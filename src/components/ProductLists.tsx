// 'use client'
// import React, { useState } from "react";

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: string;
// }

// export default function ProductLics() {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const products: Product[] = [
//     {
//       id: 1,
//       image:
//         "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRysg13kKD_3Im-NpqXbauEWnYBaZZaJWHbLhOfWriwWYE0ax7U",
//       title: "Library Stool Chair",
//       price: "$20",
//     },
//     {
//       id: 2,
//       image:
//         "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBr9dl99tXYHrMECkwpmQCKR9GdRkZVS0_eD5jsHTK1f-xYKqf",
//       title: "Modern Lamp",
//       price: "$15",
//     },
//     {
//       id: 3,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctB0BUXmojUyrVXuyewgIEuSTshHWdRQTUff0gfyhSA5vqaw",
//       title: "Desk Chair",
//       price: "$30",
//     },
//     {
//       id: 4,
//       image:
//         "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwT9oKXUEa00bTvSBpA2--R7nI0heAl5yTRTa2qX9L34Oea0WR",
//       title: "Armchair",
//       price: "$25",
//     },
//   ];

//   const handleAddToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const isAlreadyInCart = prevCart.some((item) => item.id === product.id);
//       if (isAlreadyInCart) {
//         alert(`${product.title} is already in the cart!`);
//         return prevCart;
//       }

//       setSuccessMessage(`${product.title} added to the cart successfully!`);
//       setTimeout(() => setSuccessMessage(null), 2000);

//       return [...prevCart, product];
//     });
//   };

//   const handleRemoveFromCart = (productId: number) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const handleBuyNow = (product: Product) => {
//     alert(`You have purchased: ${product.title} for ${product.price}`);
//   };

//   const calculateTotalPrice = () => {
//     return cart
//       .reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0)
//       .toFixed(2);
//   };

//   return (
//     <div className="flex flex-col items-center w-full px-4 lg:px-16">
//       <div className="font-[sans-serif] bg-gray-100 w-full">
//         <div className="p-4 mx-auto max-w-[1200px]">
//           <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-12 text-center">
//             Featured Products
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all shadow-md"
//               >
//                 <div className="h-[180px] overflow-hidden mx-auto mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-extrabold text-gray-800">
//                     {product.title}
//                   </h3>
//                   <h4 className="text-lg text-gray-800 font-bold mt-2">
//                     {product.price}
//                   </h4>
//                   <div className="grid grid-cols-2 gap-2">                
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
//                   >
//                     Buy Now
//                   </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Cart Section */}
//       <div className="w-full mt-12">
//         <div className="font-sans p-4 mx-auto max-w-[1200px]">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h3>
//           {cart.length === 0 ? (
//             <p className="text-gray-600">Your cart is empty.</p>
//           ) : (
//             <ul>
//               {cart.map((item) => (
//                 <li
//                   key={item.id}
//                   className="flex justify-between items-center bg-gray-100 rounded p-3 mb-2"
//                 >
//                   <span className="font-semibold">{item.title}</span>
//                   <span className="text-gray-600">{item.price}</span>
//                   <button
//                     onClick={() => handleRemoveFromCart(item.id)}
//                     className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-all"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {/* Total Price Section */}
//           {cart.length > 0 && (
//             <div className="mt-4 p-4 bg-gray-200 rounded-md">
//               <h4 className="text-lg font-bold text-gray-800">
//                 Total Price: ${calculateTotalPrice()}
//               </h4>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg mt-4 shadow-lg z-50">
//           <p>{successMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }







'use client'
import React, { useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

export default function ProductLics() {
  const [cart, setCart] = useState<Product[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRysg13kKD_3Im-NpqXbauEWnYBaZZaJWHbLhOfWriwWYE0ax7U",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBr9dl99tXYHrMECkwpmQCKR9GdRkZVS0_eD5jsHTK1f-xYKqf",
      title: "Modern Lamp",
      price: "$15",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScctB0BUXmojUyrVXuyewgIEuSTshHWdRQTUff0gfyhSA5vqaw",
      title: "Desk Chair",
      price: "$30",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwT9oKXUEa00bTvSBpA2--R7nI0heAl5yTRTa2qX9L34Oea0WR",
      title: "Armchair",
      price: "$25",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some((item) => item.id === product.id);
      if (isAlreadyInCart) {
        alert(`${product.title} is already in the cart!`);
        return prevCart;
      }

      setSuccessMessage(`${product.title} added to the cart successfully!`);
      setTimeout(() => setSuccessMessage(null), 2000);

      return [...prevCart, product];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleBuyNow = (product: Product) => {
    alert(`You have purchased: ${product.title} for ${product.price}`);
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0)
      .toFixed(2);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 lg:px-16">
      <div className="font-[sans-serif] bg-gray-100 w-full">
        <div className="p-4 mx-auto max-w-[1200px]">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-12 text-center">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all shadow-md"
              >
                <div className="h-[180px] overflow-hidden mx-auto mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-gray-800">
                    {product.title}
                  </h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-2">
                    {product.price}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">                
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="w-full mt-12">
        <div className="font-sans p-4 mx-auto max-w-[1200px]">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
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
                      className="w-12 h-12 object-contain mr-4"
                    />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <span className="text-gray-600">{item.price}</span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-all"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Total Price Section */}
          {cart.length > 0 && (
            <div className="mt-4 p-4 bg-gray-200 rounded-md">
              <h4 className="text-lg font-bold text-gray-800">
                Total Price: ${calculateTotalPrice()}
              </h4>
            </div>
          )}
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg mt-4 shadow-lg z-50">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
}
