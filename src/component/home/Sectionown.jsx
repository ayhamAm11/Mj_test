import React from 'react'
import Img from './Img'
import { motion } from 'framer-motion'
import { content } from '../../content/text'
import section  from '../../assets/section.jpg'
import { useSelector } from 'react-redux'
const Sectionown = () => {

  const lang= useSelector(state => state.user.lang)

  return (
    <motion.section 
    initial={{ scale: 0.6, y: -100, opacity: 0 }}
    whileInView={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    className='flex gap-5 flex-col-reverse sm:flex-row  min-h-[100vh] mt-10 items-center justify-start lato-bold-italic'>
      <div className='flex-[2] p-6 pt-[100px] sm:pt-auto sm:p-12 flex items-end '>
        <motion.div 
        >
          <h1 className='text-gold text-3xl mb-6'>{content.section1.title[lang]}</h1>
          <div className='flex flex-col  gap-5'>
           <p>{content.section1[lang]}</p>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className='flex items-center justify-start flex-1'
      >
        <Img src={section} />
      </motion.div>
    </motion.section>
  )
}

export default Sectionown