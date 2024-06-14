import React, { useEffect, useLayoutEffect, useState } from 'react'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { addSendedOrders, addValidOrders, sendOrder,updateSendedOrder,updateOrder } from '../redux/slices/orderSlice'
import axiosConfig from '../configs/axiosConfig'
import { useNavigate } from 'react-router'
import { handleClick } from '../configs/notificationConfig'
import axios from 'axios'
import UnsendedTable from '../component/order/UnsendedTable'
import SendedOrder from '../component/order/SendedOrder'
import OnTheWayOrder from '../component/order/OnTheWayOrder'
import { content } from '../content/text'
import { PiWhatsappLogoDuotone } from "react-icons/pi";

function Orders() {
  const [displayTable , setDesplayTable] = useState('unsended')
  const user = useSelector(state =>state.user.user)
  
   
 
  console.log(user)
  const API_URLS = [
    `api/invalidOrder/user/${user?._id}`,
    `api/order/user/${user?._id}`,
  ];
  const dispatch = useDispatch()
  const lang= useSelector(state => state.user.lang)
  const orders = useSelector(state => state.order)
  console.log(orders)
  const handleSendOrders = async(data)=>{
    try {
      if(user){
        const {phone ,email , _id } = user
        const res = await axios.post('https://server-wcv2.onrender.com/api/invalidOrder/addOrder' , {
          userId : _id ,
          userNumber : phone ,
          userEmail : email ,
          products : data
  
        })
        console.log({
          userId : _id ,
          userNumber : phone ,
          userEmail : email ,
          products : data
  
        })
        
        dispatch(sendOrder(data))
      }
  
    } catch (error) {
      console.log(error)
     
    }
    
  }
  const sendValidOrderToRedux = (data)=>{
    dispatch(addValidOrders(data))
  }
  const sendSendedOrderToRedux = (data)=>{
    dispatch(addSendedOrders(data))
  }

  async function fetchDataFromAPI(url) {
    return axiosConfig(url)
      .then(response =>  response)
      .catch(error => {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
      });
  }
  
  useEffect(()=>{
    if(user){
      Promise.all(API_URLS.map(fetchDataFromAPI))
    .then(([sendedOrder, validOrder]) => {
      console.log('All data fetched successfully!');
      console.log(sendedOrder.data,validOrder.data)
      sendValidOrderToRedux(validOrder.data.data.userOrders)
      sendSendedOrderToRedux(sendedOrder.data.data.userOrders)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    }
    
  },[user])
  return (
    <div className='order p-5 flex flex-col gap-4'>
      <h1 className='text-4xl w-full text-center text-gold pacifico-regular'>My Orders</h1>
      <select
      className='rounded-md'
      onChange={(e)=>{
        setDesplayTable(e.target.value)
        console.log(displayTable)
      }}
      defaultValue={'unsended'}>
      <option value="unsended">new orders</option>
      <option value="sended">sended order</option>
      <option value="valid">order on the way</option>
    </select>
    <div>
      <h1 className='text-center text-xl mb-10 '>
          {content.order.category[lang]}
      </h1>
      <div className='flex-center'>
        <div className='grid grid-cols-2 gap-5'>
          <div className=''>
                <img src="https://play-lh.googleusercontent.com/gk0s1DxZutnAlEE5GZzPe-DHMNwRGlgC49--bcUxhLJJTKxZykbXsbC7ZXwFj4Inmg=w240-h480-rw" alt="bit" className='w-[100px] ' />
          </div>
          <div className='flex items-center'>
                <h1 className='px-4 py-3 rounded-md cursor-pointer bg-move2 text-ofwhite'>
                  {content.order.bank[lang]}
                </h1>
          </div>
        </div>
      </div>
      <div className='text-center flex flex-row-reverse justify-center mt-6'>
        <h1>{content.order.whats[lang]}</h1> 
        <PiWhatsappLogoDuotone className=' text-3xl text-green' />
      </div>
    </div>
      {displayTable === 'unsended' &&<UnsendedTable data={orders.unsendedOrder} handleSendOrders={handleSendOrders} />}
      {displayTable === 'sended' &&<SendedOrder data={orders.sendedOrder}  />}
      {displayTable === 'valid' &&<OnTheWayOrder data={orders.validOrder}  />}
    </div>
    
  )
}

export default Orders


/*
{
userId : 

}
*/