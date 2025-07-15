import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import userImage from "../assets/Images/user.png";

const originalSlides = [
  {
    id: 1,
    img: userImage,
    name: "Ahmad Sultan",
    desc: "Speedy delivery, trustworthy store, top-notch gadgets! Excellent service, affordable rates...",
  },
  {
    id: 2,
    img: userImage,
    name: "Zain Iqbal",
    desc: "I recently purchased iPhone cover and I couldn't be happier...",
  },
  {
    id: 3,
    img: userImage,
    name: "Abdullah Yousaf",
    desc: "Rapid delivery, great electronics and good prices...",
  },
  {
    id: 4,
    img: userImage,
    name: "Fatima Umar",
    desc: "I've been a loyal customer of Garey Store for years...",
  },
];

const VISIBLE = 3;

export default function TestominialCarousol() {
  const [currentIndex, setCurrentIndex] = useState(VISIBLE);
  const trackRef = useRef(null);
  const transitionDuration = 500;

  const slides = [
    ...originalSlides.slice(-VISIBLE),
    ...originalSlides,
    ...originalSlides.slice(0, VISIBLE),
  ];

  // Immediately set initial transform on mount
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transition = "none";
      track.style.transform = `translateX(-${(100 / slides.length) * currentIndex}%)`;
    }
  }, []);

  // Slide movement
  const slideTo = (index, withTransition = true) => {
    const track = trackRef.current;
    if (!track) return;

    if (withTransition) {
      track.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    } else {
      track.style.transition = "none";
    }

    track.style.transform = `translateX(-${(100 / slides.length) * index}%)`;
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle smooth reset on clone boundary
  useEffect(() => {
    slideTo(currentIndex);

    const timeout = setTimeout(() => {
      if (currentIndex >= slides.length - VISIBLE) {
        setCurrentIndex(VISIBLE);
        slideTo(VISIBLE, false);
      }
    }, transitionDuration);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => {
    if (currentIndex === 0) {
      // Jump to duplicate at the end before real slides
      const jumpTo = slides.length - VISIBLE * 2;
      setCurrentIndex(jumpTo);
      slideTo(jumpTo, false);
      setTimeout(() => setCurrentIndex(jumpTo - 1), 0);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-10/12 relative mx-auto overflow-hidden py-4">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
        <button onClick={handlePrev} className="hover:text-black">
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} className="hover:text-black">
          <FaArrowRight />
        </button>
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex"
          style={{
            width: `${(100 / VISIBLE) * slides.length}%`,
          }}
        >
          {slides.map((item, index) => (
  <div
    key={index}
    className="p-2 flex-shrink-0 bg-white text-center mx-auto rounded-lg "
    style={{ width: `${100 / slides.length}%`, maxWidth: '300px' }} // Adjust max width
  >
    <div className="w-20 h-20 mx-auto mb-2">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <h3 className="font-semibold text-base">{item.name}</h3>
    <p className="text-sm text-gray-600 line-clamp-3">{item.desc}</p>
    <p className="text-yellow-500 mt-1 text-lg">⭐⭐⭐⭐⭐</p>
  </div>
))}

        </div>
      </div>
    </div>
  );
}
