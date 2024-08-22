import React from 'react'
import AddressCard from "../../../organism/CartEssentials/AddressCard"
import OrderTracker from '../../../organism/Account/Order/OrderTracker'
import { Box, Grid } from '@mui/material'
import image1 from "../../../assets/Product/1.jpg"
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7 text-left'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid container className="space-y-5">
                {[1,1,1,1,1].map((item)=>
                
                    <Grid item container className='shadow=xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4 '>
                            <img src={image1} alt='' className='w-[5rem] h-[5rem] object-cover object-topc' />
                            <div className='space-y-2 ml-5 text-left'>
                                <p className='font-semibold'>Womens Lehnga Net</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold '><span>Color: Brown</span><span>Size: M</span></p>
                                <p>Seller: linnaria</p>
                                <p>₹1099</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>
                )}
            
            </Grid>
        </div>
    )
}

export default OrderDetails