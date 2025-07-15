import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import HomeNav from "../Components/HomeNav";
import { useCart } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ViewCart() {
  const { products, increase, decrease, removeFromCart } = useCart();

 const subTotal = products.reduce((total, item) => {
  const cleanPrice = parseFloat(item.price.toString().replace(/,/g, '')) || 0;
  return total + item.quantity * cleanPrice;
}, 0);

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      navigate("/");
      toast.error("You don't have any products in cart");
    }
  }, [products]);

  // Progress calculations
  const progress1 = Math.min((subTotal / 199) * 100, 100); // up to 199
  const progress2 = subTotal > 199 ? Math.min(((subTotal - 199) / 200) * 100, 100) : 0; // 199–399
  const progress3 = subTotal > 399 ? Math.min(((subTotal - 399) / 200) * 100, 100) : 0; // 399–599

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HomeNav />

      {/* Progress Section */}
      <div className="flex w-full justify-center items-center py-10 mt-10">
        <div className="flex justify-end items-center relative left-4 md:left-8 lg:left-14 w-11/12 md:w-full">
          {/* Dynamic Multi-Segment Progress Line */}
          <div className="h-1 w-11/12 absolute -left-2 flex rounded overflow-hidden">
            <div
              className="h-full transition-all duration-700 ease-in-out"
              style={{
                width: "33.33%",
                background: `linear-gradient(to right, #22c55e ${progress1}%, #d1d5db ${progress1}%)`,
              }}
            />
            <div
              className="h-full transition-all duration-1000 ease-in-out"
              style={{
                width: "33.33%",
                background: `linear-gradient(to right, #22c55e ${progress2}%, #d1d5db ${progress2}%)`,
              }}
            />
            <div
              className="h-full transition-all duration-1000 ease-in-out"
              style={{
                width: "33.34%",
                background: `linear-gradient(to right, #22c55e ${progress3}%, #d1d5db ${progress3}%)`,
              }}
            />
          </div>

          {/* Milestones */}
          {[
            { amount: 199, label: "Free delivery", step: "1", left: "sm:left-44", titleLeft: "sm:left-32" },
            { amount: 399, label: "50 QAR OFF", step: "2", left: "sm:left-44", titleLeft: "sm:left-32" },
            { amount: 599, label: "100 QAR OFF", step: "3", left: "sm:left-28", titleLeft: "sm:left-16" },
          ].map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col gap-y-2 relative ${
                index === 0
                  ? "left-0 sm:left-5 md:left-16 lg:left-44"
                  : index === 1
                  ? "left-0 sm:left-5 md:left-16 lg:left-40"
                  : "left-0 sm:left-6 md:left-16 lg:left-32 xl:left-48"
              } justify-center items-center w-10/12 lg:w-6/12`}
            >
              <p
                className={`w-full  absolute left-10 ${milestone.titleLeft} -top-8 text-[0.5rem] md:text-xs font-bold ${
                  subTotal >= milestone.amount ? "text-green-500" : "text-[#333640]"
                }`}
              >
                Spend {milestone.amount} QAR
              </p>
              <p
                className={`w-6 h-6 rounded-full absolute z-30 left-14 ${milestone.left} flex justify-center items-center text-sm ${
                  subTotal >= milestone.amount ? "bg-green-500 text-white" : "bg-[#E0E0E0] text-[#878787]"
                }`}
              >
                {milestone.step}
              </p>
              <p
                className={`w-full absolute left-8 ${milestone.titleLeft} ml-4 top-4 text-[0.5rem] md:text-[0.65rem] ${
                  subTotal >= milestone.amount ? "text-green-500" : "text-[#878787]"
                }`}
              >
                {milestone.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Header */}
      <div className="flex flex-col w-full justify-center items-center mt-4">
        <div className="w-11/12 hidden md:flex justify-between border-b py-2 border-[#E5E5E5]">
          <h1 className="w-5/12 text-sm font-bold text-[#222222]">PRODUCT</h1>
          <h1 className="text-sm font-bold text-[#222222]">PRICE</h1>
          <h1 className="text-sm font-bold text-[#222222]">QUANTITY</h1>
          <h1 className="text-sm font-bold text-[#222222]">TOTAL</h1>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col w-full md:w-11/12 justify-center items-center">
          {products.map((item, index) => {
            const quantity = Number(item.quantity || 0);
            const price = Number(item.price?.toString().replace(/,/g, "") || 0);
            const itemTotal = quantity * price;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full py-8 justify-between items-center"
              >
                <div className="flex w-11/12 sm:w-8/12 md:w-5/12 gap-x-4 justify-start items-center border-b pb-8 border-[#E5E5E5] md:border-none">
                  <div className="w-36 h-28 sm:w-36 sm:h-28 md:w-36 md:h-28">
                    <img
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-y-3 w-full mt-14 md:mt-0">
                    <p className="font-bold text-sm w-full ">
                      {item.des?.split(" ").slice(0, 8).join(" ") ?? ""}...
                    </p>
                    <p
                      className="text-[#878787] text-sm cursor-pointer border-b border-[#E5E5E5] md:border-none pb-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </p>
                    <div className="flex flex-col gap-y-2.5 md:hidden">
                      <h1 className="text-sm font-bold border-b pb-2 border-[#E5E5E5] text-[#222222]">
                        {item.price}
                      </h1>
                      <div className="flex justify-around font-bold w-6/12 sm:w-3/12 items-center text-lg py-0.5 px-1 border rounded-4xl">
                        <button
                          className="text-3xl ml-1 hover:text-[#AA3D3D]"
                          onClick={() => decrease(item.id)}
                        >
                          -
                        </button>
                        <p className="w-6/12 text-center">{item.quantity}</p>
                        <button
                          className="text-2xl mr-1 hover:text-[#AA3D3D]"
                          onClick={() => increase(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <h1 className="text-sm font-bold border-t pt-2 border-[#E5E5E5] text-[#222222]">
                        {itemTotal.toFixed(2)}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex flex-col gap-y-4 md:flex-row w-4/12 mt-2 md:mt-0 md:w-5/12 justify-center items-start md:justify-between md:items-center">
                  <h1 className="text-sm font-bold text-[#222222]">
                    {item.price}
                  </h1>
                  <div className="flex justify-around font-bold w-10/12 sm:w-5/12 md:w-3/12 items-center text-lg py-0.5 px-1 border rounded-4xl">
                    <button
                      className="text-3xl ml-1 hover:text-[#AA3D3D]"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>
                    <p className="w-6/12 text-center">{item.quantity}</p>
                    <button
                      className="text-2xl mr-1 hover:text-[#AA3D3D]"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <h1 className="text-sm font-bold text-[#222222]">
                    {itemTotal.toFixed(2)}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtotal + Checkout */}
      <div className="w-full flex justify-end items-end mt-4">
        <div className="w-10/12 flex flex-col gap-y-4 justify-center items-end mr-8">
          <h1 className="font-semibold text-xl mr-3 text-[#222222]">
            SUBTOTAL : QAR {subTotal.toFixed(2)}
          </h1>
          <p className="text-[#878787] text-sm mr-3">
            Delivery fee is calculated at checkout
          </p>
          <button className="w-7/12 lg:w-3/12 text-[0.8rem] font-bold text-white cursor-pointer hover:opacity-85 transition-opacity duration-500 delay-100 ease-in-out bg-[#861F3D] rounded-4xl py-3 pb-4 px-4">
            UPDATE IN CART
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="w-7/12 lg:w-3/12 text-[0.8rem] font-bold text-white cursor-pointer hover:opacity-85 transition-opacity duration-500 delay-100 ease-in-out bg-[#861F3D] rounded-4xl py-3 pb-4 px-4"
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
