import { createSlice } from "@reduxjs/toolkit";

import { order_actions } from "../actions/order";
import { orderState } from "../intialStates/order/orderState";
export const orderSlice = createSlice({
    name: "order",
    initialState:orderState,
    reducers: {
     ...order_actions
    },
  });

  export const {addOrder,addSendedOrders,addValidOrders,sendOrder,updateOrder,updateSendedOrder,deleteOrder} = orderSlice.actions;
  export default orderSlice.reducer;