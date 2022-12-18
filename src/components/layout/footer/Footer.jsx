import { Facebook,Home, Instagram, YouTube } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';
// import './footer.css'

export default function Footer() {
  
  return (

      <Box className='footer' component="footer" sx={{ py: 6 }}>
          <Container  maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              Hola
            </Typography>
            <Container >
              <Home />
              <Facebook />
              <Instagram />
              <YouTube />
            </Container>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
              bgcolor="primary"
            >
              Que tal
            </Typography>
          
          </Container>
        </Box>

  )
}
