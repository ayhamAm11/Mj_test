import React from 'react'
import { video } from '../../content/video'
import { img } from '../../content/img'
function VideoSection() {
  return (
    <div className='flex justify-center items-center h-[100vh] relative'>
        <div className='absolute inset-0 w-full h-full bg-black/35 z-20'></div>
        <img src={img.bgVideo} alt="" srcset="" className='absolute inset-0 w-full h-full object-cover z-10' />
        <video className='w-4/5 h-4/5 z-30' controls src={video.v1}></video>
    </div>
  )
}

export default VideoSection