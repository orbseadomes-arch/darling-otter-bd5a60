import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>OrbSea</h1>
        <h2>Luxury Ocean Domes</h2>
        <p>
          Experience a new way of ocean living with private floating domes
          designed for sustainability, independence, and modern comfort.
        </p>
        <a href="#contact" className="button">Enquire Now</a>
      </header>

      <section className="section">
        <h3>Luxury Ocean Living</h3>
        <p>
          OrbSea combines eco-conscious design with premium comfort,
          creating unique floating accommodation experiences.
        </p>
      </section>

      <section className="section" id="contact">
        <h3>Contact</h3>
        <p>Email: info@orbsea.co.uk</p>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
