import React, { useLayoutEffect, useState } from 'react'
import {schema} from '../../utils/validateSchema'
import FormInput from '../../component/shared/FormInput'
import { handleChange } from '../../utils/handleInputChange'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logUser } from '../../redux/actions/auth'

function Login({setIsHaveAccount}) {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector(state =>state.user.status)
  const [values,setValues]=useState({
    email:'',
    password:''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(logUser({initialUser:values}))
  };
  useLayoutEffect(()=>{
    if(status ===  'succeeded'){
       Navigate('/')
  } 
   
  
  },[status])
  return (
    <div className='w-4/5 flex flex-col '>
      <div className="title w-full flex justify-between items-center flex-col sm:flex-row">
      <h1 className='text-4xl text-move2 pb-5'>Welcome Back</h1>
      <span  className='mb-5 p-3 bg-gold2/80 text-white font-semibold w-max rounded-lg text-sm cursor-pointer ml-auto' onClick={()=>{setIsHaveAccount(false)}}>SignUp page</span >
     
      </div>
     
    <form action="" className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
    {schema(values).login.map(input=>{

return <FormInput key={input.id} {...input} value={values[input.name]} onChange={(e)=>{handleChange(setValues,input.name,e.target.value)}} className='bg-ofwhite p-2 text-lg w-full'/>
})}
 <div className='flex justify-between items-center checkbox h-full w-full border-none flex-col'>
       <div className='flex justify-center items-center h-full w-full' >
        
       <input className='none' type="checkbox" name="remmember" id="remmember" />
       <label className='custom-check' htmlFor="remmember"></label>
       <span className='pl-2'> Remmember me</span>
       </div>
     
     <p className='text-white py-2 p-3 bg-red-400 rounded-md'>forget password</p>
     </div>
     <div className=" flex justify-center items-center w-full">
     {status === 'loading'?  <div className="loader "></div>:<input className='bg-move2 p-3 font-bold text-white mt-4 w-full' type="submit" value={'Login Now'} />}

     </div>
    
    </form>
    
    </div>
  )
}

export default Login