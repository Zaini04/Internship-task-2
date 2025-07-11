import React, { useEffect, useState } from "react";
import HomeNav from "../Components/HomeNav";
import { useCart } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";

function CheckOutPage() {
  const [selectedValue, setSelectedValue] = useState("a");

  const { products } = useCart();
  const subTotal = products.reduce((total, item) => {
    return total + item.quantity * parseFloat(item.price);
  }, 0);

  const navigate = useNavigate();
  const ViewOrders = () => {
    navigate("/orderhistory");

const OrderId = `${Math.floor(Math.random() * 100000)}`;
    const date =  new Date().toLocaleDateString("en-GB")
    const newOrder = {
        id: OrderId,
        date: date,
        products: [...products],
        deleveriyFee: fees,
        totalAmount:total,
        status: "pending"

    }

    const existsOrders = JSON.parse(localStorage.getItem("orders")) || []
    const updatedOrders = [...existsOrders,newOrder]

    localStorage.setItem('orders' , JSON.stringify(updatedOrders))

    toast.success("Placed Order")
  };
  const [cod, setCOD] = useState(true);
  const [payonline, setPayOnline] = useState(false);
  const [animateCOD, setAnimateCOD] = useState(true);
  const [animatePayOnline, setAnimatePayOnline] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCashOnDelviry = () => {
    setCOD(true);
    setPayOnline(false);
  };

  const handlePayOnline = () => {
    setPayOnline(true);
    setCOD(false);
  };

  useEffect(() => {
    if (products.length <= 0) {
      navigate("/");
      toast.error("you don't have any product");
    }
  }, [products]);

  useEffect(() => {
    if (cod) {
      const timeout = setTimeout(() => setAnimateCOD(true), 30);
      return () => clearTimeout(timeout);
    } else {
      setAnimateCOD(false);
    }
  }, [cod]);

  useEffect(() => {
    if (payonline) {
      const timeout = setTimeout(() => setAnimatePayOnline(true), 30);
      return () => clearTimeout(timeout);
    } else {
      setAnimatePayOnline(false);
    }
  }, [payonline]);

  const fees = subTotal > 100 ? "00" : "20";
  const discount = subTotal > 350 ? "100" : "00";
  const total = Number(subTotal) + Number(fees) - Number(discount);

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <HomeNav />
      {products && (
        <div className="w-11/12 flex flex-col md:flex-row justify-between items-start">
          {/* left div */}
          <div className="flex flex-col w-full md:w-[55%] gap-x-2">
            <h1 className="font-bold text-2xl">Delivery Details</h1>
            <form onSubmit={ViewOrders} className="w-full mt-6 border-t border-[#CCCCCC] py-7">
              <div className="flex gap-x-4 w-full justify-between">
                <div className="flex flex-col gap-y-3 w-6/12">
                  <label className="text-[#333333] font-semibold">
                    First Name
                  </label>
                  <input required
                    type="text"
                    placeholder="First Name"
                    className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-6/12">
                  <label className="text-[#333333] font-semibold">
                    Last Name
                  </label>
                  <input required
                    type="text"
                    placeholder="Last Name"
                    className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-y-2">
                <label className="text-[#333333] font-semibold">
                  Address *
                </label>

                <div className="flex gap-x-4 w-full justify-between mt-4">
                  <div className="flex flex-col gap-y-3 w-6/12">
                    <input required
                      type="number"
                      placeholder="Zone Number"
                      className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-y-3 w-6/12">
                    <input required
                      type="number"
                      placeholder="Street Number"
                      className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-x-4 w-full justify-between mt-4">
                  <div className="flex flex-col gap-y-3 w-6/12">
                    <input required
                      type="text"
                      placeholder="Building Number"
                      className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-y-3 w-6/12">
                    <input required
                      type="text"
                      placeholder="Unit Number"
                      className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-3 w-full mt-3">
                  <input 
                    type="text"
                    placeholder="Optional (any special notes for delivery)"
                    className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-full mt-3">
                  <label className="text-[#333333] font-semibold">Phone*</label>
                  <input required
                    type="text"
                    placeholder="Phone Number"
                    className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-y-3 w-full mt-3">
                  <label className="text-[#333333] font-semibold">Email*</label>
                  <input required
                    type="text"
                    placeholder="Email"
                    className="border border-[#CCCCCC] outline-none px-3 text-[#878787] py-2 w-full"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* right div */}
          <div className="bg-[#F5F5F5] rounded-lg flex justify-center items-center flex-col w-full md:w-[40%]">
            <div className="w-11/12 flex flex-col mt-5">
              <h1 className="font-bold text-2xl">Order Details</h1>
              <div className="w-full flex justify-between items-center pt-4 mt-4 border-t border-[#CCCCCC]">
                <h1 className="text-[#333333] font-semibold">Product</h1>
                <h1 className="text-[#333333] font-semibold">SubTotal</h1>
              </div>
              <div className="flex flex-col">
                {products.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex justify-between items-center mt-4"
                  >
                    <h1 className="text-[#333333] text-sm w-7/12">
                      {item.des} *{" "}
                      <span className="font-bold">{item.quantity}</span>
                    </h1>
                    <h1 className="text-[#333333] text-sm">QAR {item.price}</h1>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-between items-center mt-5">
                <h1 className="text-[#333333] font-semibold">SubTotal</h1>
                <h1 className="text-[#333333] text-sm">QAR {subTotal}</h1>
              </div>
              <div className="w-full flex justify-between items-center mt-5">
                <h1 className="text-[#333333] font-semibold">Delivery Fee</h1>
                <h1 className="text-[#333333] text-sm">QAR {fees}</h1>
              </div>
              <div className="w-full flex justify-between items-center mt-5">
                <h1 className="text-[#333333] font-semibold">Discount</h1>
                <h1 className="text-[#333333] text-sm">QAR {discount}</h1>
              </div>
              <div className="w-full flex justify-between items-center mt-5 mb-4 border-b-2 pb-4 border-[#d1d5db]">
                <h1 className="text-[#333333] font-semibold">Total</h1>
                <h1 className="text-[#333333] text-sm">QAR {total}</h1>
              </div>
            </div>

            <div className="flex flex-col w-full mb-4">
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* COD */}
                <div className="flex flex-col gap-y-2 w-full justify-center items-center">
                  <div
                    onClick={handleCashOnDelviry}
                    className="flex w-11/12 gap-x-3 justify-center items-center"
                  >
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      slotProps={{ input: { "aria-label": "A" } }}
                    />
                    <label className="w-full font-semibold text-sm">
                      Cash On Delivery
                    </label>
                  </div>
                  {cod && (
                    <p
                      className={`w-10/12 p-3 text-sm  bg-[#ECECEC] transition-all duration-500  ease-in-out transform
                        ${
                          animateCOD
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-5 opacity-0"
                        }
                      `}
                    >
                      Fast - Same Day Delivery
                    </p>
                  )}
                </div>

                {/* Pay Online */}
                <div className="flex flex-col gap-y-2 w-full justify-center items-center">
                  <div
                    onClick={handlePayOnline}
                    className="flex w-11/12 gap-x-3 justify-center items-center"
                  >
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      slotProps={{ input: { "aria-label": "B" } }}
                    />
                    <label className="w-full font-semibold text-sm">
                      Pay Online
                    </label>
                  </div>
                  {payonline && (
                    <p
                      className={`w-10/12 p-3 bg-[#ECECEC] text-sm transition-all duration-1000 ease-in-out transform
                        ${
                          animatePayOnline
                            ? "translate-y-0 opacity-100"
                            : "translate-y-5 opacity-0"
                        }
                      `}
                    >
                      Pay with Visa, Master, Apple Pay, Google Pay ..etc
                    </p>
                  )}
                </div>
              </Box>
            </div>
            <div className="w-11/12 flex flex-col mt-4 mb-6 justify-center items-start">
              <p className="w-11/12 mb-2">
                Online payment transaction is processed securly through
                Myfatoorah payment gateway. Privacy Policy.
              </p>
              <div className="w-11/12 flex gap-x-2 mt-4">
                <input type="checkbox" />
                <p> I agree to the Terms & Conditions & Privacy Policy *</p>
              </div>
              <button
                onClick={ViewOrders}
                className="w-7/12 md:w-6/12 lg:w-4/12 text-[1.1rem]  font-bold text-white   cursor-pointer hover:opacity-85 transition-opacity duration-500 delay-100 ease-in-out bg-[#861F3D] rounded-4xl py-3 mt-7 pb-4 mb-4 "
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOutPage;
