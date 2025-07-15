import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/Images/image.png";
import img2 from "../assets/Images/image2.png";
import en from "../assets/Images/en.png";
import ar from "../assets/Images/ar.png";
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowDown,
  FaHamburger,
  FaHammer,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import logo from "../assets/Images/logo.png";
import { HiMenu } from "react-icons/hi";
import { FaAngleLeft, FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Carousol from "../Components/Carousol";
import NavLinks from "./NavLinks";
import CartSidebar from "./CartSidebar";
import { useCart } from "../context/Context";
import { useAuth } from "../context/AuthContext";
import { products as allProducts } from "../assets/asset";
import MenuLists from "./MenuLists";
import { toast } from "react-toastify";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [cHovered, setCHovered] = useState(false);
  const [dHovered, setDHovered] = useState(false);
  const [lHover, setLHover] = useState(false);
  const [userHover, setUserHover] = useState(false);
  const [cart, setCart] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [menuLists, setMenuLists] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [querySearch, setQuerySearch] = useState(false);
  const { user, logout } = useAuth();
  const { products } = useCart();
  const dialogRef = useRef(null);

  const location = useLocation();

  const toggleMenu = () => {
    if (menuLists) {
      setMenuLists(false);

      setTimeout(() => {
        setShowMenu(false);
      }, 700);
    } else {
      setShowMenu(true);
      setTimeout(() => {
        setMenuLists(true);
      }, 50);
    }
  };

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
    if (showCart) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scroll
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCart]);

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
  const navigate = useNavigate();
  const tooglebutton = () => {
    setCHovered(!cHovered);
  };
  const handleSearch = () => {
    navigate(`/${query}`);
    setQuerySearch(false)
  };

  return (
    <div className="flex flex-col">
      <nav>
        <div className="flex lg:justify-between md:justify-around items-center w-9/12 ml-10  ">
          <div className="md:w-[17%] md:h-[17%] lg:w-[13%] lg:h-[13%] ml-3 hidden md:flex">
            <img src={logo} alt="" />
          </div>
          <div className="border border-[#aba8a8] rounded-4xl relative justify-between   px-0.5 py-0.5 md:w-6/12 lg:w-full xl:w-8/12 mt-3  ml-5 hidden md:flex">
            <div
              ref={dialogRef}
              className="relative md:w-4/12 md:hidden lg:flex xl:w-5/12"
            >
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
            <div className="relative w-full">
              {/* input + button + search dropdown */}
              <input
                type="text"
                placeholder="Search here..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setQuerySearch(true);
                }}
                className="py-1 lg:px-1 outline-none md:px-2 ml-2 md:w-6/12 lg:w-6/12 mt-1 xl:w-7/12 text-[0.9rem] text-[#878787]  "
              />
            </div>
            {querySearch && query.trim() !== "" && (
              <div className="absolute top-full left-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  bg-[#FFFFFF] shadow-lg  max-h-96 overflow-y-auto z-50">
              <button className="absolute text-3xl cursor-pointer  top-0 right-0 " onClick={()=>setQuerySearch(false)}>&times;</button>

                {allProducts
                  .filter((item) =>
                    item.des?.toLowerCase().startsWith(query.toLowerCase())
                  )
                  .map((item) => (
                    <div className="h-56 flex mt-10 justify-center items-center">
                      <Link
                        to={`/viewDetails/${item.id}`}
                        key={item.id}
                        onClick={() => {
                          setQuery("");
                          setQuerySearch(false);
                        }}
                        className="flex flex-col gap-y-1.5 items-center px-4 py-2 gap-x-3 "
                      >
                        <div className="w-32 h-32 flex justify-center rounded-md items-center overflow-hidden">
                          <img
                            src={item.img}
                            alt=""
                            className="w-full h-full shadow-lg object-cover shadow-lg/30 rounded-md transition-transform hover:scale-110 hover:opacity-75  cursor-pointer duration-700 delay-200 ease-in-out"
                          />
                        </div>
                        <span className="text-sm w-10/12
                          text-black font-semibold text-center">
                          {item.des.split(" ").slice(0, 7).join(" ")}...
                        </span>
                        <span className="text-sm  text-red-500 font-semibold text-center">
                          {item.price}
                        </span>
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
          <div className="bg-[#861F3D] text-white w-6/12 py-1 rounded-md text-[0.8rem] absolute right-4 -top-1  px-6 font-semibold md:bg-[#FFFFFF] md:text-[#878787] md:text-[0.9rem] md:font-normal md:top-6 md:w-fit">
            <div
              onMouseEnter={() => setDHovered(true)}
              onMouseLeave={() => setDHovered(false)}
              className="relative "
            >
              <p className="flex justify-center  items-center gap-x-1 cursor-pointer">
                Download Our APP <FaAngleDown />
              </p>
              {dHovered && (
                <div className="flex-col w-44 absolute top-full -right-3 z-50 gap-y-2  py-4 text-[#878787] bg-white rounded-sm  shadow-lg  text-sm ">
                  <div className="px-3 py-3 cursor-pointer">
                    <img src={img1} alt="" />
                  </div>
                  <div className="px-3 pt-3 cursor-pointer">
                    <img src={img2} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] mt-10 md:mt-2 flex gap-x-12 w-full text-xl items-center md:bg-[#861F3D] py-2">
          <div className="text-xl flex justify-center gap-x-2 lg:gap-x-0 w-5/12 mr-8 items-center md:text-white">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative md:w-8/12 lg:w-7/12"
            >
              <span className="flex gap-x-0.5 justify-center items-center font-semibold text-[1rem] md:w-full lg:w-10/12 shadow-none md:shadow-2xl py-3 px-7  md:bg-[#70142F] cursor-pointer">
                <HiMenu
                  onClick={toggleMenu}
                  className="hover:text-[#C89AA7] text-xl transition-all delay-100 duration-300"
                />
                {showMenu && (
                  <>
                    <div
                      className={`fixed  inset-0 bg-[rgba(0,0,0,0.7)] transition-opacity duration-500 z-40 ${
                        menuLists
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    />
                    <MenuLists
                      menuLists={menuLists}
                      setMenuLists={setMenuLists}
                    />
                  </>
                )}
                <span className="hidden md:flex w-full hover:text-[#C89AA7] transition-all delay-100 duration-300">
                  Shop By Category
                </span>
              </span>

              {hovered && (
                <ul className="hidden md:flex flex-col absolute top-full left-0 z-50 gap-y-3  py-4 text-[#878787] bg-white w-64 shadow-lg text-sm ">
                  <div className="w-full flex justify-between items-center hover:bg-[#DDDDDD] cursor-pointer transition-all delay-100 duration-300 px-3">
                    <li className=" w-full py-2  border-b-[0.5px]  border-[#DDDDDD] ">
                      <Link className="w-full " to="/apple">
                        Apple
                      </Link>
                    </li>
                    <FaAngleRight />
                  </div>
                  <div className="w-full flex justify-between items-center hover:bg-[#DDDDDD] transition-all delay-100 duration-300 cursor-pointer px-3">
                    <li className=" w-full py-2  border-b-[0.5px]  border-[#DDDDDD] ">
                      <Link className="w-full " to="/computer">
                        Computer
                      </Link>
                    </li>
                    <FaAngleRight />
                  </div>
                  <div className="w-full flex justify-between items-center hover:bg-[#DDDDDD] transition-all delay-100 duration-300 cursor-pointer px-3">
                    <li className=" w-full py-2  border-b-[0.5px]  border-[#DDDDDD] ">
                      <Link className="w-full " to="/kitchen">
                        Kitchen
                      </Link>
                    </li>
                    <FaAngleRight />
                  </div>

                  <div className="w-full flex justify-between items-center hover:bg-[#DDDDDD] transition-all delay-100 duration-300 cursor-pointer px-3">
                    <li className=" w-full py-2   ">
                      <Link className="w-full " to="/watch">
                        Watch
                      </Link>
                    </li>
                    <FaAngleRight />
                  </div>
                </ul>
              )}
            </div>

            <Link
              to="/"
              className="hidden md:flex text-[1rem] hover:text-[#C89AA7] transition-all delay-100 duration-300 "
            >
              Home
            </Link>

            <img
              className="w-[50%] h-[50%]  flex md:hidden"
              onClick={() => navigate("/")}
              src={logo}
              alt=""
            />
          </div>
          <div className=" flex justify-end items-center gap-x-5  w-6/12  px-4 md:text-white">
            <Link
              to="/contact"
              className="hidden md:flex text-[1rem]  transition-all delay-100 duration-300"
            >
              Contact US{" "}
            </Link>
            <FaSearch onClick={() => setQuerySearch((prev) => !prev)}  className="md:hidden  transition-all delay-100 duration-300" />
              <div
                className={`fixed bottom-[21rem] md:hidden left-0 w-full h-[50vh] bg-white z-50 overflow-hidden
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
            {user ? (
              <div
                onMouseEnter={() => setUserHover(true)}
                onMouseLeave={() => setUserHover(false)}
              >
                <p className="flex cursor-pointer justify-center items-center gap-x-1">
                  <FaUser className=" transition-all delay-100 duration-300 cursor-pointer" />
                  <span>{user.fName}</span>
                  <FaAngleDown className="text-xs relative top-1 " />
                </p>
                {userHover && (
                  <div
                    onMouseLeave={() => setUserHover(false)}
                    className="flex flex-col   w-32 justify-center items-start  z-50  absolute  gap-y-3  py-4 text-[#878787] bg-white rounded-sm  shadow-lg  text-sm "
                  >
                    <Link className="ml-4" to="/orderhistory">
                      Order History
                    </Link>
                    <button onClick={()=>{
                      logout()
                      toast.info("LogOut Sucessfully")
                    }} className="ml-4 cursor-pointer">
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <span className="flex gap-x-0.5 justify-center items-center">
                  {" "}
                  <FaUser className=" transition-all delay-100 duration-300 cursor-pointer" />
                  <span className="hidden md:flex text-[0.9rem]  transition-all delay-100 duration-300 cursor-pointer hover:scale-x-105">
                    {" "}
                    <p>Login | Register</p>
                  </span>
                </span>
              </Link>
            )}

            <div
              className="flex justify-center items-center  relative gap-x-0.5 w-[13%] "
              onMouseEnter={() => setLHover(true)}
              onMouseLeave={() => setLHover(false)}
            >
              <div className="w-4/12 h-4/12 rounded-[50%] borer">
                <img className="w-full h-full object-contain" src={en} alt="" />
              </div>
              <div>
                <h1 className=" flex justify-center gap-x-2 text-sm items-center">
                  EN <FaAngleDown />
                </h1>
              </div>
              {lHover && (
                <div className="flex flex-col w-32 justify-center items-center  absolute top-full -right-8 z-50 gap-y-3  py-4 text-[#878787] bg-white rounded-sm  shadow-lg  text-sm ">
                  <div className="flex justify-center items-center  gap-x-2 mx-auto w-2/12 h-2/12 rounded-[50%] cursor-pointer">
                    <img src={en} alt="" className="shadow-lg" />
                    <p>English</p>
                  </div>
                  <div className="flex justify-center items-center  gap-x-2 mx-auto w-2/12 h-2/12 rounded-[50%] cursor-pointer">
                    <img src={ar} alt="" className="shadow-lg" />
                    <p>Arabic</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="relative" onClick={toggleCart}>
                <FaCartShopping className=" transition-all delay-100 duration-300 cursor-pointer" />
                <p className="absolute -top-2.5 left-3 flex justify-center items-center w-4 h-4 md:w-4 md:h-4 bg-black text-white rounded-[50%] text-[0.7rem]">
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
