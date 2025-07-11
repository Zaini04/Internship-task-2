import * as React from "react";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";

import { Link, useNavigate } from "react-router-dom";

import googleImage from "../assets/Images/google.png";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Login() {
  const [selectedValue, setSelectedValue] = React.useState("a");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const {Login} = useAuth()

    const navigate = useNavigate()
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleLogin = (e) => {
  e.preventDefault();

  const loginResult = Login({ email, phone, password });

  if (loginResult.success) {
    toast.success("Login Successfully");
    navigate("/");
    
  } else {
    toast.error("Credentials did not match");
  }
};


  return (
    <div className="flex justify-center items-center  mx-auto w-10/12 md:w-full mt-5">
      <form onSubmit={handleLogin} className="w-full sm:w-9/12 md:w-8/12 flex flex-col gap-y-2 justify-center items-center py-8 pb-10 lg:w-6/12 shadow-2xl rounded-3xl">
        <h1 className="font-bold text-xl w-10/12">Login</h1>
        <div className="flex justify-center items-center w-7/12 ml-3 mt-5">
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              justifyContent: "Center",
              alignItems: "center",
            }}
          >
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "A" } }}
            />
            <label className="w-4/12 ml-3 sm:ml-0" htmlFor="">
              Email
            </label>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              slotProps={{ input: { "aria-label": "B" } }}
            />
            <label className="w-4/12 ml-3 sm:ml-0" htmlFor="">
              Phone
            </label>
          </Box>
        </div>
        {selectedValue === "a" ? (
          <div className="w-full space-y-3">
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Email *
              </label>
              <input
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="text" onChange={(e)=>setEmail(e.target.value)} required
              />
            </div>
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Password *
              </label>
              <input
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="password" onChange={(e)=>setPassword(e.target.value)} required
              />
            </div>
          </div>
        ) : (
          <div className="w-full space-y-3">
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Phone *
              </label>
              <input
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="text" onChange={(e)=>setPhone(e.target.value)} required
              />
            </div>
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Password *
              </label>
              <input
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="password" onChange={(e)=>setPassword(e.target.value)} required
              />
            </div>
          </div>
        )}
        <div className="w-10/12">
          <a href="#">Forget Password</a>
        </div>
        <div className="w-10/12">
          <button type="submit" className="border-2 border-black cursor-pointer mt-5 rounded-3xl px-4 py-1">
            Login
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-8">
          <p>Continue with Google</p>
          <img className="w-10 h-10 cursor-pointer" src={googleImage} alt="" />
          <p>
            <span className="flex gap-x-4">
              Not Registered{" "}
              <Link className="hover:text-red-950" to="/register">
                Join Now
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
