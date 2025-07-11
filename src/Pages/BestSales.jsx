import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {ComputerProducts,AppleProducts,WatchProducts,KitchenProducts} from "../assets/asset"
import NavLinks from '../Components/NavLinks';


function BestSales() {
      const [hoveredId, setHoveredId] = useState(null);
          const [showCartId, setShowCartId] = useState(null);
          const navigate = useNavigate();

          const products = [...AppleProducts,...ComputerProducts,...KitchenProducts,...WatchProducts]
          const bestProducts = products.filter((item)=> "best" in item)
  return (
     <div className="w-full flex flex-col justify-center items-center mt-10">
          <h1 className="font-bold text-2xl cursor-pointer hover:bg-[#630c25] transition-all duration-200 delay-100 ease-in text-white px-7 rounded-2xl py-4 mt-10 bg-[#861F3D]">Best Products</h1>
    
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 w-10/12 mt-16">
            {bestProducts.map((item) => (
              <div
                key={item.id}
                className=" relative overflow-hidden group flex flex-col gap-y-24 sm:gap-y-28 md:gap-y-16 lg:gap-y-7 py-10  justify-center items-center shadow-sm "
                onClick={() => navigate("/viewDetails")}
                onMouseEnter={() => {
                    setHoveredId(item.id)
                    
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setShowCartId(null);
                }}
              >
                <div className="w-7/12 h-3/12 lg:w-52 lg:h-44 flex justify-center items-center">
                  <img
                    src={item.img}
                    alt=""
                   
                    className="w-full object-cover shadow-lg rounded-md transition-transform group-hover:scale-105 cursor-pointer  duration-500 delay-200 ease-in-out "
                  />
    
                  {/* Container for animation */}
                  <div className="absolute top-28  left-1/2 cursor-pointer -translate-x-1/2 transition-all duration-300 ease-in-out">
                    {hoveredId === item.id && showCartId !== item.id && (
                      <Link 
                        to="/viewDetails"
                        className="bg-[#861F3D] py-1 px-4 rounded-3xl text-white shadow-lg transition-transform duration-500 ease-in-out delay-200 hover:scale-200"
                        onMouseEnter={() => setShowCartId(item.id)}
                      >
                        View Details
                      </Link>
                    )}
    
                    {showCartId === item.id && (
                      <FaShoppingCart
                        className="text-white bg-[#861F3D] p-2 rounded-full text-3xl shadow-lg transition-transform duration-500 ease-in-out delay-200 hover:scale-200"
                        onMouseLeave={() => setShowCartId(null)}
                      />
                    )}
                  </div>
                </div>
    
                <div className=" text-center w-11/12">
                  <p>{item.des}</p>
                  <p className="flex gap-x-2 justify-center items-center"><span className="text-red-500  ">QAR</span>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default BestSales