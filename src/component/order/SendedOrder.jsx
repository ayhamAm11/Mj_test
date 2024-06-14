import React, { useState } from 'react'
import { TbCalendarSad } from "react-icons/tb";
const SendedOrder = ({data}) => {
    const [orders, setOrders] = useState(data[0] ?? null);
    console.log(orders)

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
        <thead>
            <tr>
                <th className="py-2 px-4 border-b border-gray-200">Count</th>
                <th className="py-2 px-4 border-b border-gray-200">Image</th>
                <th className="py-2 px-4 border-b border-gray-200">Price</th>
                <th className="py-2 px-4 border-b border-gray-200">Product ID</th>
                <th className="py-2 px-4 border-b border-gray-200">Title</th>
                <th className="py-2 px-4 border-b border-gray-200">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                orders && orders.products.map((product ,indexProduct )=>(
                    <tr key={indexProduct}>
                <td className="py-2 px-4 border-b border-gray-200 text-center">{product.count}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                    <img src={product.imgUrl} alt={product.title} className="w-16 h-16 object-cover mx-auto" />
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">${product.price}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">{product.productID}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">{product.title}</td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                    
                       
                         <div className='w-full flex-center' >
                            <button className='flex-center gap-2 px-3 py-2 rounded-md border border-ofgold hover:bg-ofwhite hover:border-ofwhite '>
                                <TbCalendarSad className='text-gold text-2xl ' />
                                <h1 className='text-gold'>Await</h1>
                            </button>
                        </div>
                    
                </td>
                </tr>
                ))
            }
                
        </tbody>
    </table>
    </div>
  )
}

export default SendedOrder