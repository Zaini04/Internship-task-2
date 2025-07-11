import React from "react";
import AccordionIndicator from "./AccordionIndicator";
import badgeImage from "../assets/Images/badge-success.svg";
import logo from '../assets/Images/logo.png'
import {
  Email,
  Facebook,
  Home,
  Instagram,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-12 flex w-full flex-col overflow-x-hidden ">
      <div className="w-full bg-[#F6F6F8] flex flex-col justify-around gap-y-5 items-center  pt-8">
        <div className=" flex flex-col md:justify-center md:items-center w-full ">
          <div className="md:hidden  mb-10">
            <AccordionIndicator className="w-full" />
          </div>
          <div className="hidden md:flex md:justify-center   md:gap-x-20 md:w-10/12 ">
            <div className="w-full">
                <div className="w-32 h-10">
                <img src={logo} alt="" />

                </div>
              <ul className="flex flex-col justify-center text-[#878787]  gap-y-2 items-start mt-3">
                <li className="flex gap-x-2 mb-1.5  justify-start   items-center">
                  <Home className="text-blue-400" />
                  62 Street, Wakra, Qatar
                </li>
                <li className="flex gap-x-2 mb-1.5    items-start">
                  <Phone className="text-blue-400" />
                  +974 33306077
                </li>
                <li className="flex gap-x-2  mb-1.5   items-center">
                  <Email className="text-blue-400" />
                  info@gareyqatar.com
                </li>
                <div className="flex mb-1.5 gap-x-6">
                  <Facebook className="text-blue-600  transform hover:-mt-1 transition ease-in-out duration-200 delay-100" />
                  <Instagram className="text-[#A74E9B] transform hover:-mt-1 transition ease-in-out duration-200 delay-100" />
                  <WhatsApp className="text-green-600 transform hover:-mt-1 transition ease-in-out duration-200 delay-100" />
                </div>
              </ul>
            </div >
            <div className="w-full">
              <h1 className="font-semibold  text-xl">Categories</h1>
              <ul className="flex flex-col text-[#878787] mt-3 gap-y-2">
                <Link to='/apple' className="hover:text-red-950 transition-all">Apple</Link>
                <Link to='/computer' className="hover:text-red-950 transition-all">Computer</Link>
                <Link to='/kitchen' className="hover:text-red-950 transition-all">Kitchen Gadgets</Link>
                <Link to='/watch' className="hover:text-red-950 transition-all">Wacth</Link>
 
              </ul>
            </div>
            <div className="w-full">
              <h1 className="font-semibold  text-xl">Information</h1>
              <ul className="flex flex-col text-[#878787] mt-3 gap-y-2">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>RefundPolicy</li>
              </ul>
            </div>
            <div className="w-full">
              <h1 className="font-semibold  text-xl">Usefull Links</h1>
              <ul className="flex flex-col text-[#878787] mt-3 gap-y-2">
                <li>My Orders</li>
                <li>Sitemap</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-40 h-20  mx-auto">
          <img src={badgeImage} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 mb-4 ">
        <p className="w-10/12 text-[#878787] text-center">
          Copy rigth 2025 Gray Traiding Company in Qatar, Cr.132476 all rights
          are reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
