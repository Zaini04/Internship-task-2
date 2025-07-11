import React from 'react'
import Navbar from '../Components/Navbar'
import Carousol from '../Components/Carousol'
import Apple from './Apple'
import Computer from './Computer'
import Kitchen from './Kitchen'
import Watch from './Watch'
import NavLinks from '../Components/NavLinks'
import ProductsCard from '../Components/ProductsCard'
import Testominals from '../Components/Testominals'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
         <div className="flex flex-col ">
        <Carousol />
        <h1 className="font-bold flex gap-x-7 justify-center items-center text-[1rem] sm:text-xl text-[#222222] mt-16 w-full md:text-2xl ">
          <span>______</span>Upgrade Your Life Style <span>______</span>
        </h1>
        <NavLinks />
      </div>
        <ProductsCard />
        <Testominals/>
    </div>
  )
}

export default Home