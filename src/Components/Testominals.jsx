import React from 'react'
import TestominialCarousol from './TestominialCarousol'
import supportImage from '../assets/Images/suport.jpg'
import deleverImage from '../assets/Images/arrowa.png'
import userImage from '../assets/Images/user1.png'

function Testominals() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className="font-bold flex gap-x-7 justify-center items-center text-[1rem] sm:text-xl text-[#222222] mt-16 w-full md:text-2xl ">
          <span>______</span>Testominials <span>______</span>
        </h1>
        <p className='text-[#878787]'>What our clients says</p>
        </div>
        <div>
            <TestominialCarousol/>
        </div>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-y-3 justify-start md:justify-between w-full mt-4 py-8'>
            <div className='flex justify-center items-center w-full md:w-4/12 gap-x-6'>
                <div className='w-[12%]'>
                    <img  src={supportImage} alt="" />
                </div>
                <div className='flex  flex-col w-8/12 '>
                    <h1 className='font-semibold'>Customer Support</h1>
                    <p className='text-[#878787]' >We are here to Support</p>
                </div>
            </div>
            <div className='flex justify-center  items-center w-full md:w-4/12 gap-x-6'>
                <div className='w-[12%]'>
                    <img  src={deleverImage} alt="" />
                </div>
                <div className=' flex flex-col w-8/12'>
                    <h1 className='font-semibold'>Delivery in 24hrs</h1>
                    <p className='text-[#878787]' >Delivery anywhere in Qatar</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-full md:w-4/12 gap-x-6'>
                <div className='w-[12%]'>
                    <img  src={userImage} alt="" />
                </div>
                <div className='flex flex-col  w-8/12'>
                    <h1 className='font-semibold'>Cash on Delivery</h1>
                    <p className='text-[#878787]' >Pay when you receive your order</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testominals