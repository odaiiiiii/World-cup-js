import { Box, Container, Stack, Typography } from '@mui/material';
import './Statistics.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Statistics() {
  const token = "dbe7f511131c45cca11f127f0d05dc27";
  const baseUrl = "https://api.football-data.org/v4/competitions/2000";

  const [standings, setStandings] = useState([]);

  useEffect(() => {
    function getStandings() {
      const url = `${baseUrl}/standings`;

      axios.get(url, {
        headers: {
          "X-Auth-Token": token
        }
      })
        .then((response) => {
          const standingsData = response.data.standings || [];
          setStandings(standingsData);
        })
        .catch((error) => {
          console.error('Error fetching standings:', error);
        });
    }

    getStandings();
  }, []); // المربع الخالي يعني أن useEffect يشغل الكود فقط مرة واحدة عندما يتم تحميل المكون

  return (
    <> 
      <Container className='sectionGroup '>
        <Stack >
          <Box className="GroupTypography ">
            <Typography className='TypographyTitle' id="Groupstandings">Group Standings </Typography></Box>
          <Stack className='cardsStandings  '>
            {standings.map((group, groupIndex) => {
              return ( 
                <Box key={groupIndex} className="StatisticGroup ">
                  <Box className="navGroup1">{group.group}</Box>
                  <Box className="navGroup2">
                    <Typography className='titleTeam'>Team</Typography>
                    <Box />
                    <Typography className="wld" >W</Typography>
                    <Typography width={"20%"}textAlign={"center"}>L</Typography>
                    <Typography className="wld">D</Typography>
                    <Typography  className="wld">pts</Typography>
                  </Box>


                  <Box className="navGroup3  "  >
                    {group.table.map((content, contentIndex) => {
                      return (
                        <Stack key={contentIndex} className="nav3Content  " > 
                          <Box  className= "contantGroup2" > 
                            <img src={content.team.crest}   className='imgnavGroup3  '  />
                            <Typography className='nameTeamG2  '>{content.team.tla}</Typography>
                          </Box>
                            <Typography className='contantGroup2Numbers' >{content.won}</Typography>
                            <Typography className='contantGroup2Numbers'>{content.lost}</Typography>
                            <Typography className='contantGroup2Numbers'>{content.draw}</Typography>
                            <Typography className='contantGroup2Numbers'>{content.points}</Typography>
                        </Stack>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Stack>


        
      </Container>
    </>
  );
}
