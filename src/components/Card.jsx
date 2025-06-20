import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from "react-redux"
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify'; 
// import image1 from "../assets/image1.jpg"
const Card = ({name,image,id,price,type}) => {
  let dispatch=useDispatch()
  return (
    <div className='w-[280px] h-[360px] bg-white p-4 flex flex-col gap-3 rounded-md shadow-lg hover:border-2 border-green-300 '>
        <div className='h-[200px]'>
            <img src={image} alt="" className='w-full h-full object-cover rounded-md' />
        </div>

        <div className='text-2xl font-semibold'>
          {name}
        </div>

       <div className='flex justify-between'>
<div className='text-green-600 font-bold'>Rs {price}/-</div>
<div className='flex gap-2 items-center'>{type=="veg"?<LuLeafyGreen className='text-green-500'/>:<GiChickenOven className='text-red-500' />
}<span className='text-green-600 font-bold'>{type}</span></div>
      </div>
<button className='w-full bg-blue-500 hover:bg-blue-300 transistion-all duration-200 text-white p-2 rounded-md' onClick={()=>{dispatch(AddItem({id:id,name,price,image,qty:1}));
toast.success("Item Added")}
}>Add to dish</button>
    </div>
  )
}

export default Card