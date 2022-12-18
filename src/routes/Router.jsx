import Footer from "../components/layout/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "../components/layout/menu/ResponsiveAppBar";
import Home from "../feactures/Home/Home";
import Circuits from "../feactures/circuits/circuits";
import YouAreLost from "../feactures/404/YouAreLost";
import Autos from "../feactures/autos/Autos";
import Hotels from "../feactures/hotels/Hotels";



const Router =()=>{
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
        <Route  path="/" element={<Home />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/Circuitos" element={<Circuits />}/>
        <Route exact path="/Autos" element={<Autos />}/>
        <Route exact path="/Hoteles" element={<Hotels />}/>
        {/* <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/notfound" element={<NotFoundPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/bannercontents" element={<BannerContents/>}/> */}
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default Router;