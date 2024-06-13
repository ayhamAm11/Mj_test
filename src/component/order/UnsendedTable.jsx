import React, { useState } from 'react';
import { TiMinus } from 'react-icons/ti';
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteOrder, updateOrder } from '../../redux/slices/orderSlice';

const UnsendedTable = ({ data , handleSendOrders}) => {
    const [orders, setOrders] = useState(data);
    const dispatch = useDispatch()
    const handlePlus = (index) => {
        const newOrders = orders.map((order, i) => 
            i === index ? { ...order, count: order.count + 1 } : order
        );
        setOrders(newOrders);
    };

    const handleMinus = (index) => {
        const newOrders = orders.map((order, i) => 
            i === index && order.count > 1 ? { ...order, count: order.count - 1 } : order
        );
        setOrders(newOrders);
    };

    const handleDelete = (index) => {
        const newOrders = orders.filter((_, i) => i !== index);
        
        dispatch(deleteOrder({index}))
        setOrders(newOrders);
    };

    console.log(orders);

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
                    {orders.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">{item.count}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">
                                <img src={item.imgUrl} alt={item.title} className="w-16 h-16 object-cover mx-auto" />
                            </td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">${item.price}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">{item.productID}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">{item.title}</td>
                            <td className="py-2 px-4 border-b border-gray-200 text-center">
                                <div className="flex items-center gap-3 justify-end">
                                    <button onClick={() => handlePlus(index)}>
                                        <FaPlus className='text-md text-move2' />
                                    </button>
                                    <button onClick={() => handleMinus(index)}>
                                        <TiMinus className='text-md text-move2' />
                                    </button>
                                    <button onClick={() => handleDelete(index)}>
                                        <MdDelete className='text-move2 text-md' />
                                    </button>
                                    <button
                                    onClick={()=>{
                                        handleSendOrders(orders)
                                        setOrders([])
                                    }}
                                    className="px-3 py-2 bg-move2 rounded-md cursor-pointer">
                                        <h1 className='text-md text-white'>Send Order</h1>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UnsendedTable;
