

import { Box, Container, Stack, Typography } from '@mui/material'
import './Topscorers.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

export default function Topscorers() {


    const Token = "dbe7f511131c45cca11f127f0d05dc27"
    const basrUrl ="https://api.football-data.org/v4/competitions/2000"


    const [Top,setTop] =useState([])

    useEffect(()=>{
        function getScorers(){
        const url = `${basrUrl}/scorers`

        axios.get(url,{
            headers:{
                "X-Auth-Token" :Token
            }
        })
        .then((res)=>{
            const scorers = res.data.scorers || []
            setTop(scorers)
        })
        .catch((error)=>{
            console.error('Error fetching standings:', error);

        })
        }
        getScorers() 
    },[])


  return (
<>

<Container className='sectionGroup  '>
        <Stack>
          <Box className="GroupTypography"> <Typography className='TypographyTitle'  id="Scorers">Top Scorers</Typography></Box>



                <Stack className='Topscorers  '>
                    
            <Box className="category "> 
              <Typography  className='categoryNav1'>Player Name</Typography>  
              <Typography className='categoryNav1'>Nationality</Typography>  
              <Typography className='categoryNav1'>Goals</Typography>  
              <Typography className='categoryNav1'>Played Matches</Typography>  

                  </Box>


    {Top.map((topItem,topItemIndex)=>{
        return(
            
            <React.Fragment key={topItem.player.id}>
            <Box className="categoryData">
              <Typography className='categoryNav2'>{topItem.player.name}</Typography>
              <Typography className='categoryNav2'>
                <img src={topItem.team.crest} className='imgNationality' />
                {topItem.player.nationality}
              </Typography>
              <Typography className='categoryNav2'>{topItem.goals}</Typography>
              <Typography className='categoryNav2'>{topItem.playedMatches}</Typography>
            </Box>
            <Box className="boxShadow" />
          </React.Fragment>
        )
    })}

                </Stack>



          </Stack>
          </Container>
</>
  )
}
