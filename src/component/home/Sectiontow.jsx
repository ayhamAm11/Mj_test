import React from 'react'
import Img from './Img'
import { motion } from 'framer-motion'
import { content } from '../../content/text'
import section2  from '../../assets/section2.jpg'
import { useSelector } from 'react-redux'


const Sectiontow = () => {
  const lang= useSelector(state => state.user.lang)

  return (
    <motion.section 
    initial={{ scale: 0.6, y: -100, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    className='flex flex-col sm:flex-row gap-5 min-h-[100vh] mt-10 items-center justify-start lato-bold-italic'>
     
      <motion.div 
        className='flex justify-center w-full sm:w-auto sm:flex-1 '
      >
        <Img src={section2} />
      </motion.div>
      <div className=' w-full sm:w-auto sm:flex-[2] pt-[100px] sm:pt-auto p-6 sm:p-12 flex items-end'>
        <motion.div 
        >
          <h1 className='text-gold text-3xl mb-6'>{content.section2.title[lang]} </h1>
          <div className='flex flex-col  gap-5 '>
            <p>
              {content.section2[lang]}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Sectiontow