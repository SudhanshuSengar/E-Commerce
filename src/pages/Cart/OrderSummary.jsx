import React from 'react'
import AddressCard from '../../organism/CartEssentials/AddressCard'
import CartItemCards from '../../organism/CartEssentials/CartItemCards'
import { Button, Divider } from '@mui/material'

function OrderSummary() {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard />
            </div>

            <div>
      <div className='lg:grid grid-cols-3 mt-10 relative'>
        <div className='col-span-2'>

          {[1,1,1,1].map((item)=><CartItemCards />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-5'>
            <p className='uppercase font-bold opacity-50 pb-4 text-left'>Price Details</p>
            <Divider />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4607</span>
              </div>

              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>-₹3419</span>
              </div>



              <div className='flex justify-between pt-3 '>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>

              <div className='flex justify-between pt-3  font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹1278</span>
              </div>
            </div>
            <Button variant="contained"
            fullWidth
              sx={{ px: "2..5rem", py: "0.7rem", bgcolor: "#9155fd", mt: "2rem" }}>
              Checkout
            </Button>
          </div>

        </div>
      </div>
    </div>
        </div>
    )
}

export default OrderSummary