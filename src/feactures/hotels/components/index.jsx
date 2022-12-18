import React, {  useEffect, useState} from "react"; 
import { ChevronLeft, ChevronRight,Search} from "@mui/icons-material";
import { Box,Paper,InputBase,IconButton,Typography,Rating,Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions } from "@mui/material";
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../../services/firebaseConfigs/firebase'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ApiKeyGM } from "../../../services/googlemapsconfig/Apikey"; 
  
const containerStyle = {
  width: '94%',
  height: '400px',
  marginInline: '3%',
};

  const Slider = () => {
    const [ item, setItem ] = useState([])
    const [ search, setSearch ] = useState("")
    const [open, setOpen] = React.useState(false);
    const [ title, setTitle ] = useState('') ; 
    const [ subtitle, setSubTitle ] = useState('') ; 
    const [ score, setScore ] = useState('') ; 
    const [ lat, setLat ] = useState(0) ; 
    const [ lng, setLng ] = useState(0) ; 
  
    const handleClickOpen = async (id) => {
      setOpen(true);
      const docSnap =   await getDoc( doc(db, "hotels", id) ) 
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().gps.lat);
          setTitle(docSnap.data().title)    
          setSubTitle(docSnap.data().subtitle)    
          setScore(docSnap.data().score)  
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
    
    const getItems = async () => {
      const itemsCollection = collection(db,"hotels")
      const data = await getDocs(itemsCollection)
      const p = await data.docs.map((doc) => ({...doc.data(), id:doc.id }));
      setItem(p)
      return  p;
    }
  
    const searcher = (e) => {
      setSearch(e.target.value)   
  }
 //metodo de filtrado 2   
 const results = !search ? item : item.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

 useEffect( ()=> {
  getItems()
}, [])
  
    return (
      <Box sx={{ backgroundColor: 'transparent',
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column'
      }} >
        <Box sx={{display:'flex', justifyContent:'center'}} >
          <Paper
              component="form"
              sx={{ p: '2px 3px', display: 'flex',alignItems: 'center', width:'80%', marginBlock:'2rem' , borderRadius:'2rem' }}
            >
              <InputBase
                value={search} onChange={searcher}
                sx={{ ml: 2, flex: 1 }}
                placeholder="Encuentre su Hotel"
                inputProps={{ 'aria-label': 'Encuentre su Hotel' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <Search />
              </IconButton>
          </Paper>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center',flexWrap:'wrap'}} >
                { results.map( (item) => (
                            <Box style={{width:'300px'}}  key={item.id}
                            sx={{display:'flex' ,justifyContent:'center'}}>
                             <Box 
                                sx={{  backgroundColor:'white' , borderRadius:'1rem',
                                height:'420px'  ,width:"80%", margin:'0.5rem' }} >   
                               <Box  component='img'
                                 id='bannerImg'
                                     sx={{ 
                                     height:'60%' ,
                                     objectFit:'cover',
                                     width: '100%',
                                     borderRadius:'1rem 1rem 0 0'
                                     }} src={item.imgurl} alt={item.title}>
                               </Box> 
                               
                               <Box  sx={{            }}>
                                   <Typography sx={{fontWeight:'600' ,  fontSize:'1.1rem', color:'color3', marginBlock:'1rem'}} >{item.title} </Typography> 
                                   <Typography  sx={{textOverflow:'ellipsis', marginInline:'10%',width:'80%', height:'50px' ,
                                    overflow:'hidden', whiteSpace:'pre-line'}}>{item.subtitle} </Typography>... 
                               </Box>
                 
                               <Box   sx={{marginBlock:'1rem'}}>
                                   <Button size="small" variant="outlined" sx={{marginInline:'0.5rem'}}>Consulta</Button>
                                   <Button size="small" variant="outlined"  sx={{marginInline:'0.5rem'}} onClick={() =>{ handleClickOpen(item.id)}}>Ver Más</Button>
                               </Box>
                             
                             </Box>      
                 
                           </Box>           
                ))}
        </Box>
    
        <LoadScript async  
                    googleMapsApiKey={ApiKeyGM}
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

                <Box  sx={{marginBlock:'1rem'  }}>
                      <Typography >Puntuación: {score} ({item.amount}) </Typography> 
                      <Rating name="read-only" value={score} precision={0.1} readOnly />
                </Box>
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
  };
  
  export default Slider;
  