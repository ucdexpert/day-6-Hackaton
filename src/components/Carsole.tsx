import React from "react";

const ImageContainer: React.FC = () => {
  // Array of images
  const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSz8T1TwjxuNNyf7oq34zEB21tpXj0fgwQSvD3MvFV5tfGop_v",
      alt: "Orange Chair",
      size: "large",
    },
    {
      src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbiOJ7ts4913fikqSoJNOtp7a86SCPr4QJ1SzDno2YnSxo9MjW",
      alt: "White Buttoned Chair",
    },
    {
      src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbiOJ7ts4913fikqSoJNOtp7a86SCPr4QJ1SzDno2YnSxo9MjW",
      alt: "Antique White Chair",
    },
    {
      src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbiOJ7ts4913fikqSoJNOtp7a86SCPr4QJ1SzDno2YnSxo9MjW",
      alt: "Gray Upholstered Chair",
    },
    {
      src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbiOJ7ts4913fikqSoJNOtp7a86SCPr4QJ1SzDno2YnSxo9MjW",
      alt: "Second White Antique Chair",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Section: Large Image */}
      <div className="flex flex-col items-center lg:items-start flex-1">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md"
        />
        <p className="text-center lg:text-left text-sm text-gray-600 mt-4">
          Experience the elegance of our premium chairs.
        </p>
      </div>

      {/* Right Section: Grid of Small Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex-1">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg shadow-sm hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
