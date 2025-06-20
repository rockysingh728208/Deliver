import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { useContext } from 'react';
import food_items from '../food';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

const Nav = () => {
  let{input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)

useEffect(() => {
  let newList=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
setCate(newList)
}, [input])

 let Items=useSelector(state=>state.cart)

  return (
    <div className='w-full min-h-[100px] px-5 flex justify-between items-center md:px-8'>

<div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
  <MdFastfood className='w-[30px] h-[30px] text-green-500' />
</div>

<form onSubmit={()=>e.preventDefault()} className='w-[40%] h-[60px] bg-white flex items-center px-5 gap-6 rounded-md shadow-xl md:w-[70%]'>
  <IoSearch className='h-[20px] w-[20px] text-green-500' />
<input className='w-[100%] outline-none text-[16px] md:text-[20px]' type="text" placeholder='Search Items....' onChange={(e)=>setInput(e.target.value)} value={input} />
</form>

<div className='w-[60px] h-[60px] bg-white flex justify-center items-center  rounded-md shadow-xl relative cursor-pointer ' onClick={()=>{
  setShowCart(true)
}}>
  <span className='absolute top-0 right-2 text-green-500 font-bold'>{Items.length}</span>
<FaShoppingBag className='w-[30px] h-[30px] text-green-500' />
</div>

    </div>
  )
}

export default Nav