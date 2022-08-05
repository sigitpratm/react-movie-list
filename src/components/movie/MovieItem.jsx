import React from 'react'
import { Link } from 'react-router-dom'

function MovieItem(props) {
  let { setThumbnail, onModal } = props

  const handleClick =  () => {
    const propsPoster = props.movie.Poster
    setThumbnail(propsPoster)
    onModal()
  }
  
  return (
    <div className='col-span-2 md:col-span-1 xl:h-[28rem] 2xl:h-[30rem] bg-gray-200 rounded-xl relative overflow-hidden'>
      <button onClick={handleClick} className='w-full xl:h-[28rem] 2xl:h-[30rem]'>
      <img src={props.movie.Poster} alt="banner-movie" className='w-full h-full object-cover transition duration-300 hover:scale-105' />
      </button>

      <div className='info-movie w-full h-auto md:h-44 absolute bottom-0 left-0'>
        <div className='w-full h-full p-3 md:p-6 flex justify-between items-start flex-col'>
          
          <div className='space-y-1'>
            <p className='text-sm md:text-xl font-medium text-white'>
              {props.movie.Title}
            </p>
            <p className='text-white text-xs md:text-base'>
              {props.movie.Year}
            </p>
          </div>
          
          <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2'>
            <Link to={{
              pathname: `/single-movie/${props.movie.imdbID}`,
              state: {
                id: props.movie.imdbID,
                data: props.movie.Title
              }
            }}
            className='order-2 md:order-1 bg-[#16C79A] w-full md:w-auto text-xs md:text-base rounded-full px-0 md:px-12 py-2 text-white transition duration-300 hover:bg-[#15a883]'>
              See Detail
            </Link>

            <p className='order-1 md:order-2 text-white text-sm md:text-base capitalize'>
              {props.movie.Type}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

MovieItem.defaultProps = {
  setThumbnail: ()=> {
    console.log('thumbnailnya')
  },
  onModal: ()=> {
    console.log('onModal')
  }
}

export default MovieItem
