import {   createSlice,  } from '@reduxjs/toolkit'
import { fetchCustomers } from './ActionCreators' 

const initialState = {
  currentCustomer: null
}

export const currentSelectedCustomerSlice = createSlice( {
    name: 'current',
    initialState,
    reducers: {
      selectCustomer(state, action){
        state.currentCustomer = action.payload
      },
      
      resetCurrentSelectedCustomer(state){
        state.currentCustomer = null
      },

    },
     
})
export default  currentSelectedCustomerSlice.reducer 
 