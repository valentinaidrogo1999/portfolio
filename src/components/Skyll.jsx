import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';
import Html from "../img/html.png"
import "../components/styles/styles.css"
import Portfolio from "../components/portfolio"





const icon = (
  <Paper  sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function Skyll() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180  }}>
      
      <FormControlLabel
       style={{margin:"80px",
     }}
      
        control={<Switch style={{backgroundColor:"#FF00A8"}} checked={checked} onChange={handleChange} />}
        label="Mis  Skills"
      />
      <Box sx={{ display: 'flex', justifyContent:"space-evenly", flexWrap:"wrap"}}>
      
        <Zoom  className='html'in={checked}>{icon}</Zoom>
        <Zoom className='css'  in={checked} style={{transitionDelay: checked ? '500ms' : '0ms' }}>
        
          {icon}
        </Zoom>
      
        <Zoom  className='js'  in={checked} style={{transitionDelay: checked ? '1000ms' : '0ms' }}>
    
          {icon}
        </Zoom>
        
        <Zoom  className='react'  in={checked} style={{ transitionDelay: checked ? '1500ms' : '0ms' }}>
          {icon}

        </Zoom>
      </Box>
        <Portfolio/>
      
    </Box>
  );
}