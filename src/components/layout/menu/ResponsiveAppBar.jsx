import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Icon from '@mui/material/Icon';
import {Link, NavLink } from 'react-router-dom';
import { AirOutlined, AirplanemodeActive, AirplaneTicket, AirSharp, Flaky } from '@mui/icons-material';
import './appbar.css'




const pages = [  {id:'1', nombre:'Home' , icon:'home', color:'color1' , colort1:'color1t1' , colort2:'color1t2'  } ,   
                 {id:'2', nombre:'Hoteles' , icon:'hotel',color:'color2', colort1:'color2t1' , colort2:'color2t2'  } ,
                 {id:'3', nombre:'Circuitos' , icon:'maps',color:'color3',  colort1:'color3t1' , colort2:'color3t2'  } ,
                 {id:'4', nombre:'Autos' , icon:'local_taxi',color:'color4',  colort1:'color4t1' , colort2:'color4t2'  } ,
                 {id:'5', nombre:'Contactanos' , icon:'perm_phone_msg',color:'color5', colort1:'color5t1' , colort2:'color5t2' } ];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  window.addEventListener("scroll", function(){
    const header = document.getElementById("nav");
    header.classList.toggle("animacionScroll",window.scrollY>0);
 
})
  return (
    <AppBar id='nav' position="fixed" style={{backgroundColor:'transparent', boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AirplanemodeActive sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TRAVESIA
          </Typography>

          <Box sx={{  flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
         
            >
              <MenuIcon />
            </IconButton>
            <Menu  
            
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{  
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => ( 

                <MenuItem  mx={3} key={page.id} onClick={handleCloseNavMenu}
                 sx={{ ":hover" : {backgroundColor: `${page.colort2}`,    }  }} >
                <NavLink style={{ textDecoration: "none" }} to={page.nombre}    >
                  <Box  sx={{ display:'flex', alignItems:'center',marginInline:'5%' ,height:'80px',  width:'350px'}}>           
                      <Icon   sx={{borderRadius:'50%', padding:'1rem', backgroundColor:`${page.colort2}`,color:`${page.color}` }}>{page.icon}</Icon>
                      <Typography   color={page.color} mx={3} textAlign='center'>{page.nombre}</Typography>
                  </Box> 
                  </NavLink>
                </MenuItem>

              ))}
            </Menu>
          </Box>
          <AirplaneTicket sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TRAVESIA
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink  style={{ textDecoration: "none" }} to={page.nombre}   key={page.id}>
                <Button 
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'flex' }}
                >  
                  <Typography  color= 'white'   textTransform="none" mx={1} >{page.nombre}</Typography>
                </Button>
                </NavLink>  
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography  textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;