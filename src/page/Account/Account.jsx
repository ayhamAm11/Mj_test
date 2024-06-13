import React, { useLayoutEffect, useState } from 'react'
import { img } from '../../content/img'
import Login from './Login'
import Register from './Register'
import { useSearchParams } from 'react-router-dom'

function Account() {
  const [isHaveAccount,setIsHaveAccount] = useState(true)
  const [searchParams] = useSearchParams();
  const newAccount = searchParams.get('newAccount')
  useLayoutEffect(()=>{
  if(newAccount ==='true'){
    setIsHaveAccount(false)
  }
  },[])
  return (
    <div className='flex min-h-screen w-full p-10 bg-grey justify-center items-center'>
        <div className='grid grid-cols-5 min-h-[80vh] grid-rows-1 h-full w-full  gap-4 bg-white shadow-md '>
        <div className=' col-span-2 flex   '>
            <img src={img.collection} className='w-full h-full object-cover' alt="" srcset="" />
        </div>
        <div className='flex items-center col-span-3  p-2'>
          {isHaveAccount?<Login setIsHaveAccount={setIsHaveAccount}/>:<Register setIsHaveAccount={setIsHaveAccount}/>}
        </div>
        </div>
       
    </div>
  )
}

export default Account