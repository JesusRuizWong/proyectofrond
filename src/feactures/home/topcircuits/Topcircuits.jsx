import { MapSharp,  } from '@mui/icons-material'
import { Typography,Box } from '@mui/material'
import React from 'react'
import Slider from './components'
import ilustracion from './utils/ilustracion.svg'

export default function Topcircuits() {
  return (
    <Box sx={{padding:"1rem",marginBottom:'1rem'}}>
      <Box sx={{padding:"2rem", marginTop:'1rem', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', textAlign:'center'}}>  
        <Box sx={{marginInline:'2rem' , backgroundColor:'color3t2', padding:'0.75rem', borderRadius:'1rem'}} > 
          <MapSharp sx={{fontSize:'3rem',marginInline:'1rem' ,color:'color3'}} />
          <Typography sx={{fontSize:'1.3rem', fontWeight:'600',margin:'0.4rem' ,color:'color3'}} >Top Circuitos
          </Typography>
        </Box>
        <Box sx={{marginBlock:'1rem'}}>
          <Typography sx={{display:"flex",color:'color3',
          fontWeight:'700' ,fontSize:"1.5rem"}}>
            ¡Estos son los destinos más buscados! 🗺️
          </Typography>
          <Typography sx={{marginBlock:'1rem'}}> Perú en el mundo
              Maravíllate con la diversidad de nuestra riqueza natural, cultural e histórica.
          </Typography>
        </Box>
        <Box  sx={{ position: 'absolute', width:'180px', height:'180px',
              top: '48%', zIndex:'-200',
              left: '95%', opacity:'0.5',
              transform: 'translate(-10%, -50%)',}} component='img' src={ilustracion}>
        </Box>
        
      </Box>  

        <Slider/>
    </Box>
  )
}
