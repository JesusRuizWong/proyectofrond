import { FastRewind, MapSharp, MonetizationOn, RocketLaunch, Security, ShutterSpeed } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Info() {
  return (

      <Box sx={{width:'100%' , marginTop:'2rem', display:'flex', flexDirection:'column' , flexWrap:'wrap', alignItems:'center', justifyContent:'center', textAlign:'center'}}>  
        <Box>
        <Typography sx={{fontSize:'1.1rem', fontWeight:'600',margin:'0.4rem' ,color:'#566573'}} >Todo en un solo Lugar
            </Typography>
        </Box>
     
        <Box sx={{width:'80%' , backgroundColor:'#EBEDEF ', padding:'0.75rem', borderRadius:'1rem', display:'flex', justifyContent:'space-around'}} > 
          <Box>
            <Security sx={{fontSize:'1.5',marginInline:'1rem' ,color:'color1'}} />
            <Typography sx={{fontSize:'1.1rem', fontWeight:'600',margin:'0.4rem' ,color:'#566573'}} >Seguridad
            </Typography>
            <Typography sx={{fontSize:'0.75rem', fontWeight:'300',margin:'0.4rem' ,color:'#566573'}} >Encontrarás servicios verificados, con puntajes.
            </Typography>
          </Box>
            <Box>
            <RocketLaunch sx={{fontSize:'1.5rem',marginInline:'1rem' ,color:'color1'}} />
            <Typography sx={{fontSize:'1.1rem', fontWeight:'600',margin:'0.4rem' ,color:'#566573'}} >Agilidad
            </Typography>
            <Typography sx={{fontSize:'0.75rem', fontWeight:'300',margin:'0.4rem' ,color:'#566573'}} >Todo centralizado, para una escapada de la rutina.
            </Typography>
          </Box>
          <Box>
            <MonetizationOn sx={{fontSize:'1.5rem',marginInline:'1rem' ,color:'color1'}} />
            <Typography sx={{fontSize:'1.1rem', fontWeight:'600',margin:'0.4rem' ,color:'#566573'}} >Económico
            </Typography>
            <Typography sx={{fontSize:'0.75rem', fontWeight:'300',margin:'0.4rem' ,color:'#566573'}} >Puedes elegir el precio que más te convenga.
            </Typography>            
          </Box>              
 
        </Box>
        
      </Box>  

  )
}
