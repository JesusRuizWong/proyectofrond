import { CarCrash, CarRental, Hotel, Search } from '@mui/icons-material'
import { Typography,Box, Slide} from '@mui/material'
import React from 'react'
import Slider from './carousel/components'
import SearchHotels from './components'



export default function Autos() {
  return (
    <Box sx={{ marginBottom:'1rem'}}>
      <Slider />

      <Box sx={{padding:"2rem", marginTop:'1rem', display:'flex',flexDirection:'row-reverse' , flexWrap:'wrap', alignItems:'center', justifyContent:'center', textAlign:'center'}}>  
        <Box sx={{marginInline:'2rem' , backgroundColor:'color4t2', padding:'0.75rem', borderRadius:'1rem'}} > 
          <CarRental sx={{fontSize:'3rem',marginInline:'1rem' ,color:'color4'}} />
          <Typography sx={{fontSize:'1.3rem', fontWeight:'600',margin:'0.4rem' ,color:'color4'}} >Top Vehículos y más
          </Typography>
        </Box>
        <Box sx={{marginBlock:'1rem'}}>
          <Typography sx={{display:"flex",color:'color4',
          fontWeight:'700' ,fontSize:"1.5rem"}}>
            ¡Estos son los automóviles y motos más recomendadas! 🛻 🏍 
          </Typography>
          <Typography sx={{marginBlock:'1rem'}}> Confort y Seguridad
              Maravíllate con la diversidad de alojamientos, y los mejores precios.
          </Typography>
        </Box>

      </Box>  
      
      <Box >


      </Box>
      <SearchHotels />

    </Box>
  )
}
