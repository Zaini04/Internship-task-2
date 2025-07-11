import {
  AccountBalance,
  Home,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaBalanceScale,
  FaHome,
  FaMoneyBillAlt,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/Context";
import CartSidebar from "./CartSidebar";
import { products as allProducts } from "../assets/asset";

function BottomNav() {
  const { products } = useCart();
  const [cart, setCart] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [query, setQuery] = useState("");
  const [querySearch, setQuerySearch] = useState(false);
  const [cHovered, setCHovered] = useState(false);
    const dialogRef = useRef(null);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setCHovered(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setCHovered(false);
  }, [location]);
  const tooglebutton = () => {
    setCHovered(!cHovered);
  };
  const navigate = useNavigate();
  const toggleCart = () => {
    if (cart) {
      // Start slide-out
      setCart(false);
      // Delay unmount until after animation
      setTimeout(() => {
        setShowCart(false);
      }, 700); // match transition duration
    } else {
      // Show & slide in
      setShowCart(true);
      setTimeout(() => {
        setCart(true);
      }, 50); // small delay to trigger animation properly
    }
  };
  useEffect(() => {
  const root = document.getElementById("root");

  if (showCart || querySearch) {
    document.body.classList.add("overflow-hidden");
    root?.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    root?.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
    root?.classList.remove("overflow-hidden");
  };
}, [showCart, querySearch]);


  const handleSearch = () => {
    navigate(`/${query}`);
    setQuerySearch(false);
  };
  return (
    <>
           {(querySearch || showCart) && (
  <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-30" />
)}

    <div className="flex w-full  justify-around items-center shadow-lg lg:hidden fixed bottom-0 py-3 z-40 bg-white">
      
      <div className="flex flex-col justify-center items-center text-black">
        <Link to="/">
          <Home />
        </Link>
        <p className="text-xs font-bold">Home</p>
      </div>
      <div>
        <div className="relative" onClick={toggleCart}>
          <ShoppingCart className=" transition-all delay-100 duration-300 cursor-pointer" />
          <p className="text-xs font-bold">Cart</p>
          <p className="absolute -top-1 left-3 flex justify-center items-center w-4 h-4 md:w-4 md:h-4 bg-black text-white rounded-[50%] text-[0.7rem]">
            {products?.length > 9 ? "9+" : products?.length || 0}
          </p>
        </div>
        {showCart && (
          <>
            {/* BACKDROP OVERLAY */}
            <div
              className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] transition-opacity duration-500 z-40 ${
                cart ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleCart}
            />

            {/* CART SIDEBAR */}
            <CartSidebar cart={cart} setCart={toggleCart} />
          </>
        )}
      </div>
      <div className="flex flex-col justify-center items-center text-black">
        <AccountBalance onClick={() => navigate("/orderhistory")} />
        <p className="text-xs font-bold">My Account</p>
      </div>
      <div
        className="flex  flex-col justify-center relative items-center text-black"
        onClick={() => setQuerySearch((prev) => !prev)}
      >
        <Search />
        <p className="text-xs font-bold">Search</p>
      </div>
      
      
      
        
<div
  className={`fixed bottom-[21rem] left-0 w-full h-[50vh] bg-white z-50 overflow-hidden
    flex justify-start items-center flex-col
    transition-all duration-700 ease-in-out transform
    ${
      querySearch
        ? "translate-y-0 opacity-100 pointer-events-auto"
        : "translate-y-full opacity-0 pointer-events-none"
    }`}
>
             <div className="w-full flex justify-center items-baseline h-full overflow-y-auto">

          <div className="border border-[#aba8a8] rounded-4xl relative justify-between   px-0.5 py-0.5 w-11/12 mt-3   flex">
            <div className="relative w-5/12 hidden sm:flex" ref={dialogRef}>
              <p
                onClick={tooglebutton}
                className="flex w-full gap-1 justify-center items-center py-1 px-2 text-[1rem] text-[#878787] "
              >
                All Categoreis <FaAngleDown />
                {cHovered && (
                  <div>
                    <ul className="flex-col w-11/12 absolute top-10 left-3.5 z-10 gap-y-1   text-[#878787] bg-white rounded-lg border border-[#878787]  shadow-lg text-[1rem] ">
                      <div className=" flex justify-between items-center hover:rounded-t-lg  hover:bg-blue-500 hover:text-white cursor-pointer transition-all delay-100 duration-300 px-3">
                        <li className=" w-full  py-1 ">
                          <Link className="w-full " to="/apple">
                            Apple
                          </Link>
                        </li>
                      </div>
                      <div className=" flex justify-between items-center hover:bg-blue-500 hover:text-white transition-all delay-100 duration-300 cursor-pointer px-3">
                        <li className=" w-full py-1   ">
                          <Link className="w-full " to="/computer">
                            Computer
                          </Link>
                        </li>
                      </div>
                      <div className=" flex justify-between items-center hover:bg-blue-500 hover:text-white transition-all delay-100 duration-300 cursor-pointer px-3">
                        <li className=" w-full  py-1 ">
                          <Link className="w-full " to="/kitchen">
                            Kitchen
                          </Link>
                        </li>
                      </div>

                      <div className=" flex justify-between items-center hover:rounded-b-lg hover:bg-blue-500 hover:text-white transition-all delay-100 duration-300 cursor-pointer px-3">
                        <li className=" w-full py-1  ">
                          <Link className="w-full " to="/watch">
                            Watch
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                )}
                <span className="text-xl text-[#aba8a8] ml-1">|</span>
              </p>
            </div>
            <div className="relative flex justify-center items-center w-full">
              {/* input + button + search dropdown */}
              <input
                type="text"
                placeholder="Search here..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setQuerySearch(true);
                }}
                className="py-1 lg:px-1 outline-none md:px-2 w-10/12 md:w-10/12 lg:w-6/12 mt-1  text-[0.9rem] text-[#878787]  "
              />
            </div>
            <button
                  className="absolute text-4xl cursor-pointer  top-12 -right-2 sm:-right-3 md:-right-6 z-50"
                  onClick={() => setQuerySearch(false)}
                >
                  &times;
                </button>
            {querySearch && query.trim() !== "" && (
              <div className="absolute top-full left-0 mt-1 w-full grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4  bg-[#FFFFFF]   max-h-96 overflow-y-auto z-40">
                

                {allProducts
                  .filter((item) =>
                    item.des?.toLowerCase().startsWith(query.toLowerCase())
                  )
                  .map((item) => (
                    <div className="h-40 sm:60 w-full flex sm:mt-10 border-b border-[#F2F2F2] justify-center items-center">
                      <Link
                        to={`/viewDetails/${item.id}`}
                        key={item.id}
                        onClick={() => {
                          setQuery("");
                          setQuerySearch(false);
                        }}
                        className="flex justify-between w-full gap-y-1.5 items-center px-4 py-2 gap-x-3 "
                      >
                        <div className="w-44 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 flex justify-center  items-center overflow-hidden">
                          <img
                            src={item.img}
                            alt=""
                            className="w-full h-full shadow-lg object-cover shadow-lg/30  transition-transform hover:scale-110 hover:opacity-75  cursor-pointer duration-700 delay-200 ease-in-out"
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-y-2 w-full">
<span
                          className="text-sm w-full
                          text-[#878787] font-semibold text-justify"
                        >
                          {item.des.split(" ").slice(0, 7).join(" ")}...
                        </span>
                        <span className="text-sm  text-blue-500 font-semibold text-center">
                          QAR {item.price}
                        </span>
                        </div>
                        
                      </Link>
                    </div>
                  ))}

                {/* If no matches found */}
                {allProducts.filter((item) =>
                  item.des?.toLowerCase().startsWith(query.toLowerCase())
                ).length === 0 && (
                  <div className="text-sm text-gray-500 text-center py-2">
                    No matching products
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleSearch}
              className="px-8 h-10   text-[0.9rem] cursor-pointer rounded-3xl bg-[#861F3D] font-semibold text-white "
            >
              Search
            </button>
          </div>
          </div>
        </div>
      
    </div>
    </>
  );
}

export default BottomNav;
