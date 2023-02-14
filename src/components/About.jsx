
import React from "react";
import  "../../src/components/styles/styles.css"
import Foto from "../img/foto.png"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'; 

import Typography from '@mui/material/Typography';
//import typeWhiterEffect from 


const style = {
  position:'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

   
function About ( ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return(
       
     <fragment>
  
            <Stack direction="row" spacing={2}>
              <Avatar className="avatar" alt="Remy Sharp" src={Foto}  style={{
              
                margin:"20px auto",
              
                
              }} />
             

              
            </Stack>
              <h2 className="text"> valentina idrogo</h2>
              <div style={{   color:"#fff",
                textAlign:"center",
                margin:"auto",
                display:"table",}} className="contenedor">

              <p className="animation">Desarrolladora web Junior.<span> &#160;</span></p> 
              </div>

         
         
      <div>
      <Button className="about"
      style={{display:"flex"}}
      
      onClick={handleOpen}>Perfil</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal" sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="perfil">
            Soy valentina idrogo, una desarrolladora web con excelentes habilidades de comunicación.
           Me encanta colaborar y trabajar en equipo.</p>
          
            
             <Button style={{margin:"10px auto",
              backgroundColor:"#FF00A8",
             display:"flex"
             
               }}
              variant="contained" disableElevation>
             <a  style={{
              color:"#fff",
              textDecoration:"none"
             }}
             href="./curriculum .pdf" target="blank">
               
               Descargar CV
               </a>
             </Button>
            
          </Typography>
      
        </Box>

      </Modal>
    </div>

             
       
        <hr />
  

            </fragment>
          );
        }

        




export default About;