 import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import userImage from "../assets/Images/user.png";

function TestominialCarousol() {
  const [startIndex, setStartIndex] = useState(0);

  const products = [
    {
      id: 1,
      img: userImage,
      name: "Ahmad Sultan",
      desc: "Speedy delivery, trustworthy store, top-notch gadgets! Excellent service, affordable rates...",
      rating: 4.5,
    },
    {
      id: 2,
      img: userImage,
      name: "Zain Iqbal",
      desc: "I recently purchased iPhone cover and I couldn't be happier...",
      rating: 4.0,
    },
    {
      id: 3,
      img: userImage,
      name: "Abdullah Yousaf",
      desc: "Rapid delivery, great electronics and good prices...",
      rating: 4.2,
    },
    {
      id: 4,
      img: userImage,
      name: "Fatima Umar",
      desc: "I've been a loyal customer of Garey Store for years...",
      rating: 5.0,
    },
  ];

  const total = products.length;

  // Looping carousel items
  const visibleItems = [
    products[startIndex % total],
    products[(startIndex + 1) % total],
    products[(startIndex + 2) % total],
  ];

  // Auto Loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(interval); // clear interval on unmount
  }, [total]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <div className="w-full flex flex-col text-[#878787] justify-center items-center relative mx-auto p-4">
      {/* Navigation Buttons */}
      <div className="flex w-full absolute top-1/2 justify-between items-center px-2 z-10">
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded hover:text-black transition-all duration-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 rounded hover:text-black transition-all duration-300"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Carousel Items with Transition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full transition-transform duration-700 ease-in-out">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="p-4 h-full flex flex-col gap-y-3 text-center justify-center items-center rounded-lg bg-white "
          >
            <div className="w-24 h-24">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-full mb-2"
              />
            </div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600 max-h-32 overflow-hidden">
              {item.desc}
            </p>
            <p className="text-yellow-500 mt-1 text-xl">⭐⭐⭐⭐⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TestominialCarousol;