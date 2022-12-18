import { Hotel, MapSharp, Search } from '@mui/icons-material'
import { Typography,Box, Slide} from '@mui/material'
import React from 'react'
import Slider from './carousel/components'
import SearchHotels from './components'



export default function Circuits() {
  return (
    <Box sx={{ marginBottom:'1rem'}}>
      <Slider />

      <Box sx={{padding:"2rem", marginTop:'1rem', display:'flex',flexDirection:'row-reverse' , flexWrap:'wrap', alignItems:'center', justifyContent:'center', textAlign:'center'}}>  
        <Box sx={{marginInline:'2rem' , backgroundColor:'color3t2', padding:'0.75rem', borderRadius:'1rem'}} > 
          <MapSharp sx={{fontSize:'3rem',marginInline:'1rem' ,color:'color3'}} />
          <Typography sx={{fontSize:'1.3rem', fontWeight:'600',margin:'0.4rem' ,color:'color3'}} >Top Circuitos Turísticos
          </Typography>
        </Box>
        <Box sx={{marginBlock:'1rem'}}>
          <Typography sx={{display:"flex",color:'color3',
          fontWeight:'700' ,fontSize:"1.5rem"}}>
           ¡Estos son los destinos más buscados! 🗺️
          </Typography>
          <Typography sx={{marginBlock:'1rem'}}> Confort y Seguridad
              Maravíllate con la diversidad de lugares por conocer, y los mejores precios.
          </Typography>
        </Box>

      </Box>  
      
      <Box >


      </Box>
      <SearchHotels />

    </Box>
  )
}
