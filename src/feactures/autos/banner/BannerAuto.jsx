import React from 'react'
import './bannerautos.css'

export default function BannerAuto() {
  return (
    <section className="home" id="home">
        <h3 data-speed="-2" className="home-parallax">escoge tu carro</h3>
        <img data-speed="5" className="home-parallax" src="https://firebasestorage.googleapis.com/v0/b/travesia-465c3.appspot.com/o/WhatsApp%20Image%202022-12-17%20at%208.01.31%20PM.jpeg?alt=media&token=0622ad01-f9a7-4a64-b4ac-ce20d565be9b" alt="banner"/>
        <a data-speed="7" href="#" className="btn home-parallax">Reserva</a>
    </section>
  )
}
