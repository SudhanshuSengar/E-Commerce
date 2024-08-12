
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Banner1 from "../../assets/MainCarousel/1.jpg";
import Banner2 from "../../assets/MainCarousel/2.jpg";
import Banner3 from "../../assets/MainCarousel/3.jpg";
import Banner4 from "../../assets/MainCarousel/4.jpg";
import Banner5 from "../../assets/MainCarousel/5.jpg";
import Banner6 from "../../assets/MainCarousel/6.jpg";
import Banner7 from "../../assets/MainCarousel/7.jpg";




const items = [Banner1,Banner2,Banner3,Banner4,Banner5,Banner6,Banner7].map((item)=>  <img className='cursor-pointer -z-10' src={item} alt=''/>)

const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        items={items}
    />
);

export default MainCarousel;
