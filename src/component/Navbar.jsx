import React, {  useState,useRef } from 'react'
import { navList } from '../content'
import {motion} from 'framer-motion'
import { Link, useFormAction, useHref, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Profile } from './svgIcons'
import DropDown from './shared/DropDown'
import useOutsideClick from '../hooks/useOutsideClick'
import { FcMenu } from "react-icons/fc";
import logo from '../assets/logo.png'


const Navbar = () => {
    const loading = useSelector(state => state.user.loading)
   const status = useSelector(state => state.user.status)
   const auth = useSelector(state => state.user.auth)
   const user = useSelector(state =>state.user.user)
   const [togel , setTogel] = useState(false)
   const dropDownRef = useRef('')
   const [isdropDownOpen,setIsDropDownOpen] = useState(false)
//    console.table({loading,status,auth,user},['data'])
    const list = navList
    const activePage = useHref()
useOutsideClick(dropDownRef,()=>{setIsDropDownOpen(false)})
  return (
    <nav className='p-3 sm:p-6  items-center justify-between flex relative '>
        <div>
            <h1 className='text-4xl font-bold text-gold cursor-pointer '>
                <img src={logo} alt="logo" className='w-20 sm:w-[8rem]' />
            </h1>
        </div>
        <div>
        <ul className=' gap-3 hidden sm:flex'>
            {
                list.map((link , index )=>(
                    <>
                        <Link key={index} to={link.id}>
                            <li className={`text-lg font-semibold ${link.id == activePage ? "text-gold":"text-ofblack"}`}>
                                {link.title}
                            </li>
                        </Link>
                    </>
                ))
            }
        </ul>
        </div>
        
        <div className='flex gap-2 lato-bold items-center'>
        {loading && status == 'loading' ? <div className='loader'></div>:
        <>
        {status === 'succeeded'?
        <div className='relative z-40' ref={dropDownRef}>
            <div className='p-2  rounded-full cursor-pointer  font-bold text-lg aspect-square flex justify-center items-center bg-grey  ' onClick={()=>{setIsDropDownOpen(prev =>!prev)}}>
                <Profile color={'#C0AF5D'} width={45} />

            </div>
            {isdropDownOpen && <DropDown setIsDropDownOpen={setIsDropDownOpen}/>}
        </div>
            
        :<>
            <div className=' p-1 py-2 px-4 border-2 border-move2 rounded-3xl '>
                <Link to={'/account?newAccount=false'}>login</Link>
            </div>
            <div className=' p-1 py-2 px-4 bg-move2 text-white rounded-3xl '>
            <Link to={'/account?newAccount=true'}>sign up</Link>
            </div>
        </>}
         
        </>
        }
           <button
           onClick={()=>setTogel(!togel)}
           >
            <FcMenu className='text-2xl sm:hidden' />
           </button>
        </div>
        <div  
        className={`absolute transition-all ${togel?'right-5 ':'right-[-120px]'}  top-20 z-20 p-3 rounded-md bg-move `}>
            <ul className='flex flex-col gap-1   '>
            {
                list.map((link , index )=>(
                    <>
                        <Link key={index} to={link.id}>
                            <li className={`text-lg font-semibold ${link.id == activePage ? "text-ofblack":"text-black"}`}>
                                {link.title}
                            </li>
                        </Link>
                    </>
                ))
            }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar