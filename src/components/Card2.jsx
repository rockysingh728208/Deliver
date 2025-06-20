import React from 'react'
import { MdDelete } from "react-icons/md";
import image1 from "../assets/image1.jpg"
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, RemoveItem } from '../redux/cartSlice';
const Card2 = ({name,id,price,image, qty}) => {
  let dispatch=useDispatch()
  return (
    <div className='flex justify-between w-full h-[120px] p-4 bg-white'>
        <div className='w-[60%] h-full flex gap-6'>
<img className="w-[50%] h-full rounded-lg" src={image} alt="" />
<div className='flex flex-col gap-2'>
    <div className='font-bold'>{name}</div>
    <div className='w-[120px] h-[40px] border-2 border-green-400 items-center justify-center flex gap-2 rounded-md bg-white'>
        <button className='bg-white px-3 rounded-md text-green-400'  onClick={()=>{
          qty>1?dispatch(decrementQty(id)):qty
        }}  >-</button>
    <span className='bg-blue-400 px-3 rounded-md text-green-400'>{qty}</span>
    <button  className='bg-white px-3 rounded-md text-green-400'  onClick={()=>{
          dispatch(incrementQty(id))
        }} >+</button>
    </div>
</div>
        </div>

        <div className='flex flex-col gap-3'>
            <div className='text-green-500 text-2xl'>Rs {price}/-</div>
            <div className='text-red-500 cursor-pointer'><MdDelete className='text-2xl' onClick={()=>dispatch(RemoveItem(id))}/></div>
        </div>

    </div>
  )
}

export default Card2