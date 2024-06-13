import React from 'react'
import { motion } from 'framer-motion'
import { img } from '../../content/img'
import useWindowSize from '../../hooks/useWindowSize'
import { useSelector } from 'react-redux'
import { content } from '../../content/text'
import { Link } from 'react-router-dom'
const BayProduct = () => {
    const lang= useSelector(state => state.user.lang)
    const size = useWindowSize()
  return (
    <div className='min-h-[100vh] flex items-center flex-col gap-5 sm:gap-10  p-6 sm:p-12'>
        <section className='grid gird-cols-1 sm:grid-cols-4 w-full '>
            <motion.div 
            // initial={size.width >= 500 ?{x:' 100%' } : null}
            // whileInView={size.width >= 500 ?{x:0}: null}
            // transition={{duration:0.6 , delay: 0.8 , type:"spring"  , stiffness: 200}}
            className=' h-[350px] flex-center '>
                <img src={img.product1} className='h-full object-cover w-full object-left rounded-xl' alt="" srcset="" />
            </motion.div>
            <motion.div 
            initial={{y:100 , scale:0.6 , opacity:0}}
            whileInView={{y:0 , scale: 1 , opacity:1}}
            transition={{duration:0.4 , delay: 0.6  , type:"spring"  , stiffness: 200}}
            className=' col-span-1 sm:col-span-2 flex items-center gap-3 sm:gap-6 flex-col p-3 px-7 '>
                <h1 className='text-center text-gold text-5xl pacifico-regular'>{content.aboutProduct.title[lang]} </h1>
                <motion.p 
                animate={{color: '#000'}}
                transition={{duration:0.4 , delay: 0.6}}
                className='text-center text-ofblack lato-bold-italic'>
                    {content.aboutProduct.desc[lang]}
                </motion.p>
              
               <button className='rounded-2xl px-4 sm:px-6 py-3 border bg-move poltawski-nowy-bold '>
                    
                    {content.aboutProduct.buy[lang]}
                
                </button>
              
            </motion.div>
            <motion.div 
            // initial={size.width >=! 500 ?{x:' -100%' }:{x:0 }}
            // whileInView={size.width >= 500 ?{x:0}:null}
            // transition={{duration:0.6 , delay: 0.8 ,  type:"spring" , stiffness: 200}}
            className=' h-[350px] flex-center '>
                <img src={img.product1} className='h-full rounded-xl object-cover  w-full object-left' alt="" srcset="" />
            </motion.div>
        </section>
        <div className=' bg-gold rounded-2xl w-full sm:w-[80%] lg:w-[70%] h-[300px] flex-center shadow-2xl '>
            <img src={img.collection} className='h-full object-cover w-full object-top rounded-2xl' alt="" srcset="" />
        </div>
    </div>
  )
}

export default BayProduct