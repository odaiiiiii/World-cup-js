
import './nav.css'
import { Stack, Box,Container,ButtonGroup, List, ListItem, ListItemText, Menu, MenuItem, Typography,  } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';


const optionsLanguage =["AR","EN","FR","JP"]
export default function Nav() {


   const [lang ,setLang] = useState(null)
   const [selectIndex,setSelectIndex] = useState(1)
   const open = Boolean(lang)

   const handelClick =(event) =>{
      setLang(event.currentTarget);
   }

   const handelMenu = (event,index) =>{
      setSelectIndex(index);
      setLang(null)
   }
   const handleClose =()=>{
      setLang (null)
   }

  return (
   
   <>


<Stack className='nav ' >

<Container className='continerNav '>

<Box className="box1Img "> <img src="logo.png" className='logo ' />
<Typography  className='FIFA'>FIFA WORLD CUP  <span> QATAR 2022</span></Typography>
</Box>

<Box className="box2-list  ">

   <ButtonGroup   variant="text"   className='ButtonGroup  ' >


    <a href="#teams" className="btn-nav-box2"><span >  Teams</span></a>
    <a href='#Matches' className="btn-nav-box2">Matches</a>
    <a href='#Groupstandings' className="btn-nav-box2"> <span >standings</span></a>
    <a href='#Stadiums' className="btn-nav-box2">Stadiums</a>
    <a href='#Scorers' className="btn-nav-box2">Top  Scorers</a>


    


   </ButtonGroup>

</Box>

<Box  className="box3 " >




<Box   className="nav-box3 ">
<List component="nav" aria-label="Device settings"   >
<ListItem
          
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined} 
            onClick={handelClick}
            >
                 <ListItemText     secondary={optionsLanguage[selectIndex]} />

            </ListItem>
   
</List>
</Box>


<Menu

          id="lock-menu"
          anchorEl={lang}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {optionsLanguage.map((option, index) => (
            <MenuItem
              key={option}
              selected={index ===  selectIndex}
              onClick={(event) => handelMenu(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>


            <Box className="nav-box3 " >        <ShareIcon className='shareIcon'  /></Box>

</Box>

</Container>


</Stack>

   


   </>
  )
}
