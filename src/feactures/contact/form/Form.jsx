import { Book } from '@mui/icons-material'
import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div>
 <><section className="contact" id="contact">

<h1 className="heading"><span>Contacta</span>nos</h1>

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
                <Book/>
            </section>
        </aside>
    </form>
</div>

</section></>
     </div>
  )
}
