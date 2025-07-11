import React from "react";

import {  FaClock, } from "react-icons/fa";
import {  Email, Home, Phone, WhatsApp } from "@mui/icons-material";

function Contact() {
  return (
    <div className="flex justify-center items-center">
    <div className="flex flex-col w-11/12 md:w-9/12 lg:w-5/12 justify-center items-start mt-10 gap-y-4">
      <h1 className="text-3xl font-semibold uppercase">Contact Information</h1>
      <p className="w-full">
        We love to hear from you on our customer service, merchandise, website
        or any topics you want to share with us. Your comments and suggestions
        will be appreciated.
      </p>
      <ul className="flex flex-col justify-center gap-y-2 items-start">
        <li className="flex gap-x-2  justify-start   items-center"><Home className="text-blue-400"/>62 Street, Wakra, Qatar</li>
        <li className="flex gap-x-2    items-start"><Phone className="text-blue-400" />+974 33306077</li>
        <li className="flex gap-x-2     items-center"><Email className="text-blue-400" />info@gareyqatar.com</li>
        <li className="flex gap-x-2     items-center"><FaClock  className="text-xl text-blue-400"/>Everyday 10:00 am to 10:00 pm</li>
        <li className="flex gap-x-2    items-center"><WhatsApp className="text-green-500"/>+974 33306077</li>
      </ul>
    </div>
    </div>
  );
}

export default Contact;
