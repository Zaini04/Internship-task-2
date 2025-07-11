// src/pages/Watch.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { WatchProducts } from "../assets/asset";
import Filter from "../Components/Filter";
import FilterNav from "../Components/FilterNav";
import HomeNav from "../Components/HomeNav";
import WatchImage from "../assets/Images/w1.webp";
import Watches from "../assets/Images/Watches.webp";

function Watch() {
  const [hoveredId, setHoveredId] = useState(null);
  const [showCartId, setShowCartId] = useState(null);
  const [grid, setGrid] = useState(2);
  const navigate = useNavigate();

  const getGridClass = () => {
    switch (grid) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-2 md:grid-cols-3";
      case 4:
        return "grid-cols-3 md:grid-cols-4";
      default:
        return "grid-cols-2";
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Top Banner */}
      <div className="w-full hidden md:flex h-40 relative">
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10" />

  {/* Background Image */}
  <img className="w-full h-40 object-cover" src={Watches} alt="" />

  {/* Text Content */}
  <h1 className="absolute top-12 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl z-20">
    Watch
  </h1>
  <p className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-sm z-20">
    Shop through our latest selection of products.
  </p>
</div>

      <HomeNav />

      {/* Category Logo + Title */}
      <div className="w-4/12 sm:w-5/12 lg:w-2/12 flex justify-center items-center flex-col gap-y-2 mb-4">
        <img className="w-6/12 h-6/12" src={WatchImage} alt="Watch" />
        <h1 className="w-8/12 ml-2 text-center">Watch & Accessories</h1>
      </div>

      {/* Filter Navigation */}
      <div className="w-full">
        <FilterNav setGrid={setGrid} />
      </div>

      {/* Product Cards */}
      <div className="flex w-11/12 justify-center items-start mt-16 py-4">
        <Filter />
        <div className={`grid justify-center items-center gap-x-5 gap-y-10 w-10/12 ${getGridClass()}`}>
          {WatchProducts.map((item, index) => {
            const uniqueId = `watch-${index + 1}`;
            return (
              <div
                key={uniqueId}
                onClick={() => navigate(`/viewDetails/${uniqueId}`)}
                className="relative overflow-hidden group flex flex-col gap-y-24 sm:gap-y-28 md:gap-y-16 lg:gap-y-7 py-10 justify-center items-center"
                onMouseEnter={() => setHoveredId(uniqueId)}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setShowCartId(null);
                }}
              >
                {/* Image */}
                <div className="w-full h-3/12 lg:w-52 lg:h-44 flex justify-center items-center bg-[#E5E5E5] hover:opacity-85">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full object-cover hover:bg-transparent shadow-lg rounded-md transition-transform group-hover:scale-105 cursor-pointer duration-700 delay-200 ease-in-out"
                  />
                  <div className="absolute top-28 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out">
                    {hoveredId === uniqueId && showCartId !== uniqueId && (
                      <div
                        className="bg-white py-1 px-4 rounded-3xl text-black shadow-lg transition-transform duration-500 ease-in-out delay-200 hover:scale-110"
                        onMouseEnter={() => setShowCartId(uniqueId)}
                      >
                        View Details
                      </div>
                    )}
                    {showCartId === uniqueId && (
                      <FaShoppingCart
                        className="bg-[#861F3D] w-24 py-1 text-2xl px-4 rounded-3xl text-white shadow-lg transition-transform duration-500 ease-in-out delay-200"
                        onMouseLeave={() => setShowCartId(null)}
                      />
                    )}
                  </div>
                </div>

                {/* Product Description */}
                <div className="text-center w-11/12">
                  <p>{item.des.split(" ").slice(0, 5).join(" ")}...</p>
                  <p className="flex gap-x-2 justify-center items-center">
                    <span className="text-red-500">QAR</span>
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Watch;
