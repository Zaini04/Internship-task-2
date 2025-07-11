import React, { useEffect, useState } from "react";
import img1 from "../assets/Images/carisol1.png";
import img2 from "../assets/Images/carisol2.png";

const images = [img1, img2];

export default function CarouselComponent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Sliding Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer hover:bg-black ${
              current === index ? "bg-[#861F3D]" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}