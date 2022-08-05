import React from 'react'

function ModalPoster(props) {
  let { thumbnail, visible, handleVisible } = props

  return visible && (
    <div className='w-full h-screen fixed top-0  left-0 bg-black/50 z-[100]'>
      <div className='w-full h-full flex justify-center items-start relative'>
        <div className='w-auto h-auto p-8 bg-white fixed top-12 rounded-xl'>

          <div className='flex items-end justify-end pb-4'>
            <button className='' onClick={handleVisible}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {
            thumbnail && (
              <img src={thumbnail} alt="poster-movie" className='w-[28rem] h-auto object-contain shadow-lg' />
            )
          }
          
        </div>
      </div>
    </div>
  )
}
ModalPoster.defaultProps = {
  thumbnail: null,
  visible: false,
  handleVisible: ()=> {
    console.log("handleVisible is Required!")
  }
}
export default ModalPoster