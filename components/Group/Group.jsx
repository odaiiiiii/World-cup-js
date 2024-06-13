

import { Box, Container,Stack, Typography } from '@mui/material'
import './group.css'
import { dataG } from './DataGroup'


export default function Group() {
  return (
    <>

        <Container className='sectionGroup '>

          <Stack className='responsive-Group'>

        <Box className="GroupTypography">
        <Typography className='TypographyTitle' id="teams" >Groups & Teams</Typography>

        </Box>


       <Stack className='cards  ' >


    {dataG.map((teamGroup)=>{
      return(
        <Stack key={teamGroup.nameflag1}  className='g1  '>
<Typography className='numberGroup'>Group {teamGroup.numGroup}</Typography>
       <Box className="cardGroup ">

        <Box className="teamGroup">
          
        <img src={teamGroup.imgFlag1} style={{width:"25%" ,borderRadius:"20px 0 0 20px"}} />

          <Box className="nameTeam">
          {teamGroup.nameflag1}
          </Box>
          <Box>
            
            </Box>
        
         </Box>
         <Box className="teamGroup">
          
          <img src={teamGroup.imgFlag2} style={{width:"25%" ,borderRadius:"20px 0 0 20px"}} />
  
            <Box className="nameTeam ">
            {teamGroup.nameflag2}
            </Box>
            <Box>

              
              
              </Box>
          
           </Box>
           <Box className="teamGroup ">
          
          <img src={teamGroup.imgFlag3} style={{width:"25%" ,borderRadius:"20px 0 0 20px"}} />
  
            <Box className="nameTeam ">
            {teamGroup.nameflag3}
            </Box>
            <Box>
              
              </Box>
          
           </Box>
           <Box className="teamGroup ">
          
          <img src={teamGroup.imgFlag4} style={{width:"25%" ,borderRadius:"20px 0 0 20px"}} />
  
            <Box className="nameTeam ">
            {teamGroup.nameflag4}
            </Box>
            <Box>
              
              </Box>
          
           </Box>
       </Box>
       

</Stack>
     
      )
    })}





     

       
       





       </Stack>

          </Stack>
        </Container>


    </>
  )
}
