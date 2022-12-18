import { Box, Typography,Button,Rating,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";
import { useState, useEffect } from 'react'
import React from "react";
import "./styles.css";
import {getDoc,doc} from 'firebase/firestore'
import { db} from '../../../../../services/firebaseConfigs/firebase'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//AIzaSyDOq5PYhXTOW3WLqLHTAzNfcZpW4Oa9o_E


const containerStyle = {
  width: '450px',
  height: '400px',
  marginInline: '1rem',
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

const Card = ({ slides, currentSlide }) => {
  const [open, setOpen] = React.useState(false);
  const [ title, setTitle ] = useState('') ; 
  const [ subtitle, setSubTitle ] = useState('') ; 
  const [ lat, setLat ] = useState(0) ; 
  const [ lng, setLng ] = useState(0) ; 

  const handleClickOpen = async (id) => {
    setOpen(true);
    const docSnap =   await getDoc( doc(db, "circuits", id) ) 
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().gps.lat);
        setTitle(docSnap.data().title)    
        setSubTitle(docSnap.data().subtitle)    
        setLat(docSnap.data().gps.lat)    
        setLng(docSnap.data().gps.lng)   
      }
      else {
        console.log("No such document!");
      }
    setTitle
  };

  const handleClose = () => {
    setOpen(false);
  };
return(
  <Box className='cards'>
    {slides.map((chunk, i, ) => (
      <Box style={{width:'100%'}} 
        key={chunk[0].id}
        className={currentSlide === i ? "visible2" : "invisible2"}
      >
        {chunk.map((slide) => (
          <Box style={{width:'100%'}}  key={slide.id}
           sx={{display:'flex', justifyContent:'center'}}>
            <Box 
               sx={{  backgroundColor:'white' , borderRadius:'1rem',
               height:'550px'  ,width:"80%", margin:'0.5rem' }} >   
              <Box  component='img'
                id='bannerImg'
                    sx={{ 
                    height:'300px' ,
                    objectFit:'cover',
                    width: '100%',
                    borderRadius:'1rem 1rem 0 0'
                    }} src={slide.imgurl}>
              </Box> 
              
              <Box  sx={{             }}>
                  <Typography sx={{fontWeight:'600', fontSize:'1.1rem', color:'color3', marginBlock:'1rem'}} >{slide.title} </Typography> 
                  <Typography >{slide.subtitle} </Typography> 
              </Box>

              <Box  sx={{marginBlock:'1rem'  }}>
                  <Typography >Puntuación: {slide.score} ({slide.amount}) </Typography> 
                  <Rating name="read-only" value={slide.score} precision={0.1} readOnly />

              </Box>

              <Box   sx={{marginBlock:'1rem'}}>
                  <Button size="small" variant="outlined" sx={{marginInline:'0.5rem'}}>Consulta</Button>
                  <Button size="small" variant="outlined"  sx={{marginInline:'0.5rem'}} onClick={() =>{  handleClickOpen(slide.id)}}>Ver Más</Button>
              </Box>
            
            </Box>      

          </Box>

        ))}

      </Box>
    ))}


         <LoadScript async  
                    googleMapsApiKey="AIzaSyDOq5PYhXTOW3WLqLHTAzNfcZpW4Oa9o_E"
                  >
             <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle  id="alert-dialog-title">
                   {title}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {subtitle}
                  </DialogContentText>
                </DialogContent>

                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={ {lat: parseFloat(lat) , lng:parseFloat(lng)}}
                      zoom={15}
                                      >
                      
                      { /* Child components, such as markers, info windows, etc. */ }
                      <Marker 
                          position={ {lat: parseFloat(lat) , lng:parseFloat(lng)}}
                               />

                    </GoogleMap>
                
   
                <DialogActions>
                  <Button onClick={handleClose}>Cerrar</Button>
                  {/* <Button onClick={handleClose} autoFocus>
                    Agree
                  </Button> */}
                </DialogActions>
              </Dialog>
              </LoadScript>
  </Box>

);
                }

export default Card