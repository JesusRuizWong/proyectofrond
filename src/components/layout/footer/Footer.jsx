import { AirplanemodeActive, Facebook,Home, Instagram, YouTube } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
// import './footer.css'

export default function Footer() {
  
  return (

      <Box className='footer' component="footer" sx={{ backgroundColor:'#34495E', paddingTop:'1rem'  ,borderRadius:'1rem 1rem 0 0', marginTop:'3rem' }}>
            <Box sx={{ backgroundColor:'#34495E',color:'white', display:'flex',
             flexDirection:'row-reverse' ,justifyContent:'space-around', flexWrap:'wrap', padding:'3rem' }}>
              <Box sx={{display:'flex', marginInline:'4%',transition:'all 300ms' ,":hover" : {transform:'scale(1.1)'}}}>
                <AirplanemodeActive sx={{ display: { xs: 'flex', md: 'flex' , color:'white'}, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'flex' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  TRAVESIA
                </Typography>
              </Box>
              
                <Box sx={{marginInline:'4%',  display:'flex', justifyContent:'center' ,flexDirection:'column-reverse', marginTop:'2rem' }} >
                    <Typography sx={{width:'300px', justifyContent:'center', display:'flex',marginBlock:'1rem'}}>Siguenos</Typography>

                    <Box sx={{width:'300px', justifyContent:'center', display:'flex'}}>
                      <Facebook  sx={{ transition:'all 300ms' ,":hover" : {transform:'scale(1.4)'}}} />
                      <Instagram   sx={{ marginInline:'3%', transition:'all 300ms' ,":hover" : {transform:'scale(1.4)'}}} />
                      <YouTube  sx={{ transition:'all 300ms' ,":hover" : {transform:'scale(1.4)'}}} />
                    </Box>

                </Box>
                <Typography
                  variant="subtitle1"
                  align="center"
                  component="p"
                  color='white'
                  sx={{marginInline:'2%', padding:'1rem' }}
                >
                  Comunicate con Nosotros   | 📱9517231232
                </Typography>
              
          </Box>

            <Box sx={{ backgroundColor:'#212F3D',color:'white' ,padding:'0.5rem', display:'flex', flexDirection:'row-reverse' ,justifyContent:'space-around', flexWrap:'wrap' }}>
              <Typography sx={{fontSize:'0.85rem', marginInline:'10%'}}>   © 2022   |   Todos los derechos reservados    </Typography>
              <Typography sx={{fontSize:'0.85rem', marginInline:'10%', transition:'all 300ms' ,":hover" : {transform:'scale(1.1)'} }}>  Hecho con  ❣️  por Grupo NN   </Typography>
            </Box>
     </Box>

  )
}
