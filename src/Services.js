import React from 'react'

export default function Services() {
    return (
        <div className="services" id="services">
      <h1>Our Services</h1>
      <div className="services__wrapper">
        <div className="services__card">
          <h2>Web Design</h2>
          <p>Modern Practices</p>
          <div className="services__btn"><button>Contact us</button></div>
        </div>
        <div className="services__card">
          <h2>Web Apps</h2>
          <p>Invision youridea</p>
          <div className="services__btn"><button>Get Started</button></div>
        </div>
        <div className="services__card">
          <h2>Mobile Apps</h2>
          <p>Create your idea</p>
          <div className="services__btn"><button>Get Started</button></div>
        </div>
        <div className="services__card">
          <h2>Consulting</h2>
          <p>We're here to help</p>
          <div className="services__btn"><button>Get Started</button></div>
        </div>
      </div>
    </div>

    )
}
