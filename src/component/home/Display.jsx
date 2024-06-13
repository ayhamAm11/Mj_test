import React from 'react'

import {img} from "../../content/img"
import { content } from '../../content/text'
import { useSelector } from 'react-redux'
const Display = () => {

  const lang= useSelector(state => state.user.lang)


  return (
    <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 grid-rows-3  sm:grid-rows-2 bg-grey lato-bold-italic min-h-[50vh]'>
            <div className='max-h-[50vh] flex-center bg-move overflow-hidden  '>
                <img src={img.product1} alt="to display" className='w-full object-cover h-full'/>
            </div>
            <div className='max-h-[50vh]  flex-center  bg-gold2 px-3 sm:px-12 md:p-15 lg:p-18 flex-col gap-4'>
                <div>
                    <p className='text-center '> {content.display1[lang]}</p>
                </div>
               
            </div>
            <div className='max-h-[100vh]  row-span-2 overflow-hidden   flex-center bg-gold'>
            <img src={img.display3} className=" h-full w-full object-cover" />
            </div>
            <div className='max-h-[50vh]  flex-center  px-3 sm:px-12 md:p-15 lg:p-18 flex-col gap-3 bg-white'>
                <div>
                   <p className='text-center'>
                        {content.display2[lang]}
                   </p>
                </div>
               
            </div>
            <div className='max-h-[50vh]   flex-center  bg-move '>
            <img src={img.collection} alt="display" className='h-full w-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Display