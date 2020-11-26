import * as React from 'react';
import { Button } from '../Button';
import { MenuItems } from './MenuItems'
import './Navbar.css'

class NavbarComponent extends React.Component{   
    state = { clicked: false }

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }


    render(){
        return(
            <nav className="NavbarItems "  >
                <h1 className="navbar-logo">DevApp Agency<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                   
                </ul>
                <Button>Contact Us</Button>
            </nav>
            
        )
    }
  
}

export default NavbarComponent;