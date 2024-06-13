

import { useEffect, useState } from 'react';
import './Match.css'
import { Box, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';

export default function Match() {

const Token ="dbe7f511131c45cca11f127f0d05dc27"
const baseUrl ="https://api.football-data.org/v4/competitions/2000"

const [matchApi,setmatchApi] = useState([])

  useEffect(()=>{
    function getMatch(){

        const url = `${baseUrl}/matches`
        axios.get(url,{
          headers:{
            "X-Auth-Token":Token
          }
          
        })
        .then((res)=>{
            const matchData=(res.data.matches ||[] )
            setmatchApi(matchData)
            console.log(matchData)

        })
       
    }
    getMatch()
  },[])

 
 
  return (
  <>
   <Container className='sectionGroup  '>
   <Box className="GroupTypography ">
    <Typography className='TypographyTitle' id="Matches" > Matches</Typography></Box>

    <Stack className='bigStack    ' >

  {matchApi.map((matchD,matchdIndex)=>{
    return(
      
    
    <Stack className='matchC ' key={matchD.id} >

<Box className="stage  " >
    <Typography className='matchDay' >  {matchD.stage}</Typography>


</Box>


      
    <Box className="matchCard  "  >
        
        <Box className="team1"> <img src={matchD.homeTeam.crest} className='imgMatch' /> {matchD.homeTeam.name} </Box>
        <Box className="infomatch "> {matchD.score.fullTime.home}   -   {matchD.score.fullTime.away}</Box>
        <Box className="team2">{matchD.awayTeam.name} <img src={matchD.awayTeam.crest} className='imgMatch' /> </Box>

</Box>
    </Stack>
       
      
    )
  })}


    </Stack>

    </Container>
  </>
  )
}
