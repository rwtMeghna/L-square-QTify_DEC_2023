import React, { useEffect } from "react";
import {Navigation} from "swiper";
import {Swiper , SwiperSlide, useSwiper} from "swiper/react";
import styles from "./Caraousel.module.css";
import "swiper/css";
import CaraouselLeftNavigation from "./CarauselLeftNavigation/CaraouselLeftNavigation";
import CaraouselRightNavigation from "./CaraouselRightNavigation/CarauselRightNavigation";

const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{
        swiper.slideTo(0)
    } , [data]);
    return
    <></>;
}

function Caraousel({data , renderComponent}){
    return(
        <div className={styles.wrapper}>
        <Swiper
        style={{padding:"0px 20px"}}
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        allowTouchMove
        >
            <Controls data={data}/>
            <CaraouselRightNavigation/>
            <CaraouselLeftNavigation/>
          
            {data.map((ele)=>(<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
</Swiper>
</div>
    )
};

export default Caraousel;
