import { Book, BookOnlineSharp, WhatsApp } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './form.css'

export default function Form() {
  return (
 <section className="contact" id="contact">
        <Box sx={{display:'flex', justifyContent:'center', textAlign:'center' , padding:'4rem' }}>
        <Link style={{ textDecoration: "none", color:'color5' , fontSize:'1rem' }}    to={{ pathname: "https://wa.me/51962621679" }} target="_blank" >  Escribenos a WhatsApp 
        <WhatsApp style={{ textDecoration: "none" ,  fontSize:'1rem' }}  color='color5' href="https://wa.me/51962621679" />
          O dejanos un correo. ✌️
         </Link>
         </Box>
            
            
           

        <div className="row">

            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin"  loading="lazy"></iframe>

            <form action="">
                <h3>Formulario</h3>
                <input type="text" placeholder="Tu nombre" className="box"/>
                <input type="email" placeholder="Correo electrónico" className="box"/>
                <input type="tel" placeholder="Asunto" className="box"/>
                <textarea placeholder="Tu mensaje" className="box" cols="30" rows="10"></textarea>
                <input type="submit" value="Enviar mensaje" className="btn"/>
                <aside className="bd-aside">
                    <section>
                        <p className="bold">Aplica Ya!</p>
                        <p>Adquiere alguno de nuestros planes de viaje y recibirás un <a className="bold">ebook</a> con los mejores tips del viajero frecuente.</p>
                        <p>Ve y reserva <a href="" className="a-hoteles">Hoteles ⇉</a></p>                    
                        <br/>
                        <BookOnlineSharp/>
                    </section>
                </aside>
            </form>
        </div>

</section>
  )
}
