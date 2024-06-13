import React, { useLayoutEffect, useState } from 'react'
import {schema} from '../../utils/validateSchema'
import FormInput from '../../component/shared/FormInput'
import { handleChange } from '../../utils/handleInputChange'
import { useDispatch, useSelector } from 'react-redux';
import axiosConfig from '../../configs/axiosConfig'
import { useNavigate } from 'react-router';
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-international-phone/style.css';
import { addUser } from '../../redux/slices/userSlice';
import { PhoneInput } from 'react-international-phone';
function Register({setIsHaveAccount}) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(state =>state.user.status)
  const [values,setValues]=useState({
    userName: "",
    email: "",
    phone:"",
    password: "",
    confirmPassword: "",
  })
  const [loading,setLoading] = useState(false)
  const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};
const isValid = isPhoneValid(values.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('done')
    setLoading(true)
    try {

      axiosConfig
        .post(`api/user/signup`, {
          name: values.userName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          phone:values.phone,
        })
        .then((responce) => {
          dispatch(addUser(responce.data.data.userData));
          console.log(responce.data);
          setLoading(false)
          Navigate("/");
          
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    } 
  };
  useLayoutEffect(()=>{
    if(status ===  'succeeded'){
       Navigate('/')
  } 
})
  return (
    <div className='w-4/5'>
    <h1 className='text-4xl text-move2 pb-5'>Join to us</h1>
    <form action="" className='flex flex-col gap-4 w-full'  onSubmit={handleSubmit}>
    {schema(values).signUp.map(input=>{
   if(input.name !== 'mobile'){
    return <FormInput key={input.id} {...input} value={values[input.name]} onChange={(e)=>{handleChange(setValues,input.name,e.target.value)}} className='bg-ofwhite p-2 text-lg w-full'/>
   }
   return <>
       <PhoneInput
        defaultCountry="ua"
        value={values.phone}
        onChange={(phone) => setValues(prev =>({...prev,phone}))}
        className='phone'
        
      />
      {
        !isValid &&<span className='phone-error' style={{maxWidth:'45ch'}}>phone is not valid</span>
      }
      
   </>
})}
 <div className='flex justify-between items-center px-3 py-2 checkbox w-full h-full'>
       <div className='flex justify-center items-center' >
        
       <input className='none' type="checkbox" name="remmember" id="remmember" />
       <label className='custom-check' htmlFor="remmember"></label>
       <span className='pl-2'> Remmember me</span>
       </div>
     
     <p className='text-white py-2 p-3 bg-red-400  rounded-md cursor-pointer' onClick={()=>{setIsHaveAccount(true)}}>all ready have account</p>
     </div>
     <div className=" flex justify-center items-center w-full">
     {(status === 'loading' || loading)?  <div className="loader mb-2"></div>:<input className='bg-move2 p-3 font-bold text-white mt-4 w-full' type="submit" disabled={!isValid} value={'Create Account'} />}

     </div>
     
    </form>
   
    </div>
  )
}

export default Register