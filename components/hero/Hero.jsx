

import { Stack } from '@mui/material'
import './hero.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade, Autoplay, Navigation } from 'swiper/modules';


import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Hero() {
  return (
   <> 
    
    <Stack className='Hero-Section '>

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}

        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,EffectFade, Navigation]}
        className="mySwiper"
 
       
    
      >
        <SwiperSlide> <img src=' hero11.png'/></SwiperSlide>
        <SwiperSlide> <img src=' hero2.png'/></SwiperSlide>
        <SwiperSlide ><img src=' hero1.png' /> </SwiperSlide>

        <SwiperSlide> <img src=' hero4.png'/></SwiperSlide>
        <SwiperSlide> <img src=' hero10.png'/></SwiperSlide>
        <SwiperSlide ><img src=' hero9.png' /> </SwiperSlide>

        <SwiperSlide> <img src=' hero15.png'/></SwiperSlide>
        <SwiperSlide> <img src=' hero6.png'/></SwiperSlide>

      
      </Swiper>
    </Stack>
   
   </>

  )
}
