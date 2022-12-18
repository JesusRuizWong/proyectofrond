import { Hotel } from '@mui/icons-material'
import { Typography,Box } from '@mui/material'
import React from 'react'
import Slider from './components'

export default function TopHotels() {
  return (
    <Box sx={{padding:"1rem", marginBottom:'1rem'}}>
      <Box sx={{padding:"2rem", marginTop:'1rem', display:'flex',flexDirection:'row-reverse' , flexWrap:'wrap', alignItems:'center', justifyContent:'center', textAlign:'center'}}>  
        <Box sx={{marginInline:'2rem' , backgroundColor:'color2t2', padding:'0.75rem', borderRadius:'1rem'}} > 
          <Hotel sx={{fontSize:'3rem',marginInline:'1rem' ,color:'color2'}} />
          <Typography sx={{fontSize:'1.3rem', fontWeight:'600',margin:'0.4rem' ,color:'color2'}} >Top Hoteles
          </Typography>
        </Box>
        <Box sx={{marginBlock:'1rem'}}>
          <Typography sx={{display:"flex",color:'color2',
          fontWeight:'700' ,fontSize:"1.5rem"}}>
            ¡Estos son los alojamientos más recomendados! 🏨
          </Typography>
          <Typography sx={{marginBlock:'1rem'}}> Confort y Seguridad
              Maravíllate con la diversidad de alojamientos, y los mejores precios.
          </Typography>
        </Box>

      </Box>  
        <Slider/>
    </Box>
  )
}
