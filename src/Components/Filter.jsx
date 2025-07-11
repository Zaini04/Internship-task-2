import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';


function Filter() {
  return (
 <div className=" hidden w-5/12 md:flex flex-col px-4">
          
          <div className=" w-full flex flex-col">
            <h1 className="font-bold text-xl ">Product Category</h1>
            <div className=" w-full flex flex-col">
              <ul className="flex-col w-full  gap-y-3  py-4 text-[#878787] bg-white   text-sm ">
                <div className="w-full flex justify-between items-center hover:text-[#70142F] cursor-pointer transition-all delay-100 duration-300 px-3">
                  <li className=" w-full py-2   ">
                    <Link className="w-full " to="/apple">
                      Apple
                    </Link>
                  </li>
                  <FaPlus />
                </div>
                <div className="w-full flex justify-between items-center hover:text-[#70142F] transition-all delay-100 duration-300 cursor-pointer px-3">
                  <li className=" w-full py-2   ">
                    <Link className="w-full " to="/computer">
                      Computer
                    </Link>
                  </li>
                  <FaPlus />
                </div>
                <div className="w-full flex justify-between items-center hover:text-[#70142F] transition-all delay-100 duration-300 cursor-pointer px-3">
                  <li className=" w-full py-2   ">
                    <Link className="w-full " to="/kitchen">
                      Kitchen
                    </Link>
                  </li>
                  <FaPlus />
                </div>

                <div className="w-full flex justify-between items-center hover:text-[#70142F] transition-all delay-100 duration-300 cursor-pointer px-3">
                  <li className=" w-full py-2   ">
                    <Link className="w-full " to="/watch">
                      Watch
                    </Link>
                  </li>
                  <FaPlus />
                </div>
              </ul>
            </div>
          </div>
        </div>  )
}

export default Filter