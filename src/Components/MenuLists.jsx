import React, { useState } from "react";
import {
  FaAngleRight,
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Email } from "@mui/icons-material";
import { toast } from "react-toastify";

function MenuLists({ menuLists, setMenuLists }) {
  const [categories, setCategories] = useState(true);
  const { user, logout } = useAuth();
  const [menu, setMenu] = useState(false);

  const logoutHandle = ()=>{
    setMenuLists(false)
     logout();
     toast.info("LogOut Successfull")
  }
  return (
    <div
      className={`fixed top-0 left-0 text-4xl text-[#2E2E2E] bg-white 
        transition-transform transform duration-700 ease-in-out 
        ${menuLists ? "translate-x-0" : "-translate-x-full"} 
        md:hidden flex flex-col  justify-start items-center 
        w-[75%] sm:w-[50%] md:w-[40%] lg:w-[26.5%] h-full z-50`}
    >
      <div className="w-full bg-[#F5F5F5]  flex text-sm justify-between items-center  ">
        <button
          className={`relative w-full py-4 uppercase text-xs transition-all duration-300 delay-100 ease-in-out ${
            categories ? "bg-[#E9E9E9] " : ""
          }`}
          onClick={() => {
            setCategories(true);
            setMenu(false);
          }}
        >
          Categories
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-red-800 transition-all duration-500 ease-in-out origin-left ${
              categories ? "w-full" : "w-0"
            }`}
          ></span>
        </button>

        <button
          className={`relative w-full py-4 uppercase text-xs transition-all duration-300 delay-100 ease-in-out ${
            menu ? "bg-[#E9E9E9] " : ""
          }`}
          onClick={() => {
            setCategories(false);
            setMenu(true);
            setMenuLists(true);
          }}
        >
          Menu
          <span
            className={`absolute right-0 bottom-0 h-[2px] bg-red-800 transition-all duration-500 ease-in-out origin-left ${
              menu ? "w-full" : "w-0"
            }`}
          ></span>
        </button>

        {menuLists && (
          <button
            className="absolute -right-12 bg-[#222222] flex justify-center items-center px-3 py-2 text-4xl text-white"
            onClick={() => setMenuLists(false)}
          >
            &times;
          </button>
        )}
      </div>
      {categories ? (
        <div className="flex flex-col mt-2 gap-y-7 transition-all ease-in-out delay-100 duration-1000 w-full text-[#2E2E2E] font-normal items-start  text-base  ">
          <ul className="w-full">
            <Link className="w-full " to="/apple" onClick={()=>setMenuLists(false)}>
              <div className="w-full border-b-[0.5px]  border-[#DDDDDD] flex justify-between items-center hover:bg-[#DDDDDD] cursor-pointer transition-all delay-100 duration-300 px-3">
                <li className=" w-full py-3  ">Apple</li>
                <FaAngleRight />
              </div>
            </Link>
            <Link className="w-full " to="/computer" onClick={()=>setMenuLists(false)}>
              <div className="w-full flex border-b-[0.5px]  border-[#DDDDDD] justify-between items-center hover:bg-[#DDDDDD] transition-all delay-100 duration-300 cursor-pointer px-3">
                <li className=" w-full py-3   ">Computer</li>
                <FaAngleRight />
              </div>
            </Link>
            <Link className="w-full " to="/kitchen" onClick={()=>setMenuLists(false)}>
              <div className="w-full flex  border-b-[0.5px]  border-[#DDDDDD] justify-between items-center hover:bg-[#DDDDDD] transition-all delay-100 duration-300 cursor-pointer px-3">
                <li className=" w-full py-3  ">Kitchen</li>
                <FaAngleRight />
              </div>
            </Link>

            <Link className="w-full " to="/watch" onClick={()=>setMenuLists(false)}>
              <div className="w-full flex justify-between items-center hover:bg-[#DDDDDD] transition-all delay-100 duration-300 cursor-pointer px-3">
                <li className=" w-full py-3   ">Watch</li>
                <FaAngleRight />
              </div>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col transition-all ease-in-out delay-100 duration-1000  gap-y-7 mt-2 w-full text-[#2E2E2E] font-normal items-start  text-base  ">
          <ul className="w-full">
            {user ? (
              <button
                onClick={logoutHandle }
                className="border-b-[0.5px] flex px-4 py-4 w-full border-[#DDDDDD]  cursor-pointer"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login" onClick={()=>setMenuLists(false)}
                className="w-full flex gap-x-2 items-center px-4 py-4 border-b-[0.5px]  border-[#DDDDDD] "
              >
                {" "}
                <FaUser className=" transition-all delay-100 duration-300 cursor-pointer" />
                <p>Login | Register</p>
              </Link>
            )}
            <div
              className="w-full px-4 py-4 flex flex-col justify-center items-start border-b-[0.5px]  border-[#DDDDDD] 
            "
            >
              <p className="w-full">Need help?</p>
              <div
                className="w-full text-[#878787]
             flex gap-x-4 mt-2 items-center"
              >
                <FaPhone />
                <p>+97433306077</p>
              </div>
              <div
                className="w-full text-[#878787]
             flex gap-x-4 mt-2 items-center"
              >
                <Email />
                <p>info@gareyqatar.com</p>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuLists;
