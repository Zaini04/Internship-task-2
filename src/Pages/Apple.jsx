import React, { useState } from "react";
import { AppleProducts } from "../assets/asset";
import { Link, useNavigate } from "react-router-dom";
import AppleImage from "../assets/Images/Apple.webp";
import Apples from "../assets/Images/Apples.webp";
import { FaShoppingCart } from "react-icons/fa";
import NavLinks from "../Components/NavLinks";
import Filter from "../Components/Filter";
import FilterNav from "../Components/FilterNav";
import HomeNav from "../Components/HomeNav";

function Apple() {
  const [hoveredId, setHoveredId] = useState(null);
  const [showCartId, setShowCartId] = useState(null);
  const navigate = useNavigate();
  const [grid, setGrid] = useState(2); // 1, 2, or 4

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

  // Prefix Apple product IDs
  const appleData = AppleProducts.map((item, index) => ({
    ...item,
    id: item.id?.toString().startsWith("apple-")
      ? item.id
      : `apple-${index + 1}`,
  }));

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <div className="w-full hidden md:flex h-40 relative bg-[#757575]">
        {/* Always-visible dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-10" />

        {/* Background Image */}
        <img className="w-full h-40 object-cover" src={Apples} alt="" />

        {/* Text Content (above overlay) */}
        <h1 className="absolute top-12 left-[40%] text-white font-bold text-xl z-20">
          Apple
        </h1>
        <p className="absolute top-20 left-[35%] text-white text-sm z-20">
          Shop through our latest selection of products.
        </p>
      </div>

      <HomeNav />

      <div className="w-4/12 sm:w-5/12 lg:w-2/12 flex justify-center items-center flex-col gap-y-2 mb-4">
        <img className="w-6/12 h-6/12" src={AppleImage} alt="" />
        <h1 className="w-8/12 ml-2 text-center">
          Apple Products & Accessories
        </h1>
      </div>

      <div className="w-full">
        <FilterNav setGrid={setGrid} />
      </div>

      <div className="flex w-11/12 justify-center items-start py-4">
        <Filter />
        <div
          className={`grid justify-center items-center gap-x-5 gap-y-10 w-10/12 ${getGridClass()}`}
        >
          {appleData.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/viewDetails/${item.id}`)}
              className="relative overflow-hidden group flex flex-col gap-y-24 sm:gap-y-28 md:gap-y-16 lg:gap-y-7 py-10 justify-center items-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => {
                setHoveredId(null);
                setShowCartId(null);
              }}
            >
              <div className="w-full h-3/12 lg:w-52 lg:h-44 flex justify-center items-center bg-[#E5E5E5] hover:opacity-85">
                <img
                  src={item.img}
                  alt=""
                  className="w-full object-cover shadow-lg/30 rounded-md transition-transform group-hover:scale-105 cursor-pointer duration-700 delay-200 ease-in-out"
                />

                <div className="absolute top-28 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out">
                  {hoveredId === item.id && showCartId !== item.id && (
                    <Link
                      to={`/viewDetails/${item.id}`}
                      className="bg-white py-1 px-4 rounded-3xl text-black shadow-lg transition-transform duration-300 hover:scale-110"
                      onMouseEnter={() => setShowCartId(item.id)}
                    >
                      View Details
                    </Link>
                  )}
                  {showCartId === item.id && (
                    <FaShoppingCart
                      className="bg-[#861F3D] w-24 py-1 text-2xl px-4 rounded-3xl text-white shadow-lg transition duration-300"
                      onMouseLeave={() => setShowCartId(null)}
                    />
                  )}
                </div>
              </div>

              <div className="text-center w-11/12">
                <p>{item.des.split(" ").slice(0, 5).join(" ")}...</p>
                <p className="flex gap-x-2 justify-center items-center">
                  <span className="text-red-500">QAR</span>
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Apple;
