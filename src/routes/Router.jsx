import Footer from "../components/layout/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "../components/layout/menu/ResponsiveAppBar";
import Home from "../feactures/Home/Home";
import Circuits from "../feactures/circuits/circuits";
import YouAreLost from "../feactures/404/YouAreLost";
import Autos from "../feactures/autos/Autos";
import Hotels from "../feactures/hotels/Hotels";
import Contact from "../feactures/contact/contact";



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
        <Route exact path="/Contactanos" element={<Contact />}/>        
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default Router;