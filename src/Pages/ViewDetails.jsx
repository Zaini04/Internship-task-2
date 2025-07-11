// src/pages/ViewDetails.jsx
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { WatchProducts, KitchenProducts, ComputerProducts, AppleProducts } from "../assets/asset";
import HomeNav from "../Components/HomeNav";
import ProductCard from "../Components/ProductsCard";
import { FaBicycle, FaCar, FaKey, FaTired } from "react-icons/fa";
import { TiRefreshOutline } from "react-icons/ti";
import { Circle, CircleOutlined, RotateLeft, RotateRight, TireRepair, TireRepairOutlined, TireRepairRounded } from "@mui/icons-material";
import { BiCycling } from "react-icons/bi";
import { useCart } from "../context/Context";

function ViewDetails() {
  const { id } = useParams();
  const {increase,addToCart ,decrease,products} = useCart()



  const allProducts = [
    ...WatchProducts.map((item, index) => ({ ...item, id: `watch-${index + 1}` })),
    ...KitchenProducts.map((item, index) => ({ ...item, id: `kitchen-${index + 1}` })),
    ...ComputerProducts.map((item, index) => ({ ...item, id: `computer-${index + 1}` })),
    ...AppleProducts.map((item, index) => ({ ...item, id: `apple-${index + 1}` })),
  ];

  
   const [count, setCount] = useState(3); // default to 3 (mobile)
  const [localQty, setLocalQty] = useState(1); // starts at 1

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) {
        setCount(5); // md breakpoint is 768px in Tailwind
      } else {
        setCount(3);
      }
    };

    // Run once on load
    updateCount();

    // Listen for resize
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const product = allProducts.find((p) => p.id === id);


const increaseQty = () => {
  setLocalQty((prev) => prev + 1);
};

const decreaseQty = () => {
  if (localQty > 1) {
    setLocalQty((prev) => prev - 1);
  }
};


  if (!product) {
    return <div className="text-center mt-10 text-red-500">Product not found</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <HomeNav />
      <div className="flex flex-col md:flex-row w-full justify-between items-start">
        {/* Image Section */}
        <div className="w-full md:w-[50%] mt-9 flex flex-col justify-center items-center">
          <div className="w-11/12  md:h-[80vh]  px-1 py-5 border-2 border-[#F2F2F2] flex justify-center items-center">
            <img
              className="w-11/12 md:w-full xl:w-11/12 md:h-full m-4 object-cover  "
              src={product.img}
              alt=""
            />
          </div>

          <div className="w-10/12 md:w-11/12 mt-4 flex gap-x-2 justify-center items-center">
            {[...Array(count)].map((_, i) => (
              <div
                key={i}
                className="w-28 h-28 border-2 active:border-[#871E3D] border-[#F2F2F2] p-2 cursor-pointer flex justify-center items-center"
              >
                <img
                  className="w-full h-10/12  object-cover"
                  src={product.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex w-11/12 md:w-[50%] mt-7 ml-3 md:ml-0 flex-col justify-center items-start">
          <h1 className="font-bold text-[#222222] text:sm md:text-xl">{product.des}</h1>
          <p className=" mt-2 text-sm md:text-xl text-[#696969]">
            QAR: {product.price}
          </p>

          <div className="flex flex-col lg:flex-row w-9/12 gap-y-2 gap-x-4 mt-4">
            <div className="flex justify-between font-bold w-8/12 items-center gap-x-8 text-xl py-2 px-2 border rounded-4xl">
              <button className="w-4/12 cursor-pointer ml-2 hover:text-[#AA3D3D] transition-all delay-100 duration-300 " onClick={decreaseQty}>-</button>
              <p className="w-10/12 text-center">
  {localQty}
              </p>
              <button className="w-4/12 cursor-pointer mr-2 hover:text-[#AA3D3D] transition-all delay-100 duration-300 " onClick={increaseQty}>+</button>
            </div>
            <button onClick={()=>addToCart({...product, quantity:localQty})} className="w-10/12 py-2 cursor-pointer text-white text-sm bg-[#861F3D] rounded-4xl font-bold">
              ADD CART
            </button>
            <button className="w-10/12 py-2 cursor-pointer  text-white text-sm bg-[#861F3D] rounded-4xl font-bold">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 h-full md:h-72  md:bg-[#F6F6F8] w-full">
        <div className="w-11/12 flex flex-col gap-y-4 md:flex-row gap-x-4  mt-8 justify-between items-center h-7/12 ">
            <div className="w-11/12 md:w-3/12 h-full flex flex-col m  gap-y-3 ">
              <FaCar className="text-2xl mx-auto"/>
              <h2 className="font-semibold text-black mx-auto text-center md:text-[1rem] lg:text-xl">FAST DELIVERY IN QATAR</h2>
              <p className=" mx-auto text-center">We deliver within 24-48 hours</p>
            </div>
            <div className=" w-11/12 md:w-3/12 h-full flex flex-col  gap-y-3 ">
              <CircleOutlined className="text-2xl mx-auto"/>
              <h2 className="font-semibold text-[#222222] mx-auto text-center md:text-[1rem] lg:text-xl">SUPPORT 24/7</h2>
              <p className=" mx-auto text-center">Contact us 24 hours a day, 7 days a week</p>
            </div>
            <div className=" w-11/12 md:w-3/12 h-full flex flex-col   gap-y-3 ">
              <RotateRight className="text-2xl mx-auto"/>
              <h2 className="font-semibold text-[#222222] mx-auto text-center md:text-[1rem] lg:text-xl ">7 DAYS RETURN</h2>
              <p className=" mx-auto text-center">Simply return it as received within 7 days for an exchange</p>
            </div>
            <div className=" w-11/12 md:w-3/12 h-full flex flex-col gap-y-3 ">
              <FaKey className="text-2xl mx-auto"/>
              <h2 className="font-semibold text-[#222222] mx-auto text-center md:text-[1rem] lg:text-xl">Cash on Delivery</h2>
              <p className=" mx-auto text-center">Shop safely with confidence</p>
            </div>
        </div>

      </div>
      <div className="w-full mt-5 md:mt-2 ">
         <h1 className="font-bold flex gap-x-3 md:gap-x-7 justify-center items-center text-[1.2rem] sm:text-[1.5rem] text-[#222222] mb-8 mt-16 w-full md:text-2xl ">
          <span>_____</span>You may also like <span>_____</span>
        </h1>
      <ProductCard/>
      </div>
    </div>
  );
}

export default ViewDetails;
