import React, { useState } from "react";
import googleImage from "../assets/Images/google.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");

  const {signUp} = useAuth()

const handleUser = async (e) => {
  e.preventDefault();

  try {
    const result = await signUp({ email, phone, password, fName, lName });
    console.log("Signed up user:", { email, phone, password, fName, lName });

    if (result?.success) {
      toast.success("Registered Successfully");

      // ✅ Clear input fields after success
      setEmail("");
      setPassword("");
      setPhone("");
      setFName("");
      setLName("");
    } else {
      toast.error(result?.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Registration Error:", error);
    toast.error("An unexpected error occurred.");
  }
};

  return (
    <div>
      <div className="flex justify-center items-center  mx-auto w-10/12 md:w-full mt-5">
        <form onSubmit={handleUser} className="w-full sm:w-9/12 md:w-8/12 flex flex-col gap-y-2 justify-center items-center py-8 pb-10 lg:w-6/12 shadow-2xl rounded-3xl">
          <h1 className="font-bold text-xl w-10/12">Register</h1>

          <div className="w-full space-y-3">
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                First Name *
              </label>
              <input value={fName}
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="text" onChange={(e)=>setFName(e.target.value)} required
              />
            </div>
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Last Name *
              </label>
              <input value={lName}
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="text" onChange={(e)=>setLName(e.target.value)} required
              />
            </div>
          </div>
          <div className="w-full space-y-3">
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Phone *
              </label>
              <input value={phone}
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="number" onChange={(e)=>setPhone(e.target.value)} required
              />
            </div>
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Email *
              </label>
              <input value={email}
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="email" onChange={(e)=>setEmail(e.target.value)} required
              />
            </div>
            <div className="w-full flex flex-col gap-y-1.5 justify-center items-center">
              <label className="w-10/12" htmlFor="">
                Password *
              </label>
              <input value={password}
                className="w-10/12 border outline-none py-2.5 px-2 border-[#878787] "
                type="password" onChange={(e)=>setPassword(e.target.value)} required
              />
            </div>
          </div>
          <div className="w-10/12 flex gap-x-2">
            <input type="checkbox" required/>
            <p> I agree to the Terms & Conditions & Privacy Policy *</p>
          </div>
          <div className="w-10/12">
            <button type="submit" className="border-2 border-black cursor-pointer mt-5 rounded-3xl px-4 py-1">
              Register
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-8">
            <p>Continue with Google</p>
            <img
              className="w-10 h-10 cursor-pointer"
              src={googleImage}
              alt=""
            />
            <p>
              <span className="flex gap-x-4">
                Already Registered ?{" "}
                <Link className="hover:text-red-950" to="/login">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
