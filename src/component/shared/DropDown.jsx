import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLang } from '../../redux/slices/userSlice'

function DropDown({setIsDropDownOpen}) {
  const dispatch = useDispatch()
const logout = ()=>{
  localStorage.clear()
  window.location.reload()
}
const changeLanguage =(lang)=>{
   dispatch(changeLang({lang}))
   setIsDropDownOpen(false)
}
  return (
    <div className='dropdown z-10 text-sm lato-regular  absolute py-4 p-3 bg-grey right-2 top-[110%] w-[150px]' >
      <div>
        <h2 className='lato-bold pb-1 border-b-2 border-b-gold2 mb-1'>change language</h2>
        
        <ul className='pb-1 border-b-2 border-b-gold2 mb-1 poltawski-nowy-normal'>
          <li className='w-full p-2 bg-ofwhite my-2 rounded-md cursor-pointer' onClick={()=>changeLanguage('arb')}>Arabic</li>
          <li className='w-full p-2 bg-ofwhite my-2 rounded-md cursor-pointer' onClick={()=>changeLanguage('ubr')}>hebrew</li>
        </ul>
      </div>
      <div className='w-full p-2 bg-red-400 text-center text-white font-bold my-2 rounded-md'>
        <span className='cursor-pointer' onClick={logout} >logout</span>
      </div>
    </div>
  )
}

export default DropDown