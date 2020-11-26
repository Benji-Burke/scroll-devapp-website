import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <a href="#home" id="navbar__logo">DevApp Agency</a>
                    <div className="navbar__toggle" id="mobile-menu">
                        <span className="bar"></span> <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="#home" className="navbar__links" id="home-page">Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#about" className="navbar__links" id="about-page">About</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#services" className="navbar__links" id="services-page"
                            >Services</a
                            >
                        </li>
                        <li className="navbar__btn">
                            <a href="#sign-up" className="button" id="signup">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
