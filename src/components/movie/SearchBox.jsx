import React from 'react'

function SearchBox(props) {
  
  return (
    <div id='search-box' className='mb-12 max-w-2xl mx-auto'>
        <input className='w-full border-2 rounded-lg py-4 px-4 text-base text-gray-600 border-[#19456B]' placeholder='search movie' 
        type="text"
        name="text"
        value={props.value}
        onChange={(e)=>props.setSearchValue(e.target.value)}
        />
    </div>
  )
}

export default SearchBox
