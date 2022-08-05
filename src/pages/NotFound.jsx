import React from 'react'

function NotFound() {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center gap-6 flex-col text-gray-300 text-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <p className='text-3xl'>
        Page Not Found
      </p>
      
      </div>
      </div>
    </div>
  )
}

export default NotFound