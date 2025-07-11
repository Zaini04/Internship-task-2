import React, { useState } from "react";
import emptyImage from "../assets/Images/emptyCard.png";
import cartBotomImage from "../assets/Images/trust_img2.png";
import { FaTimes } from "react-icons/fa";
import { useCart } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function CartSidebar({ cart, setCart }) {
  const { products, removeFromCart,setProducts ,increase,decrease} = useCart();
  const navigate = useNavigate()
const handleReturn = ()=>{
    navigate('/')
    setCart(false)
}
const viewCart =()=>{
  if(products.length > 0){

    navigate('/viewcart')
  }
  else{
    toast.error("You don't have any product in Cart ")
  }
  setCart(false)
}
 const CheckOut =()=>{
  if(products.length > 0){

    navigate('/checkoutpage')
  }
  else{
    toast.error("You don't have any product in Cart ")
  }
  setCart(false)
}
const subTotal = products.reduce((total,item)=>{
  return total + item.quantity * parseFloat(item.price) 
},0)



  return (
    <div
      className={`fixed top-0 right-0 text-4xl text-black bg-white  transition-transform  transform ${
        cart ? "translate-x-0" : "translate-x-full"
      } duration-500 ease-in-out delay-100 flex flex-col justify-start items-center w-[85%] sm:w-[50%] md:w-[40%] lg:w-[26.5%] h-full z-50`}
    >
      <div className="flex w-full justify-between  items-center py-6">
        <h2 className="text-[0.95rem] font-semibold ml-4 text-[#3B3B3B]">
          SHOPPING CART
        </h2>
     
        <FaTimes
          onClick={() => setCart(false)}
          className="cursor-pointer transition-transform duration-500 transform hover:rotate-180 mr-4 text-xl"
        ></FaTimes>
      </div>
      {products.length > 0 ? (
        <div className="flex flex-col justify-between items-center  w-full h-[45%] lg:h-[34%] overflow-y-scroll .scroll-hidden ">
          {products.map((item, index) => (
            <div
              className="flex gap-x-1 py-6  justify-between items-center border-y border-[#E6E6E6] w-full"
              key={index}
            >
              <div className="w-[37%] h-[80%]   ml-4  cursor-pointer ">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-4 w-6/12 ml-4 justify-between items-start ">
                <p className="text-sm w-full text-[#3B3B3B] ">
                  {item.des?.split(" ").slice(0, 4).join(" ") ?? ""}...
                </p>
                <p className="text-sm text-[#EC0505]">QAR {item.price}</p>
                <div className="flex justify-around font-bold w-9/12 items-center text-lg py-0.5 px-1 border rounded-4xl ">
                  <button
                    className=" cursor-pointer  hover:text-[#AA3D3D] transition-all delay-100 duration-300  text-3xl ml-1
             "
             onClick={()=>decrease(item.id)}
                  >
                    -
                  </button>
                  <p className=" w-6/12 text-center">{item.quantity}</p>
                  <button className=" cursor-pointer  hover:text-[#AA3D3D] transition-all delay-100 duration-300 text-2xl mr-1" onClick={()=>increase(item.id)}>
                    +
                  </button>
                </div>
                <p
                  className="text-[#878787] text-sm cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center overflow-y-scroll items-center gap-y-3 pb-3 pt-8 border-t  border-[#E6E6E6] h-[20%] md:h-[25%] lg:h-[30%] xl:h-[33%] w-full ">
           <div className="w-4/12 py-2 mt-10 lg:mt-0 ">
                <img
                  className="w-full h-full object-cover"
                  src={emptyImage}
                  alt=""
                />
              </div>
          <button onClick={handleReturn} className="w-6/12  text-[0.85rem] font-bold  text-[#FFFFFF]   cursor-pointer hover:opacity-85 transition-opacity duration-500 delay-100 ease-in-out bg-[#861F3D] rounded-4xl py-3   ">
            RETURN TO SHOP{" "}
          </button>{" "}
        </div>
      )}

      <div className="flex w-full justify-between  items-center py-4  mt-2 ">
        <h2 className="text-lg font-bold ml-4">SubTotal</h2>
        <p className="cursor-pointer text-lg mr-4">QAR {subTotal.toFixed(2)}</p>
      </div>
      <div className="flex flex-col px-4">
        <p className="text-sm text-[#878787]">
          We deliver within 24-48 hrs, the delivery team will contact you for
          location in Qatar.
        </p>
        <div className="flex mt-2 gap-x-2 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-sm text-[#878787]">
            I agree with the terms and conditions
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 mt-6 ">
          <button className="w-full tracking-[0.2em] text-[0.8rem] font-semibold text-white   cursor-pointer hover:opacity-85 transition-opacity duration-500 delay-100 ease-in-out bg-black rounded-4xl py-3 pb-4 px-4 " onClick={viewCart}>
            VIEW CART{" "}
          </button>
          <button className="w-full text-[0.8rem] tracking-[0.2em] font-semibold text-white   cursor-pointer hover:opacity-85 transition-opacity duration-500 delay-100 ease-in-out bg-[#861F3D] rounded-4xl py-3 pb-4 px-4 " onClick={CheckOut}>
            CHECK OUT
          </button>
        </div>
        <div className="mt-2">
          <img src={cartBotomImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
