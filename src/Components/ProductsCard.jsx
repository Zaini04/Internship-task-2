import React, { useState } from "react";

import { FaAngleDown, FaAngleUp, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/asset";
import { useCart } from "../context/Context";
function ProductCard() {
  
  const {addToCart} = useCart()
  const navigate = useNavigate()

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 10);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="grid w-11/12 md:w-9/12 lg:grid-cols-4 xl:grid-cols-5 lg:w-11/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
        {visibleProducts.map((item) => (
          <div
            key={`${item.id}-${item.img}`} 
            className="w-full cursor-pointer py-2 hover:rounded-sm mt-4 px-2 flex justify-center items-center flex-col transition-all delay-100 duration-700 ease-in-out hover:bg-[#FFFFFF] hover:shadow-2xl/20"
          >
            <div className="w-full py-5 flex justify-center items-center bg-[#E7E7E7]" onClick={()=> navigate(`/viewDetails/${item.id}`)}>
              <img className="w-full" src={item.img} alt={item.des} />
            </div>
            <div className="flex flex-col mt-2 items-start w-11/12 justify-start">
              <p className="text-justify text-[#878787] text-sm" onClick={()=> navigate(`/viewDetails/${item.id}`)}>
                {item.des.split(" ").slice(0, 4).join(" ")}...
              </p>
              <div className="w-full flex justify-between items-center mt-3">
                <p className="font-semibold text-sm">
                  QAR <span className="text-[1.2rem]">{item.price}</span>
                </p>
                <p className="px-3 py-1 rounded-full border border-black" onClick={()=>addToCart(item)}>
                  <FaShoppingCart  className="cursor-pointer hover:text-[#630c25] transition-transform delay-150 duration-500 hover:scale-125" />
               
                </p>
              </div>
              <p className="flex gap-x-2" onClick={()=> navigate(`/viewDetails/${item.id}`)}>
                {"best" in item ? (
                  <span className="text-[#FB7701]">best in sale</span>
                ) : (
                  <span className="text-green-400">New Arrival</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
{products.length > 10 && (
  <div>
    {showAll ? (
      <button
        onClick={() => setShowAll(false)}
        className="mt-6 px-10 cursor-pointer flex justify-center items-center gap-2 py-2 bg-[#861F3D] text-white rounded-full hover:bg-[#5D142A] transition duration-300"
      >
        See Less
        <FaAngleUp/>

      </button>
    ) : (
      <button
        onClick={() => setShowAll(true)}
        className="mt-6 px-10 flex justify-center gap-2 items-center cursor-pointer py-2 bg-[#861F3D] text-white rounded-full hover:bg-[#5D142A] transition duration-300"
      >
        See More
        <FaAngleDown/>
      </button>
    )}
  </div>
)}

    
      


    </div>
  );
}

export default ProductCard;
