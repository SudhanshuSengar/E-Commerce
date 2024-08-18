import React from 'react'
import Image1 from "../../assets/Product/1.jpg"
import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CartItemCards() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[5rem] lg:h-[9rem]'>
          <img src={Image1} className='w-full h-full object-cover object-top' alt='' />
        </div>
        <div className='ml-5 space-y-1 text-left'>
          <p className='font-semibold'>Womens Lehnga </p>
          <p className='opacity-70'>size: L,Brown</p>
          <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>
          <div className='flex space-x-5 items-center  text-gray-900 pt-6'>
            <p className='font-semibold'>₹199</p>
            <p className='opacity-50 line-through'>₹211</p>
            <p className='text-green-600 font-semibold'>₹199</p>

          </div>
        </div>

      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          
          <span className='py-1 px-7 border rounded-sm'>3</span>
            <IconButton sx={{color:"#9155fd"}}>
              <AddCircleOutlineIcon />
            </IconButton>

        </div>
        <div>
          <Button sx={{color:"#9155fd"}}>Remove</Button>
        </div>
      </div>
    </div>
  )
}

export default CartItemCards