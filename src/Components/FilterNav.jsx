import React, { useEffect, useState } from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import filterImage from '../assets/Images/f1.webp'

function FilterNav({ setGrid }) {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [animateFilter,setAnimateFilter] = useState(false)
  const [activeBlock, setActiveBlock] = useState(2); // default: 2-column grid

  const handleVisualBlockClick = (value) => {
    setActiveBlock(value);
    setGrid(value); // pass to parent
  };
  
  useEffect(()=>{
    if(showFilter){
      const timeout = setTimeout(()=>{
        setAnimateFilter(true),50
      }
    )
              return () => clearTimeout(timeout);
    }else {
      setAnimateFilter(false)
    }

  },[showFilter])

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
    setShowSort(false); // close sort if open
  };

  const toggleSort = () => {
    setShowSort((prev) => !prev);
    setShowFilter(false); // close filter if open
  };

  return (
    <div className="w-full h-24 mt-4 bg-white flex justify-center items-center">
      <div className="flex justify-between items-center w-11/12 relative">
        {/* Filter Button and Dropdown */}
        <div className="relative">
          <button onClick={toggleFilter}>
            <h1 className="flex gap-x-2 justify-center items-center">
              {!showFilter ? (
                <span className="w-4 h-4">
                  <img src={filterImage} alt="" />
                </span>
              ) : (
                <span className="text-2xl ">&times;</span>
              )}{" "}
              Filter
            </h1>
          </button>

          {showFilter && (
            <div className={`absolute flex flex-col md:flex-row justify-around  mt-2 w-[18rem] sm:w-[30rem] md:w-[35rem] lg:w-[48rem] bg-white rounded shadow-lg z-50 transition-all transform ${animateFilter ? 'translate-y-0 opacity-100': '-translate-y-2 opacity-0'} duration-500 delay-200 ease-in`}>
              {/* Filter by Price */}
              <ul className="space-y-2 p-4 w-full">
                <h1 className="font-semibold text-xl underline">
                  Filter by Price
                </h1>
                <li>
                  <label className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="price"
                      value="0-250"
                      className="accent-[#861F3D]"
                    />
                    0 - 250
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="price"
                      value="250-350"
                      className="accent-[#861F3D]"
                    />
                    250 - 350
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="price"
                      value="350-450"
                      className="accent-[#861F3D]"
                    />
                    350 - 450
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="price"
                      value="450-550"
                      className="accent-[#861F3D]"
                    />
                    450 - 550
                  </label>
                </li>
              </ul>

              {/* Product Category */}
              <ul className="space-y-2 p-4 w-full">
                <h1 className="font-semibold text-xl underline">
                  Product Category
                </h1>
                <li>
                  <Link to="/apple" className="hover:text-[#861F3D]">
                    Apple
                  </Link>
                </li>
                <li>
                  <Link to="/computer" className="hover:text-[#861F3D]">
                    Computer
                  </Link>
                </li>
                <li>
                  <Link to="/kitchen" className="hover:text-[#861F3D]">
                    Kitchen
                  </Link>
                </li>
                <li>
                  <Link to="/watch" className="hover:text-[#861F3D]">
                    Watch
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Visual Blocks */}
        {/* Visual Blocks */}
        <div className="flex w-[30%] gap-x-2.5">
          {/* 2 Columns */}
          <div
            className={`group cursor-pointer flex justify-around w-[35%] sm:w-[20%] md:w-[10%] h-8 border p-1 border-[#878787] items-center ${
              activeBlock === 2 ? "border-[#861F3D]" : ""
            }`}
            onClick={() => handleVisualBlockClick(2)}
          >
            <div className="h-11/12 w-[85%] sm:w-[35%] bg-[#878787] group-hover:bg-black"></div>
            <div className="hidden sm:flex h-11/12 w-[35%] bg-[#878787] group-hover:bg-black"></div>
          </div>

          {/* 3 Columns */}
          <div
            className={`group cursor-pointer flex justify-around w-[45%] sm:w-[30%] md:w-[20%] h-8 border p-1 border-[#878787] items-center ${
              activeBlock === 3 ? "border-[#861F3D]" : ""
            }`}
            onClick={() => handleVisualBlockClick(3)}
          >
            <div className="h-11/12 w-[45%] sm:w-[25%] group-hover:bg-black bg-[#878787]"></div>
            <div className="h-11/12 w-[45%] sm:w-[25%] group-hover:bg-black bg-[#878787]"></div>
            <div className="hidden sm:flex h-11/12 w-[25%] group-hover:bg-black bg-[#878787]"></div>
          </div>

          {/* 4 Columns */}
          <div
            className={`group hidden lg:flex cursor-pointer justify-around w-[30%] h-8 border p-1 border-[#878787] items-center ${
              activeBlock === 4 ? "border-[#861F3D]" : ""
            }`}
            onClick={() => handleVisualBlockClick(4)}
          >
            <div className="h-11/12 w-[20%] bg-[#878787] group-hover:bg-black"></div>
            <div className="h-11/12 w-[20%] bg-[#878787] group-hover:bg-black"></div>
            <div className="h-11/12 w-[20%] bg-[#878787] group-hover:bg-black"></div>
            <div className="h-11/12 w-[20%] bg-[#878787] group-hover:bg-black"></div>
          </div>
        </div>

        {/* Sort By Button and Dropdown */}
        <div className="relative">
          <div
            className="border px-5 py-1 rounded-2xl cursor-pointer"
            onClick={toggleSort}
          >
            <h1 className="flex gap-x-2 justify-center items-center">
              Sort by{" "}
              <span>
                <FaAngleDown />
              </span>
            </h1>
          </div>

          {showSort && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-white border rounded shadow-lg z-50">
              <ul className="p-4 space-y-2 text-[1rem]">
                <li className="cursor-pointer hover:text-white hover:bg-blue-600">
                  Price: Low to High
                </li>
                <li className="cursor-pointer hover:text-white hover:bg-blue-600">
                  Price: High to Low
                </li>
                <li className="cursor-pointer hover:text-white hover:bg-blue-600">
                  Date: New to Old
                </li>
                <li className="cursor-pointer hover:text-white hover:bg-blue-600">
                  Date: Old to New
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterNav;
