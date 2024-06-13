import React from 'react'
import { services } from '../../content'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const Services = () => {
  const lang= useSelector(state => state.user.lang)

  return (
    <section id='services' className='p-6 sm:p-12 pb-[20px] bg-grey min-h-[80vh] flex items-center'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 md:px-20'>
          {
            services.map((item , index)=>{
              return( 
              <motion.div 
              initial={{y : 200 , opacity:0 , scale: 0.6}}
              whileInView={{y : 0 , opacity:1 , scale: 1}}
              transition={{duration: 0.4 , delay: 0.1 * index}}
              key={index} 
              className={`flex flex-col items-center lato-regular-italic  gap-3 p-6 border-b-4 border-move   sm:border-r-4 sm:border-b-0 `}>
                <h1 className='text-center w-full text-move2 text-3xl font-bold '>{item.title}</h1>
                <p className=' w-[50%] sm:w-[80%] text-center text-sm font-semibold'>{item.dis[lang]}</p>
              </motion.div>)
})
          }
        </div>
    </section>
  )
}

export default Services