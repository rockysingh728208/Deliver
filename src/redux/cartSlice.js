import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
           let existItem= state.find((item)=>item.id==action.payload.id)
           if(existItem){
           return state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
           } 
           state.push(action.payload)
        },
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        incrementQty:(state,action)=>{
                      return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty+1}:item)) 
        },
        decrementQty:(state,action)=>{
                      return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty-1}:item)) 
        }
    }
})
export const {AddItem,RemoveItem,incrementQty,decrementQty}=cartSlice.actions
export default cartSlice.reducer