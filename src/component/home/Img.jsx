import React from 'react'
import {img} from '../../content/img'

const Img = ({src}) => {
  return (
    <div className="relative flex-center h-[400px] w-[300px]   ">
    <div className="h-[400px] w-[300px]  absolute z-10 transform  translate-x-12 -translate-y-12">
      <img src={img.pattern} className='h-full object-cover rounded-2xl' alt="" srcset="" />
    </div>
    <div className="h-[400px] w-[300px] bg-gold absolute z-20 transform rounded-xl ">
    <img src={src} alt="section img" className='rounded-xl object-cover object-center'  />
    </div>
  </div>

  )
}

export default Img
{/* <div className='relative h-[100%] w-full p-10 '>
      <div className='h-[300px] w-[200px] bg-move absolute left-[100px] top-0 z-10 transform translate-y-1/2  translate-x-1/2 '></div>
      <div className='h-[300px] w-[200px] bg-gold absolute z-20  transform translate-y-1/2  translate-x-1/2'></div>
    </div> */}