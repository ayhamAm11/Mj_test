import React, { useEffect, useState } from 'react'
import Card from '../component/product/Card'
import { motion , AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import {addOrder } from '../redux/slices/orderSlice';
import { useNavigate } from 'react-router'
import { handleClick } from '../configs/notificationConfig';
import axios from 'axios';
import Loading from '../component/Loading';
const Product = () => {
  const user = useSelector(state =>state.user.user)
  const Navigate = useNavigate()
  const dispatch = useDispatch()
    const [item , setItem] = useState(null)
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
      const fetchData = async()=>{
        setLoading(true)
          try {
            const res =await axios.get(`https://server-wcv2.onrender.com/api/products`)
            console.log(res.data.data.products)
            setItem(res.data.data.products)
          } catch (error) {
            console.log(error)
          } finally{
            setLoading(false)
          }
      }
      fetchData()

    },[])
    const [display , setDisplay] = useState(0)
    const addOrderFunc = (data) => {
      // productID,count,price , imgUrl , title
      dispatch(addOrder(data))
      
    };
  return (
    <section>
         <AnimatePresence >
        {item &&item.map((product, index) => (
          index === display && (
            <Card
              key={product._id}
              item={product}
              setDisplay={setDisplay}
              display={display}
              length={item.length}
              index={index}
              addOrder={addOrderFunc}
            />
          )
        ))}
        </AnimatePresence>
        {
          loading && <Loading />
        }
    </section>
  )
}

export default Product

