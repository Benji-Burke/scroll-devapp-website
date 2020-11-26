import logo from './logo.svg';
import './styles.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import About from './About';
import Services from './Services';

function App() {
  return (
    <div className="App">
       <NavbarComponent/>
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
       
        
      </header>


 
    {/* <div className="hero" id="home">
      <div className="hero__container">
        <h1 className="hero__heading">DevApp <span>Agency</span></h1>
        <p className="hero__description">Unlimited Possibilities</p>
        <button className="main__btn"><a href="#">Explore</a></button>
      </div>
    </div> */}

    <Home/>
    {/* <div className="main" id="about">
      <div className="main__container">
        <div className="main__img--container">
          <div className="main__img--card"><i className="fas fa-layer-group"></i></div>
        </div>
        <div className="main__content">
          <h1>What do we do?</h1>
          <h2>We help businesses scale</h2>
          <p>Schedule a call to learn more about our services</p>
          <button className="main__btn"><a href="#">Schedule Call</a></button>
        </div>
      </div>
    </div> */}
    <About/>

    {/* <div className="services" id="services">
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
    </div> */}

 
    <Services/>
    <div className="main" id="sign-up">
      <div className="main__container">
        <div className="main__content">
          <h1>Join Our Team</h1>
          <h2>Free Consulatation</h2>
          <p>See what makes us different</p>
          {/* <button className="trigger button" id="">Contact Us</button> */}
          <ContactForm/>
        </div>
        <div className="main__img--container">
          <div className="main__img--card" id="card-2">
            <i className="fas fa-users"></i>
          </div>
        </div>
      </div>
    </div>


    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>About Us</h2>
            <a href="/sign__up">How it works</a> <a href="/">Testimonials</a>
            <a href="/">Careers</a> <a href="/">Terms of Service</a>
          </div>
          <div className="footer__link--items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a> <a href="/">Support</a>
            <a href="/">Destinations</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a> <a href="/">Facebook</a>
            <a href="/">Youtube</a> <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media--wrap">
          <div className="footer__logo">
            <a href="/" id="footer__logo">DevApp Agency</a>
          </div>
          <p className="website__rights">© DevApp Agency 2020. All rights reserved</p>
          <div className="social__icons">
            <a href="/" className="social__icon--link" target="_blank"
              ><i className="fab fa-facebook"></i
            ></a>
            <a href="/" className="social__icon--link"
              ><i className="fab fa-instagram"></i
            ></a>
            <a href="/" className="social__icon--link"
              ><i className="fab fa-youtube"></i
            ></a>
            <a href="/" className="social__icon--link"
              ><i className="fab fa-linkedin"></i
            ></a>
            <a href="/" className="social__icon--link"
              ><i className="fab fa-twitter"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
 
    </div>

  );
}

export default App;
