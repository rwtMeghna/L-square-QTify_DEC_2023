import React, { useEffect, useState } from "react";
import { useSwiper , useSwiperSlide } from "swiper/react";
import styles from "./CarauselLeftNavigation.module.css";
import {ReactComponent as LeftArrow} from "../../../assests/Left.svg";

export default function CaraouselLeftNavigation(){
    const swiper=useSwiper();
    const [isBeginning , setIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange" , function(){
         setIsBeginning(swiper.isBeginning);
        })
    } ,[]);

    return(
<div className={styles.leftNavigation}>
{!isBeginning &&  <LeftArrow onClick={()=> swiper.slidePrev()} />} 
</div>
    )
}
