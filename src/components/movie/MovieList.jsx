import React, {useEffect, useState} from 'react'
import MovieItem from './MovieItem'
import ModalPoster from './ModalPoster'
import SearchBox from './SearchBox'

function MovieList() {
  let page = 1
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com?apikey=faf7e5bb&s=${searchValue}&page=${page}`
    const response = await fetch(`${url}`)
    const data = await response.json()

    if(data.Search){
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  },[searchValue])


  // fetch data from API when loading new page
  const handleLoadMore = async () => {
    ++page
    if(page + 1 !== null|| page + 1 !== undefined){
      const url = `https://www.omdbapi.com?apikey=faf7e5bb&s=${searchValue}&page=${page}`
      const response = await fetch(`${url}`)
      const data = await response.json()
      setMovies([...movies, ...data.Search])
    }
  }

  // state for modal
  const [thumbnail,setThumbnail] = useState(null)
  const [visible,setVisible] = useState(false)
  const handleVisible = ()=> setVisible(!visible)
  

  return (
   <>
   <ModalPoster visible={visible} thumbnail={thumbnail} handleVisible={handleVisible} />
   
   <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

  <div className='grid grid-cols-4 gap-6 md:gap-12'>
    {
      movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} onModal={handleVisible} setThumbnail={setThumbnail}/>
      ))
    }
    </div>
    
    {
      searchValue.length !== 0 &&  
        <div className='flex items-center justify-center mt-16'>
        <button onClick={handleLoadMore} className='w-40 bg-gray-200 border rounded-lg py-2 transition duration-300 hover:bg-gray-300'>
        Load More
        </button>
        </div>
    }
   
   </>
  )
}

export default MovieList