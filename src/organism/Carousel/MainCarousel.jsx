
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Banner1 from "../../assets/MainCarousel/1.jpg";
import Banner2 from "../../assets/MainCarousel/2.jpg";
import Banner3 from "../../assets/MainCarousel/3.jpg";
import Banner4 from "../../assets/MainCarousel/4.jpg";


const items = [Banner1,Banner2,Banner3,Banner4].map((item)=>  <div className="item" data-value="1"><img src={item} alt=''/></div>,)

const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
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
