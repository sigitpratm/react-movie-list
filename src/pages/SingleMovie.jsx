import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

function SingleMovie() {
  const { id } = useParams()
  const [dataMovie, setDataMovie] = useState({})

  const fetchData = async () => {
    const url = `http://www.omdbapi.com?apikey=faf7e5bb&i=${id}`
    const response = await fetch(`${url}`)
    const data = await response.json()
    setDataMovie(data)
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full h-full min-h-screen pt-32'>
      <div className="grid grid-cols-12 gap-8 mx-auto max-w-6xl">

        <div className="order-2 md:order-1 col-span-12 md:col-span-4 space-y-8">
          <div className='shadow-md'>
            <div className='bg-[#19456B] p-2 rounded-t-md'>
            <p className='text-white'>Details</p>
          </div>

            <div className='p-4 text-sm space-y-2'>
              <p>Title : {dataMovie.Title}</p>
              <p>Type: {dataMovie.Type}</p>
              <p>Year: {dataMovie.Year}</p>
              <p>Released: {dataMovie.Released}</p>
              <p>Runtime: {dataMovie.Runtime}</p>
              <p>Genre: {dataMovie.Genre}</p>
            </div>
          </div>

          <div className='shadow-md'>
            <div className='bg-[#19456B] p-2 rounded-t-md'>
              <p className='text-white'>Statistics</p>
            </div>

            <div className='p-4 text-sm space-y-2'>
              <p>imdbRating: {dataMovie.imdbRating}</p>
              <p>imdbVotes: {dataMovie.imdbVotes}</p>
              <p>Metascore: {dataMovie.Metascore}</p>
            </div>
          </div>
        </div>


        <div className="order-1 md:order-2 col-span-12 md:col-span-8">
          <div className='w-full shadow-md border rounded-t-md'>
            <div className='p-4 border-b bg-[#19456B] rounded-t-md'>
              <p className='text-xl md:text-3xl font-medium text-white'>{dataMovie.Title}</p>
            </div>

            <div className='p-6 flex flex-col md:flex-row items-start justify-center gap-8'>
              <div className='w-full md:w-96 h-auto md:h-[22.5rem] bg-gray-100'>
                <img src={dataMovie.Poster} alt="" 
                className='w-full h-full object-cover'/>
              </div>

              <div className='w-full'>
                <div className='flex items-start border-b pb-4 mb-4 gap-4'>
                  <div className='w-16 h-16 bg-orange-500 flex items-center justify-center'>
                    <p className='text-white text-xl'>
                      {dataMovie.imdbRating}
                    </p>
                  </div>

                  <div className='text-xs space-y-1'>
                    <p className='tracking-wider'>Metascore: {dataMovie.Metascore}</p>
                    <p className='tracking-wider'>imdbRating: {dataMovie.imdbRating}</p>
                    <p className='tracking-wider'>imdbVotes: {dataMovie.imdbVotes}</p>
                  </div>

                </div>

                <div>
                  <p>{dataMovie.Plot}</p>
                </div>

              </div>
            </div>

            <div className='px-6 pb-8'>
                <div className='space-y-1'>
                  <p>Genre: {dataMovie.Genre}</p>
                  <p>Actors: {dataMovie.Actors}</p>
                  <p>BoxOffice: {dataMovie.BoxOffice}</p>
                  <p>Country: {dataMovie.Country}</p>
                  <p>DVD: {dataMovie.DVD}</p>
                  <p>Director: {dataMovie.Director}</p>
                  <p>Language: {dataMovie.Language}</p>
                </div>
            </div>


          </div>
        </div>

      </div>
  </div>
  )
}

export default SingleMovie