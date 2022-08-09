import React from 'react'
import {Link} from 'react-router-dom'

function navbar() {
  return (
    <div className='w-full h-auto md:h-20 bg-[#19456B] p-4 md:py-0 z-50 fixed'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-between container mx-auto gap-4'>
        <div>
          <Link to='/' className='flex items-center justify-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <span className='text-white text-2xl'>Movie List</span>
          </Link>
        </div>

        <div className='w-full md:w-auto flex flex-col md:flex-row items-center justify-start gap-2 md:gap-8 text-white'>
          <div className='flex items-center justify-start gap-8'>
            <Link to='/' >HOME</Link>
            <Link to='/about' >ABOUT</Link>
          </div>
        </div>
  </div>
</div>
  )
}

export default navbar
