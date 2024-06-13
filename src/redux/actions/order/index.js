import { handleClick } from "../../../configs/notificationConfig";

export const order_actions = {
    addOrder:(order, action) => {
        const currentOrder = order.unsendedOrder.find(orderItem =>orderItem.productID === action.payload.productID)

        if(currentOrder){
           handleClick({type:"warn",msg:'the product already added'})
        }else{
            order.unsendedOrder.push(action.payload);
            handleClick({type:'success',msg:"order added to the order page"})
        }
         
   },
   deleteOrder:(order,action)=>{
     order.unsendedOrder = order.unsendedOrder.filter((_,i) => i !== action.payload.index)
   },
   addSendedOrders:(order,action)=>{
    order.sendedOrder=action.payload; 
   },
   sendOrder:(order, action) => {
    const currentOrder = order.sendedOrder.find(orderItem =>orderItem.productID === action.payload.productID)

    if(currentOrder){
       handleClick({type:"warn",msg:'the product already sended'})
    }else{
        order.sendedOrder.push(action.payload);
        handleClick({type:'success',msg:"order sended to the our workers we will connect with you by number and email"})
    }
     
},
updateOrder:(order,action)=>{
    
    const currentOrderIndex = order.unsendedOrder.findIndex((element) => element.productID === action.payload.productID)
    order.unsendedOrder[currentOrderIndex]=action.payload
},
updateSendedOrder:(order,action)=>{
    const currentOrderIndex = order.sendedOrder.findIndex((element) => element.productID === action.payload.productID)
    order.sendedOrder[currentOrderIndex]=action.payload
},
   addValidOrders:(order,action)=>{
    order.validOrder=action.payload 
   }
}