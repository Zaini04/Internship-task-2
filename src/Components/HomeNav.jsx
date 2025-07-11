import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function HomeNav() {
    const location = useLocation()
    const pageName = location.pathname.split("/").filter(Boolean).pop();  // -> "apple"

  return (
    <div className='bg-[#F6F6F8] w-full items-center justify-start py-5 mb-6 overflow-x-hidden '>
            <p className='ml-8 w-full text-sm '> <Link to='/' className=' hover:text-[#AA3D3D] transition-all delay-100 duration-300 cursor-pointer'>Home</Link > {pageName.length > 0 && '>' } <Link className='cursor-pointer text-[#878787] hover:text-[#AA3D3D] transition-all delay-100 duration-300'>{pageName}</Link></p>
    </div>
  )
}

export default HomeNav