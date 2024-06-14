import { useEffect, useState } from 'react';
import {img} from '../../content/img'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { ArrowDown } from '../svgIcons';
import { content } from '../../content/text';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const lang= useSelector(state => state.user.lang)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [window.scrollY]);

  const y = Math.floor(scrollY * 0.5)

  

  return (
    <section className='p-6 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10'>
      <div className='items-center justify-center flex'>
        <motion.div
          className='border flex items-center justify-center h-[90vh] overflow-hidden'
          
        >
          <div className='max-w-[500px] flex' style={{transform : `translateY(${y}px)` , transition : 'all 0.3s'}}>
          <img  src={img.hero} alt="Hero" />
          </div >
        </motion.div>
      </div>
      <div className='z-20'>
        <div className='flex flex-col items-start gap-5 p-10'>
          <motion.h1
            className='text-4xl sm:text-8xl text-gold tracking-wide'
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
           {content.hero.name[lang]}
          </motion.h1>
          <motion.p
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=' text-black'
          >
           {content.hero.title[lang]}
          </motion.p>
          <Link to={'/product'}>
          <motion.button
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='rounded-full px-5 py-2 poltawski-nowy-normal bg-move text-xl '
          >
          {lang == 'arb' ? "  تسوق الان ": "קנו עכשיו" }
          </motion.button>
          </Link>
        </div>
      </div>
      {/* <div className='flex sm:hidden items-center justify-center absolute z-10 h-[450px] overflow-hidden'>
        <div className='border flex items-center justify-center'>
          <img src={img.hero} alt="Hero" />
        </div>
      </div> */}
      <motion.i
        initial={{ y: 200, opacity: 0, scale: 0.4 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onClick={()=>{console.log(y)}}
        className='text-xl font-semibold text-gold absolute right-5 sm:right-10 bottom-10 hidden sm:block pacifico-regular '
      >
        <ArrowDown className="absolute -top-1/2 left-[42px]" color={"#C0AF5D"} width={'30px'} height={'100px'} /> 
        Scroll Down
      </motion.i>
    </section>
  );
};

export default HeroSection;
