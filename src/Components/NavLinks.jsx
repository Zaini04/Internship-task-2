import React from 'react'
import { Link } from 'react-router-dom'


function NavLinks() {
  return (
    <div className=' flex-col hidden lg:flex'>

    <div className='flex justify-center font-semibold items-center py-4 px-2 gap-x-16 mt-10'>
        
        <Link className='px-7 py-2 border border-black transition-all delay-100 duration-200 ease-in-out hover:shadow-lg/30 rounded-4xl' to='/bestsales'>Best Sales</Link>
        <Link className='px-7 py-2 border border-black transition-all delay-100 duration-200 ease-in-out hover:shadow-lg/30 rounded-4xl' to='/apple'>Apple</Link>
        <Link className='px-7 py-2 border border-black transition-all delay-100 duration-200 ease-in-out hover:shadow-lg/30 rounded-4xl' to='/computer'>Computer</Link>
        <Link className='px-7 py-2 border border-black transition-all delay-100 duration-200 ease-in-out hover:shadow-lg/30 rounded-4xl' to='/kitchen'>Kitchen</Link>
        <Link className='px-7 py-2 border border-black transition-all delay-100 duration-200 ease-in-out hover:shadow-lg/30 rounded-4xl' to='/watch'>Watch</Link>
        

    </div>
    </div>
  )
}

export default NavLinks