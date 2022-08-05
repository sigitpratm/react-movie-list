import React from 'react'
import MovieList from '../components/movie/MovieList'

function Home() {
  return (
    <div className="h-full pb-12 pt-48 md:pt-32 relative">
      <MovieList />

      <a href='#search-box' className='fixed right-[4%] bottom-[4%] w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </a>
    </div>
  )
}

export default Home
