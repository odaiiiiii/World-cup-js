import { Box, Container, Stack, Typography } from '@mui/material'
import './Stadium.css'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import StadiumIcon from '@mui/icons-material/Stadium';
import Diversity3Icon from '@mui/icons-material/Diversity3';



import  {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { dataStad } from './dataStad';





export default function Stadium() {

  const [currentIndex, setCurrentIndex] = useState(0);


  const handleSwiperChange = (swiper) => {
    const newIndex = swiper.activeIndex || 0;
    setCurrentIndex(newIndex);
  };

  return (
   <>

<Container className='sectionGroup '>

<Stack>
<Box className="GroupTypography">


<Typography className='TypographyTitle ' id="Stadiums " >Stadiums</Typography>
</Box>

<Stack className='stadiumSection  '>



 
    <Typography  className='stadName' >{dataStad[currentIndex].nameStad}</Typography>


     

 <Swiper 
  effect={'cube'}
  grabCursor={true}
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  modules={[EffectCube, Pagination]}
  className="mySwiper mySwiper2"
  onSlideChange={handleSwiperChange} // تحديث هنا
>
  {dataStad.map((data)=>{
    return(
      <SwiperSlide  key={data.nameStad}>
        <img src={data.imgStad} style={{width:"100%"}} />
      </SwiperSlide>
    )
  })}
           </Swiper>
          <Box className="descStad ">

            <Typography className="titleStad ">{dataStad[currentIndex].desStad}
              </Typography>

            <Box sx={{ boxShadow: "0 0 0 .7px white" }} />

            <Box className="iconStad ">
              <Box display={"flex"} alignItems={"center"} gap={".7rem"}>        <LocationOnIcon/>  Location </Box>
            <Typography className='dataStad' >Qatar -  {dataStad[currentIndex].location}</Typography>

            </Box>

            <Box className="iconStad ">
              <Box display={"flex"} alignItems={"center"} gap={".7rem"}>        <Diversity3Icon/>  Capacity </Box>
            <Typography  className='dataStad' >{dataStad[currentIndex].Capacity}</Typography>

            </Box>
            
            <Box className="iconStad">
              <Box display={"flex"} alignItems={"center"} gap={".7rem"}    > <StadiumIcon />  Established in </Box>
            <Typography className='dataStad' >{dataStad[currentIndex].Established}</Typography>

            </Box>

            

          </Box>
 </Stack>
    
</Stack>




    
</Container>
   
   </>
  )
}
